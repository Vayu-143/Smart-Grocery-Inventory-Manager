import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark px-4">
      <h3 className="navbar-brand">
        Smart Grocery Inventory
      </h3>

      <button
        className="btn logout-btn"
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;