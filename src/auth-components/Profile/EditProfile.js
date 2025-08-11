import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, Navigate, useNavigate  } from "react-router-dom";

import axios from "axios";

import { setUser } from "../../Redux/authSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { username: paramUsername } = useParams();
  const navigate = useNavigate();
  const [justUpdated, setJustUpdated] = useState(false);

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

  if (!user) return null;

    // Redirect if user is trying to edit someone else's profile
  if (!justUpdated && user && user.username !== paramUsername) {
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
        `http://localhost:5000/api/patch/update/${user.id}`,
        { name, username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(setUser(response.data.user));
      setJustUpdated(true); // Ignore ownership check for this render
      alert("Profile updated successfully");
      navigate(`/edit-profile/${username}`);
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
