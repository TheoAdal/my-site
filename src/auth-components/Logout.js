import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logout } from "../Redux/authSlice";
import { persistor } from "../Redux/store"; // adjust path if needed

const LogoutButton = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    } finally {
      dispatch(logout());
      persistor.purge();
      navigate("/login");
    }
  };

  return (
    <button onClick={handleLogout}>
      {children || "Logout"}
    </button>
  );
};

export default LogoutButton;
