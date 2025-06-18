import React, { useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import './Register.css' // Import eye icons from react-icons

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const Register = ({ onSuccess, onCancel }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const { storeTokenInLS } = useAuth();
  const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility

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
    try {
      window.location.href = `${API_URL}/auth/google`;
    } catch (error) {
      toast.error(error);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <div className="password-container">
            <input
              name="password"
              type={showPassword ? "text" : "password"}  // Toggle between password and text
              value={user.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="eye-icon"
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <FaEyeSlash />  // Eye icon for hidden password
              ) : (
                <FaEye />  // Eye icon for visible password
              )}
            </button>
          </div>
        </div>
        <div className="modal-buttons">
          <button type="submit" className="btn-submit">
            sign up
          </button>
        </div>
      </form>
      <br />
      <button onClick={handleGoogleSignup} className="signup-btn google">
        <i className="fab fa-google"></i> Sign up with Google
      </button>
    </div>
  );
};