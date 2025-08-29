import React, { useState } from "react";
import "./Contact.css";

import axios from "axios";

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
      const response = await axios.post(
        "http://localhost:5000/postroutes/user/contact",
        {
          name,
          email,
          text,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        //Reset form
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
    <div>
      <form onSubmit={handleSubmit} className="nes-container is-centered Contact-form">
        <div className="Contact-form-content">
          <h3 className="Contact-form-title">Contact</h3>
          <div className="input-field">
            <div className="nes-field">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="nes-input input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-field">
            <div className="nes-field">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="nes-input input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-field">
              <textarea
                id="textarea_field"
                placeholder="Message"
                className="nes-textarea textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
          </div>
          <button type="submit" className="nes-btn is-primary btn-primary">
            Send
          </button>
        </div>
      </form>

      {status && (
        <p
          className={
            status.type === "success"
              ? "nes-text is-success"
              : "nes-text is-error"
          }
        >
          {status.message}
        </p>
      )}
    </div>
  );
}

export default Contact;
