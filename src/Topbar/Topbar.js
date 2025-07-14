import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/authSlice";

import "./TopBarNavStyles.css";

export default function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("access_token");

      if (token) {
        await axios.post(
          "http://localhost:5000/api/post/user/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (err) {
      console.error("Error during logout:", err);
      // Optional: show error to user
    } finally {
      dispatch(logout());
      navigate("/login");
    }
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </div>
  );
}

// {!isAuthenticated ? (
//           <Link to="/login">Login</Link>
//         ) : (
//           <>
//             {/* Optionally show user name */}
//             {/* {user && <span style={{ marginRight: "10px" }}>Hi, {user.name || user.email}</span>} */}
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         )}
