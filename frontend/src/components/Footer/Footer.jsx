import './Footer.css'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_BACKEND_URL;



const Footer = () => {

  const [email, setEmail] = useState({
      email: '',
      
    });
  
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
  
      // Perform form validation or data submission
      try {
        console.log(`this is it ${API_URL}/messages/subscribeUs`);
        const response = await fetch(`${API_URL}/messages/subscribeUs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(email),
        });
  
        const data = await response.json();
        if (response.ok) {
          toast.success('Thanks For Subscribing');
          // Reset the form
          setEmail({
            email: '',
          });
        } else {
          toast.error(data.message || 'An error occurred.');
        }
      } catch (err) {
        console.error(err);
        toast.error('An unexpected error occurred');
      }
    };



  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Side: Tagline */}
        <div className="footer-left">
          <div className="footer-tagline-img">
  <img src="/images/footer-image.png" alt="AI-powered clean living tagline" />
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
    placeholder="enter your email"
    className="newsletter-input"
    onChange={handleInputChange}
    required
  />
  <button type="submit" className="btn-submit">
    subscribe
  </button>
</form>
          

          <div className="social-footer">
        <p className="footer-tags-p" style={{ fontWeight: 'bold' }}>stay in the loop</p>
        <img src="/images/arrow.png" alt="arrow" className="footer-arrow" />
        <div className="footer-tags">
          <a href="https://www.instagram.com/cleanclick_/" target="_blank" rel="noopener noreferrer">
            instagram
          </a>
          <a href="https://www.tiktok.com/@cleanclick_" target="_blank" rel="noopener noreferrer">
            tiktok
          </a>
          <a href="https://www.youtube.com/@cleantvworld" target="_blank" rel="noopener noreferrer">
            youtube
          </a>
        </div>
      </div>
          <p className="email-link">✉️ hello@cleanclick.com</p>
        </div>
      </div>

      <p className="copy">copyright CleanClick 2025</p>
    </footer>
  );
};

export default Footer;