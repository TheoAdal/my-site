import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";

import axios from "axios";

import { setUser } from "../../Redux/authSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { username: paramUsername } = useParams();

  const { user, token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });



  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "", // not editable
        password: "", // not editable
      });
    }
  }, [user]);

    // Redirect if user is trying to edit someone else's profile
  if (user.username !== paramUsername) {
    return <Navigate to="*" replace />;
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, username } = formData;

      const response = await axios.patch(
        `http://localhost:5000/api/patch/update/${user._id}`,
        { name, username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(setUser(response.data)); // Update Redux store with the new info
      alert("Profile updated successfully");
    } catch (err) {
      console.error("Profile update error:", err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="profile-form-container">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input name="email" value={formData.email} disabled />

        <label>Password:</label>
        <input type="password" name="password" value="********" disabled />
        <Link to={`/profile/${user.username}`}>Cancel</Link>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
