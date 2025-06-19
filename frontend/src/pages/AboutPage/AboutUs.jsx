import { React, useState} from "react";
import "./AboutUs.css";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoCartSharp } from "react-icons/io5";
import { Navbar } from "../../components/NavbarComponent/Navbar";
import { Modal } from "../../components/Modal/Modal";
import { Register } from "../RegisterPage/Register";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const API_URL = process.env.REACT_APP_BACKEND_URL;


export const AboutUs = () => {
  const { isLoggedIn } = useAuth();
    const [showRegister, setShowRegister] = useState(false);
  
    const handleSubmit = async (e) => {
      if(isLoggedIn){
        toast.success('Your are already logged in')
      }
      else{
        try {
          window.location.href = `${API_URL}/auth/google`;
        } catch (error) {
          console.log(error);
        }
      }
  
  
     
    };
  return (
    <>
    <section className="cleanclick-container">
      {/* Header */}
      <section className="top-g">
      <Navbar page = {'AboutUs'}/>
      <Header/>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* <h1 className="hero-title">
            We're building the future of <em>clean living</em>
            <br />
            —powered by AI, shaped by <em>community</em>,
            <br />
            and driven by <em>impact</em>.
          </h1> */}
          <div className="hero-title-img">
  <img src="/images/hero-title-img.png" alt="We're building the future of clean living" />
</div>

          <p className="hero-subtitle">
            CleanClick makes it easy to live well and make cleaner choices that support your health, your values and the planet.
          </p>

          {/* <div className="hero-description">
            <p>Enjoy content without the brain-rot,</p>
            <p>connect with like-minded people,</p>
            <p>discover clean brands and shop better,</p>
            <p className="hero-emphasis">
              ...all in one playful, purposeful platform.
            </p>
          </div> */}


          <div className="we-com">
          {/* <div className="we-com-tagline-img">
  <img src="/images/footer-image.png" alt="AI-powered clean living tagline" />
</div> */}
        </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="opportunity-section">
        <div className="opportunity-container">
          <div className="opportunity-image">
            <img src="/images/5.png" alt="Person with natural skincare" />
          </div>
          <div className="opportunity-content">
            <img
  src="/images/the-opportunity.png"
  alt="The Opportunity"
  className="opportunity-title-img"
/>
<div className="opportunity-para">
                <h3>People are hungry for change</h3>
                <p>
                  The growing wave of health-focused, and environmentally and socially conscious
                  shoppers want products that align with their values.
                </p>
                <h3>Brands are missing the connection</h3>
                <p>
                  Many purpose-driven brands struggle to reach their audience
                  effectively—especially on content-focused channels.
                </p>
                <h3>Content overload is real</h3>
                <p>
                  People crave clean-living guidance but are overwhelmed by the noise and clutter online.
                </p>
                </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="solution-image">
            <img src="/images/solution-new.jpg" alt="Clean living products" />
          </div>
          <div className="solution-content">
            <img
  src="/images/our-solution.png"
  alt="Our Solution"
  className="section-heading"
/>
<div className="section-para">
                <h3>Curated discovery</h3>
                <p>
                  Find vetted brands, creators and content tailored to your lifestyle.
                </p>
                <h3>Engaging content</h3>
                <p>
                  Scroll without the "brainrot"—quality videos, guides, and
                  stories that inform and inspire.
                </p>
                <h3>Social connection</h3>
                <p>
                  Connect with like-minded people, share tips, and amplify
                  authentic voices.
                </p>
                <h3>Seamless shopping</h3>
                <p>
                  Buy better products from brands with purpose—all in one
                  intuitive environment.
                </p>
                </div>
          </div>
          
        </div>
      </section>

      {/* Pick Your Fighter Section */}
          <div className="fighter-section">
            <img
  src="/images/pick-your-fighter.png"
  alt="Pick your fighter"
  className="fighter-title-img"
/>

<div className="fighter-wrapper">
            <div className="fighters-container">
              {/* Explorer */}
              <div className="fighter explorer-fighter">
                <div className="fighter-card">
                <div className="fighter-icon">
                <BiSearch />
                </div>
                  <h3>explorer:</h3>
                  <ul>
                    <li>• discover</li>
                    <li>• search</li>
                    <li>• watch</li>
                  </ul>
                </div>
                <div className="fighter-top">
                  <div className="profile-pic explorer-profile">
                    <img src="/images/8.png" alt="Explorer" />
                  </div>
                </div>
              </div>

              {/* Creator */}
              <div className="fighter creator-fighter">
                <div className="fighter-card">
                  <div className="fighter-icon">
                  <MdPersonAddAlt1 />
                                    </div>
                  <h3>creator:</h3>
                  <ul>
                    <li>• upload</li>
                    <li>• connect</li>
                    <li>• grow</li>
                  </ul>
                </div>
                <div className="fighter-bottom">
                  <div className="profile-pic creator-profile">
                    <img src="/images/9.png" alt="Creator" />
                  </div>
                </div>
              </div>

              {/* Shopper */}
              <div className="fighter shopper-fighter">
                <div className="fighter-card">
                <div className="fighter-icon">
                <IoCartSharp />
                </div>                  <h3>shopper:</h3>
                  <ul>
                    <li>• save</li>
                    <li>• curate</li>
                    <li>• shop</li>
                  </ul>
                </div>
                <div className="fighter-bottom">
                  <div className="profile-pic shopper-profile">
                    <img src="/images/10.png" alt="Shopper" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

      {/* The Magic Section */}
      {/* <section className="magic-section">
        <div className="magic-container">
          <div className="magic-content">
            <img
  src="/images/the-magic.png"
  alt="The Magic"
  className="magic-title-img"
/>
            <div className="magic-points">
              <div className="point">
                <span className="point-title">AI-powered recommendations
                  that learn your preferences and highlight brands and products
                  aligned with your values. </span>
                
              </div>
              <div className="point">
                <span className="point-title">Community insight
                  ensures trust and authenticity—users and creators shaping the
                  platform together. </span>
                
              </div>
              <div className="point">
                <span className="point-title">Ecosystem momentum
                  —a rising wave of passionate brands, creators, and visionaries
                  is making clean living effortless and inspiring. </span>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="signup-box-home">
          {isLoggedIn ? (
            <h2>Congratulations! Your profile has been created.</h2>
          ) : (
            <h2>create a profile</h2>
          )}
          <p>
            The first 1000 sign-ups receive free perks and benefits for life,
            including product discounts, exclusive content, first access to
            events, and more—launching this summer.
          </p>

          {!isLoggedIn && (
            <>
              <button
                className="signup-btn facebook"
                onClick={() => setShowRegister(true)}
              >
                <i className="fa fa-envelope"></i> Sign Up with Mail
              </button>
              <button onClick={handleSubmit} className="signup-btn google">
                <i className="fab fa-google"></i> Sign Up with Google
              </button>
            </>
          )}

        </section>

      {/* Footer CTA */}
    </section>
    
    <Footer/>
    {showRegister && (
                  <Modal onClose={() => setShowRegister(false)}>
                    <Register
                      onSuccess={() => setShowRegister(false)}
                      onCancel={() => setShowRegister(false)}
                    />
                  </Modal>
                )}
    </>
    
  );
};
