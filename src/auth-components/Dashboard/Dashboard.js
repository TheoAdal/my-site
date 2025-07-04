import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Get token from localStorage for authorization
        const token = localStorage.getItem("access_token");

        const response = await axios.get("http://localhost:5000/api/get/user/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to load users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>IN DASHBOARD</h1>
      <h3>Fetched users from /getall route</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
