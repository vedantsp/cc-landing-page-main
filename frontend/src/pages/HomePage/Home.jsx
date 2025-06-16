import React from "react";
import "./Home.css";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";
import { Navbar } from "../../components/NavbarComponent/Navbar";
import Footer from "../../components/Footer/Footer";
const API_URL = process.env.REACT_APP_BACKEND_URL;


const avatars = [
  { img: "/images/@matchaqueen.png", alt: "@matchaqueen" },
  { img: "/images/@bradley2000.png", alt: "@bradley2000" },
  { img: "/images/@eatplaysleep.png", alt: "@eatplaysleep" },
  { img: "/images/@conscious_cass.png", alt: "@conscious_cass" },
  { img: "/images/@earthymamma.png", alt: "@earthymamma" },
  { img: "/images/@flowerchild95.png", alt: "@flowerchild95" },
  { img: "/images/@dogmom.png", alt: "@dogmom" },
  { img: "/images/@hannahbanana.png", alt: "@hannahbanana" },
  { img: "/images/@liveslowdieold.png", alt: "@liveslowdieold" },
  { img: "/images/@marykate96.png", alt: "@marykate96" },
];

export const Home = () => {
 
  const { isLoggedIn } = useAuth();


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
    <section className="h-body">
      <section className="main_des">
        <Navbar/>
        <Header/>


        <h1>Clean living starts here</h1>
        <p>
          The platform for <em>clean</em> fashion, beauty, and wellness.
        </p>
      </section>

      <section className="grid-gallery">
      {/* Card 1: Discover with Search Bar */}
      <div className="card" style={{ backgroundImage: "url('/images/grid-1.png')" }}>
      </div>

      {/* Card 2: Connect */}
      <div className="card" style={{ backgroundImage: "url('/images/grid-2.png')" }}>
      </div>

      {/* Card 3: Watch with Play Icon */}
      <div className="card">
  <video
    className="card-video"
    src="/videos/homepage.mp4"
    autoPlay
    muted
    loop
    playsInline
    poster="/images/img12.jpg"
  ></video>
</div>

      {/* Card 4: Shop with Search Bar */}
      <div className="card" style={{ backgroundImage: "url('/images/grid-4.png')" }}>
      </div>
    </section>

      {/* <section className="community">
        <div className="hero-heading-wrapper">
          <h2 className="hero-heading">
            we're a <span id="community-led" className="italic">community-led</span>
            <br />
            <strong class="AI-powered">AI-powered platform for</strong>
            <br />
            <span id="clean-living" className="italic">clean living.</span>
          </h2> */}
          {/* <img src="/images/spark.png" alt="sparkle" className="sparkle-icon" /> */}
        {/* </div>
      </section> */}
      <section className="definition">
        <h3>
          clean
          <br />
          <span>/kliːn/</span>
        </h3>
        <p className="part-of-speech">
          <strong>adjective</strong>
        </p>
        <p className="definition-text">
          A new standard for conscious living, describes products and practices
          that are responsibly made, cruelty-free, circular, low waste, and high
          quality.
        </p>
        <p className="example">
          <em>
            You can tell she uses clean skincare products, her skin is glowing!
          </em>
        </p>
      </section>

      <div className="category-wrapper">
        <div className="curved-heading">
          <svg viewBox="0 0 500 150" className="curved-text">
            <path
              id="curvePath"
              d="M100,150 A150,150 0 0,1 400,150"
              fill="transparent"
            />
            <text>
              <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
                where to first?
              </textPath>
            </text>
          </svg>
        </div>

        <div className="category-circles">
          <div
            className="circle small"
            style={{ backgroundImage: "url('/images/img12.jpg')" }}
          >
            <span>fashion</span>
          </div>
          <div
            className="circle large"
            style={{ backgroundImage: "url('/images/img2.png')" }}
          >
            <span>beauty</span>
          </div>
          <div
            className="circle small"
            style={{ backgroundImage: "url('/images/img1.png')" }}
          >
            <span>wellness</span>
          </div>
        </div>
      </div>

      <div className="tags">
        <span>DIY lip balm</span>
        <span>thrifting hacks</span>
        <span>how to make matcha</span>
        <span>clean beauty brands</span>
        <span>managing PCOS</span>
        <span>how does fashion rental work?</span>
        <span>breathwork techniques</span>
      </div>

      {/* <div className="search-wrapper">
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="The best places in London for vintage fashion?"
          />
          <i className="fas fa-microphone mic-icon"></i>
        </div>
      </div> */}

      <div className="chat-ui-box">
  {/* Search input inside the chat box */}
  <div className="search-bar-ui">
    <i className="fas fa-search search-icon"></i>
    <input
      type="text"
      placeholder="Start a chat with your clean living assistant"
      readOnly
    />
    <i className="fas fa-microphone mic-icon"></i>
  </div>

  {/* Chat conversation */}
  <div className="chat-container">
    <div className="chat user">
      The best places in London for vintage fashion?
    </div>

    <div className="chat bot">
      If you're looking for vintage fashion, London is the place for it! Are you shopping online or in person?
    </div>

    <div className="chat user">
      In person
    </div>

    <div className="chat bot">
      <p>Sure! Here's some of the best vintage shops in London for a fun day out:</p>
      <ul>
        <li>House of Vintage – Shoreditch</li>
        <li>Atika – Brick Lane</li>
        <li>Rellik – Notting Hill</li>
        <li>Beyond Retro – Dalston & Soho</li>
        <li>Nordic Poetry – Hackney</li>
        <li>Retromania – Victoria</li>
        <li>Goldsmith Vintage – Soho, Camden, Greenwich</li>
        <li>One of a Kind Archive – Portobello Road</li>
        <li>128 - Hackney Road</li>
      </ul>
    </div>
  </div>
</div>


      {/* <section className="definition">
        <h3>
          clean
          <br />
          <span>/kliːn/</span>
        </h3>
        <p className="part-of-speech">
          <strong>adjective</strong>
        </p>
        <p className="definition-text">
          A new standard for conscious living, describes products and practices
          that are responsibly made, cruelty-free, circular, low waste, and high
          quality.
        </p>
        <p className="example">
          <em>
            You can tell she uses clean skincare products, her skin is glowing!
          </em>
        </p>
      </section> */}

      <section className="profile-carousel">
  <div className="carousel-wrapper">
    <div className="carousel-content">
      {[...Array(3)].map((_, i) => (
  <div className="avatars" key={i}>
    {avatars.map((avatar, idx) => (
      <div
        className={`avatar ${idx === avatars.length - 1 ? "last-avatar" : ""}`}
        key={`${i}-${idx}`}
      >
        <img src={avatar.img} alt={avatar.alt} />
        <p>{avatar.alt}</p>
      </div>
    ))}
  </div>
))}
    </div>
  </div>
</section>




      <section className="signup-box-home">
        <h2>Create a profile</h2>
        <p>
          The first 1000 sign-ups receive free perks and benefits for life -
          including product discounts, exclusive content, first access to
          events, and more.
        </p>
        <button onClick={handleSubmit} className="signup-btn google">
          <i className="fab fa-google"></i> Sign in with Google
        </button>
        <button className="signup-btn facebook">
          <i className="fa fa-envelope"></i> Sign in with Mail
        </button>
                {/* <button className="signup-btn apple">
          <i className="fab fa-apple"></i> Sign in with Apple
        </button> */}
      </section>
      <Footer/>
      </section>
    </>
  );
};
