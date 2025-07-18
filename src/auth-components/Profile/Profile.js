import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "./Profile.scss";

const Profile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://localhost:5000/api/get/user/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError("Failed to load profile");
      }
    };

    fetchProfile();
  }, [username]);

  if (error) return <div className="profile-container">{error}</div>;
  if (!profile) return <div className="profile-container">Loading...</div>;

  return (
    <div className="profile-container">
      <h2>@{profile.username}</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      
      {profile.isOwner && (
        <>
          <p><strong>Email:</strong> {profile.email}</p>
          <button className="edit-btn">Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default Profile;
