// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const API_URL = process.env.REACT_APP_BACKEND_URL;

export const Login = ({ onSuccess, onCancel }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        storeTokenInLS(data.token);
        toast.success("Logged in successfully");
        onSuccess();
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="login-modal">
      <h2>Log In</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal-buttons">
          <button type="submit" className="btn-submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}