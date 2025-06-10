import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";

export default function Logout() {
  const { setEmail } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setEmail(""); // Clear the logged-in email
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <p>
        <button onClick={handleLogout}>Yes, Logout</button>
      </p>
    </div>
  );
}
