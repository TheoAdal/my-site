import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState(null); // success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !text) {
      setStatus({ type: "error", message: "All fields are required" });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/postroutes/user/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, text }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        // Reset form
        setName("");
        setEmail("");
        setText("");
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Something went wrong" });
    }
  };

  return (
    <div className="contact-form-container">
      <h1 className="nes-text is-warning">IN CONTACT</h1>

      <form onSubmit={handleSubmit} className="nes-container is-rounded is-dark">
        <div className="nes-field">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="nes-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="nes-field">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="nes-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="nes-field">
          <textarea
            id="text"
            placeholder="Message"
            className="nes-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="nes-btn is-primary">
          Send
        </button>
      </form>

      {status && (
        <p
          className={status.type === "success" ? "nes-text is-success" : "nes-text is-error"}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}

export default Contact;
