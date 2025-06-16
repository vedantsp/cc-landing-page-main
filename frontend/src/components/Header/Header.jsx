// src/components/Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import {Modal} from "../Modal/Modal";
import {Login} from "../../pages/Login"
import {Register} from "../../pages/Register";
import "./Header.css";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="header-container">
      <header className="rounded-header">
        <div className="header-top">
          <NavLink to="/" className="logo">
            CleanClick
          </NavLink>

          {!isLoggedIn ? (
            <div className="btns">
              <button
                className="btn-create_a_profile"
                onClick={() => setShowRegister(true)}
              >
                Create a Profile
              </button>

              <button
                className="btn-login"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            </div>
          ) : (
            <NavLink to="/logout">
              <button  className="btn-logout">Log Out</button>
            </NavLink>
          )}
        </div>
      </header>

      {/* Register Modal */}
      {showRegister && (
        <Modal onClose={() => setShowRegister(false)}>
          <Register
            onSuccess={() => setShowRegister(false)}
            onCancel={() => setShowRegister(false)}
          />
        </Modal>
      )}

      {/* Login Modal */}
      {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <Login
            onSuccess={() => setShowLogin(false)}
            onCancel={() => setShowLogin(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;