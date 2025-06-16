import React from "react";
import "./AboutUs.css";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { IoCartSharp } from "react-icons/io5";
import { Navbar } from "../../components/NavbarComponent/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export const AboutUs = () => {
  return (
    <>
    <section className="cleanclick-container">
      {/* Header */}
      <section className="top-g">
      <Navbar/>
      <Header/>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            We're building the future of <em>clean living</em>
            <br />
            —powered by AI, shaped by <em>community</em>,
            <br />
            and driven by <em>impact</em>.
          </h1>

          <p className="hero-subtitle">
            CleanClick makes it easy to live well with cleaner choices that support your health, your values, and the planet.
          </p>

          <div className="hero-description">
            <p>Enjoy content without the brain-rot,</p>
            <p>connect with like-minded people,</p>
            <p>discover clean brands and shop better,</p>
            <p className="hero-emphasis">
              ...all in one playful, purposeful platform.
            </p>
          </div>

          {/* Pick Your Fighter Section */}
          <div className="fighter-section">
            <h2 className="fighter-title">pick your fighter</h2>
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

          <div className="we-com">
          <p className="we-com-tag">
            <img src="/images/spark.png" alt="sparkle" className="sparkle-icon-a" />
            we’re a <span className="italic-bold">community-led</span><br />
            <span className="bold">AI-powered platform for</span><br />
            <span className="italic-bold-2">clean living.</span>
          </p>
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
            <h2>The Opportunity</h2>
                <h3>Consumers are hungry for change.</h3>
                <p>
                  The growing wave of environmentally and socially conscious
                  shoppers want products that align with their values.
                </p>
                <h3>Brands are missing the connection.</h3>
                <p>
                  Many purpose-driven brands struggle to reach their audience
                  effectively—especially those seeking content, impact-focused
                  channels.
                </p>
                <h3>Content overload is real.</h3>
                <p>
                  People crave clean-living guidance but are overwhelmed by
                  noise—CleanClick cuts through the clutter with clarity and
                  community.
                </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="solution-content">
            <h2>Our Solution</h2>
                <h3>Curated discovery:</h3>
                <p>
                  Find vetted, clean-living brands tailored to your lifestyle.
                </p>
                <h3>Engaging content:</h3>
                <p>
                  Scroll without the "brainrot"—quality videos, guides, and
                  stories that inform and delight.
                </p>
                <h3>Social connection:</h3>
                <p>
                  Connect with like-minded people, share tips, and amplify
                  authentic voices.
                </p>
                <h3>Seamless shopping:</h3>
                <p>
                  Buy better products from brands with purpose—all in one
                  intuitive environment.
                </p>
          </div>
          <div className="solution-image">
            <img src="/images/6.png" alt="Clean living products" />
          </div>
        </div>
      </section>

      {/* The Magic Section */}
      <section className="magic-section">
        <div className="magic-container">
          <div className="magic-content">
            <img src="/images/spark.png" alt="sparkle" className="sparkle-icon-magic" />
            <h2 className="magic-title">The Magic</h2>
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
      </section>

      {/* Footer CTA */}
    </section>
    
    <Footer/>
    </>
    
  );
};
