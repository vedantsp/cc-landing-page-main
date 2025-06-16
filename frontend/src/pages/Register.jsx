// src/pages/Register.jsx
import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const API_URL = process.env.REACT_APP_BACKEND_URL;

export const Register = ({ onSuccess, onCancel }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();
      if (response.ok) {
        storeTokenInLS(data.token);
        toast.success("Registration successful");
        onSuccess();
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="register-modal">
      <h2>Create an Account</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal-buttons">
          <button type="submit" className="btn-submit">
            Register
          </button>
        </div>
      </form>
      <hr />
      <button onClick={handleGoogleSignup} className="signup-btn google">
          <i className="fab fa-google"></i> Sign in with Google
        </button>
    </div>
  );
}