import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

import "./TopBarNavStyles.css";

export default function Topbar() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {!isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
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