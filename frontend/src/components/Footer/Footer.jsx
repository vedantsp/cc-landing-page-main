import "./Footer.css";
import React, { useState } from "react";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Footer = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const [isButtonVisible, setIsButtonVisible] = useState(true);  // Track button visibility
  const [message, setMessage] = useState(""); // Track the success or error message

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting email:", email);

    setIsButtonVisible(false); // Hide the subscribe button
    setMessage("subscribing..."); // Show "subscribing..." message

    // Perform form validation or data submission
    const response = await fetch(`${API_URL}/messages/subscribeUs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Thanks For Subscribing"); // Show success message
      setEmail({
        email: "", // Reset the form
      });
    } else {
      setMessage(data.message || "An error occurred."); // Show error message
    }

    // Reset to the subscribe button after 2 seconds
    setTimeout(() => {
      setIsButtonVisible(true); // Show the button again
      setMessage(""); // Clear the message
    }, 2000);
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Side: Tagline */}
        <div className="footer-left">
          <div className="footer-tagline-img">
            <img
              src="/images/footer-image.png"
              alt="AI-powered clean living tagline"
            />
          </div>
        </div>

        {/* Right Side: Newsletter and Social */}
        <div className="footer-right">
          <label htmlFor="newsletter" className="newsletter-label">
            sign up to our newsletter:
          </label>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              id="newsletter"
              name="email" 
              placeholder="enter your email"
              className="newsletter-input"
              onChange={handleInputChange}
              required
            />
            {/* Conditionally render button or message */}
            {isButtonVisible ? (
              <button type="submit" className="btn-submit">
                subscribe
              </button>
            ) : (
              <span>{message}</span> 
            )}
          </form>

          <div className="social-footer">
            <p className="footer-tags-p" style={{ fontWeight: "bold" }}>
              stay in the loop
            </p>
            <img src="/images/arrow.png" alt="arrow" className="footer-arrow" />
            <div className="footer-tags">
              <a
                href="https://www.instagram.com/cleanclick_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
              <a
                href="https://www.tiktok.com/@cleanclick_"
                target="_blank"
                rel="noopener noreferrer"
              >
                tiktok
              </a>
              <a
                href="https://www.youtube.com/@cleantvworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </a>
            </div>
          </div>
          <p className="email-link">✉ hello@cleanclickgroup.com</p>
        </div>
      </div>

      <p className="copy">copyright CleanClick 2025</p>
    </footer>
  );
};

export default Footer;