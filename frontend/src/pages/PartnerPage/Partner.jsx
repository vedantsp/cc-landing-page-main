import React, { useState } from "react";
import "./Partner.css";
import { toast } from "react-toastify";
import { Navbar } from "../../components/NavbarComponent/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const API_URL = process.env.REACT_APP_BACKEND_URL;


const Partner = () => {
  // Define the state for form fields
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    website: "",
    socials: "",
    message: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform form validation or data submission
    try {
      const response = await fetch(`${API_URL}/messages/partnerMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Your request has been sent!");
        // Reset the form
        setFormData({
          name: "",
          companyName: "",
          email: "",
          website: "",
          socials: "",
          message: "",
        });
      } else {
        toast.error(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
    <section className="partner-body">
      <Navbar page={'Partner'}/>
      <Header/>
      <section className="partner-form">
        <div className="partner-bubble">
  <img
  src="/images/partner-with-us.png"
  alt="Partner with us"
  className="partner-heading"
/>
<div className="partner-body-par">
  <p>Showcase your brand to our conscious, curious community.</p>
  <p>Become an affiliate partner on CleanClick and showcase your brand to our community.</p>
  </div>
</div>

        <form className="partner-contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Brand/Company name"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            //type="url"
            name="website"
            placeholder="Website (require)"
            value={formData.website}
            onChange={handleInputChange}
            required
          />
          <input
            //type="url"
            name="socials"
            placeholder="Socials"
            value={formData.socials}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        {/* <h3>Clean clicks. Real impact. Together.</h3> */}
      </section>
      </section>
      <Footer/>
    </>
  );
};

export default Partner;