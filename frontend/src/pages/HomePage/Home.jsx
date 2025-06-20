import { React, useState } from "react";
import "./Home.css";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";
import { Navbar } from "../../components/NavbarComponent/Navbar";
import Footer from "../../components/Footer/Footer";
import AnimatedChatBot from "../../components/Animationchat/AnimationChatBot";
import { Modal } from "../../components/Modal/Modal";
import { Register } from "../RegisterPage/Register";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const avatars = [
  { img: "/images/@amandamoneysmith.png", alt: "@amandamoney" },
  { img: "/images/@earthymamma.png", alt: "@earthymamma" },
  { img: "/images/@emmaj0an.png", alt: "@emmaj0an" },
  { img: "/images/@howmuchisaveggieburger.png", alt: "@veggieburgerplz" },
  { img: "/images/@ivet.pilatesplaysleep.png", alt: "@ivetalexander" },
  { img: "/images/@jessvincii.png", alt: "@jessvincii" },
  { img: "/images/@katiecooksgreen.png", alt: "@katiecooks" },
  { img: "/images/@lovelaura.png", alt: "@lovelaura" },
  { img: "/images/@maddie.in.nature.png", alt: "@maddie2000" },
  { img: "/images/@madebymeagan.png", alt: "@bymeagan" },
  { img: "/images/@ourcleanlife.png", alt: "@ourcleanlife" },
  { img: "/images/@sarahmoussavi.png", alt: "@sarahmoussavi" },
  { img: "/images/@slowfashionsindo.png", alt: "@sindosunshine" },
  { img: "/images/@styledbygita.png", alt: "@styledbygita" },
  { img: "/images/@zarahsworld.png", alt: "@zarahsworld" },
];

export const Home = () => {
  const { isLoggedIn } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLoggedIn) {
        toast.success('You are already logged in');
      } else {
        // More reliable mobile redirect
        window.location.href = `${API_URL}/auth/google`;
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error('Authentication error:', error);
    }
  };

  return (
    <>
      <section className="h-body">
        <section className="main_des">
          <Navbar />
          <Header />
          <img
            src="/images/home-main-text.png"
            alt="clean living starts here - The platform for clean fashion, beauty, and wellness"
            className="intro-heading-img"
          />
        </section>

        <section className="grid-gallery">
          <div className="card" style={{ backgroundImage: "url('/images/grid-1.png')" }}></div>
          <div className="card" style={{ backgroundImage: "url('/images/grid-2.png')" }}></div>
          <div className="card">
            <video
              className="card-video"
              src="/videos/h-m.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="card" style={{ backgroundImage: "url('/images/grid-4.png')" }}></div>
        </section>

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
            A new standard for living. Products and practices responsibly made — health-conscious, 
            high-quality, natural, cruelty-free, and/or designed with circularity and low waste in mind.
          </p>
          <p className="example">
            <em>
              She's glowing - clearly the clean skincare products are working their magic.
            </em>
          </p>
        </section>

        <AnimatedChatBot />

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
                      <img src={avatar.img} alt={avatar.alt} loading="lazy" />
                      <p>{avatar.alt}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

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
                aria-label="Sign up with email"
              >
                <i className="fa fa-envelope"></i> Sign Up with Mail
              </button>
              <button 
                onClick={handleAuth} 
                className="signup-btn google"
                aria-label="Sign up with Google"
              >
                <i className="fab fa-google"></i> Sign Up with Google
              </button>
            </>
          )}
        </section>
        
        <Footer />
      </section>

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

// import { React, useState} from "react";
// import "./Home.css";
// import { useAuth } from "../../store/auth";
// import { toast } from "react-toastify";
// import Header from "../../components/Header/Header";
// import { Navbar } from "../../components/NavbarComponent/Navbar";
// import Footer from "../../components/Footer/Footer";
// import AnimatedChatBot from "../../components/Animationchat/AnimationChatBot";
// import { Modal } from "../../components/Modal/Modal";
// import { Register } from "../RegisterPage/Register";
// const API_URL = process.env.REACT_APP_BACKEND_URL;


// const avatars = [
//   { img: "/images/@amandamoneysmith.png", alt: "@amandamoney" },
//   { img: "/images/@earthymamma.png", alt: "@earthymamma" },
//   { img: "/images/@emmaj0an.png", alt: "@emmaj0an" },
//   { img: "/images/@howmuchisaveggieburger.png", alt: "@veggieburgerplz" },
//   { img: "/images/@ivet.pilatesplaysleep.png", alt: "@ivetalexander" },
//   { img: "/images/@jessvincii.png", alt: "@jessvincii" },
//   { img: "/images/@katiecooksgreen.png", alt: "@katiecooks" },
//   { img: "/images/@lovelaura.png", alt: "@lovelaura" },
//   { img: "/images/@maddie.in.nature.png", alt: "@maddie2000" },
//   { img: "/images/@madebymeagan.png", alt: "@bymeagan" },
//   { img: "/images/@ourcleanlife.png", alt: "@ourcleanlife" },
//   { img: "/images/@sarahmoussavi.png", alt: "@sarahmoussavi" },
//   { img: "/images/@slowfashionsindo.png", alt: "@sindosunshine" },
//   { img: "/images/@styledbygita.png", alt: "@styledbygita" },
//   { img: "/images/@zarahsworld.png", alt: "@zarahsworld" },
// ];

// export const Home = () => {
 
//   const { isLoggedIn } = useAuth();
//   const [showRegister, setShowRegister] = useState(false);

//   const handleSubmit = async (e) => {
//     if(isLoggedIn){
//       toast.success('Your are already logged in')
//     }
//     else{
//       try {
//         window.location.href = `${API_URL}/auth/google`;
//       } catch (error) {
//         console.log(error);
//       }
//     }


   
//   };

//   return (
//     <>
//     <section className="h-body">
//       <section className="main_des">
//         <Navbar/>
//         <Header/>


//         <img
//   src="/images/home-main-text.png"
//   alt="clean living starts here - The platform for clean fashion, beauty, and wellness"
//   className="intro-heading-img"
// />

//       </section>

//       <section className="grid-gallery">
//       {/* Card 1: Discover with Search Bar */}
//       <div className="card" style={{ backgroundImage: "url('/images/grid-1.png')" }}>
//       </div>

//       {/* Card 2: Connect */}
//       <div className="card" style={{ backgroundImage: "url('/images/grid-2.png')" }}>
//       </div>

//       {/* Card 3: Watch with Play Icon */}
//       <div className="card">
//   <video
//     className="card-video"
//     src="/videos/h-m.mp4"
//     autoPlay
//     muted
//     loop
//     playsInline
//     // poster="/images/img12.jpg"
//   ></video>
// </div>

//       {/* Card 4: Shop with Search Bar */}
//       <div className="card" style={{ backgroundImage: "url('/images/grid-4.png')" }}>
//       </div>
//     </section>

//       {/* <section className="community">
//         <div className="hero-heading-wrapper">
//           <h2 className="hero-heading">
//             we're a <span id="community-led" className="italic">community-led</span>
//             <br />
//             <strong class="AI-powered">AI-powered platform for</strong>
//             <br />
//             <span id="clean-living" className="italic">clean living.</span>
//           </h2> */}
//           {/* <img src="/images/spark.png" alt="sparkle" className="sparkle-icon" /> */}
//         {/* </div>
//       </section> */}
//       <section className="definition">
//         <h3>
//           clean
//           <br />
//           <span>/kliːn/</span>
//         </h3>
//         <p className="part-of-speech">
//           <strong>adjective</strong>
//         </p>
//         <p className="definition-text">
//           A new standard for living. Products and practices responsibly made — health-conscious, high-quality, natural, cruelty-free, and/or designed with circularity and low waste in mind.
//         </p>
//         <p className="example">
//           <em>
//             She's glowing - clearly the clean skincare products are working their magic.
//           </em>
//         </p>
//       </section> 
//       <div className="category-wrapper">
//         {/* <div className="curved-heading">
//           <svg viewBox="0 0 500 150" className="curved-text">
//             <path
//               id="curvePath"
//               d="M100,150 A150,150 0 0,1 400,150"
//               fill="transparent"
//             />
//             <text>
//               <textPath href="#curvePath" startOffset="50%" textAnchor="middle">
//                 discover
//               </textPath>
//             </text>
//           </svg>
//         </div> */}

//         {/* <div className="category-circles">
//           <div
//             className="circle small"
//             style={{ backgroundImage: "url('/images/fashion.png')" }}
//           >
//           </div>
//           <div
//             className="circle large"
//             style={{ backgroundImage: "url('/images/beauty.png')" }}
//           >

//           </div>
//           <div
//             className="circle small"
//             style={{ backgroundImage: "url('/images/wellness.png')" }}
//           >
//           </div>
//         </div> */}
//       </div>

//       {/* <div className="tags">
//         <span>DIY lip balm</span>
//         <span>thrifting hacks</span>
//         <span>how to make matcha</span>
//         <span>clean beauty brands</span>
//         <span>managing PCOS</span>
//         <span>how does fashion rental work?</span>
//         <span>breathwork techniques</span>
//       </div> */}

//       {/* <div className="search-wrapper">
//         <div className="search-bar">
//           <i className="fas fa-search search-icon"></i>
//           <input
//             type="text"
//             placeholder="The best places in London for vintage fashion?"
//           />
//           <i className="fas fa-microphone mic-icon"></i>
//         </div>
//       </div> */}

//       {/* <div className="chat-ui-box">
//   <div className="search-bar-ui">
//     <i className="fas fa-search search-icon"></i>
//     <input
//       type="text"
//       placeholder="Start a chat with your clean living assistant"
//       readOnly
//     />
//     <i className="fas fa-microphone mic-icon"></i>
//   </div>


//   <div className="chat-container">
//     <div className="chat user">
//       The best places in London for vintage fashion?
//     </div>

//     <div className="chat bot">
//       If you're looking for vintage fashion, London is the place for it! Are you shopping online or in person?
//     </div>

//     <div className="chat user">
//       In person
//     </div>

//     <div className="chat bot">
//       <p>Sure! Here's some of the best vintage shops in London for a fun day out:</p>
//       <ul>
//         <li>House of Vintage – Shoreditch</li>
//         <li>Atika – Brick Lane</li>
//         <li>Rellik – Notting Hill</li>
//         <li>Beyond Retro – Dalston & Soho</li>
//         <li>Nordic Poetry – Hackney</li>
//         <li>Retromania – Victoria</li>
//         <li>Goldsmith Vintage – Soho, Camden, Greenwich</li>
//         <li>One of a Kind Archive – Portobello Road</li>
//         <li>128 - Hackney Road</li>
//       </ul>
//     </div>
//   </div>
// </div> */}
// <AnimatedChatBot/>


//       {/* <section className="definition">
//         <h3>
//           clean
//           <br />
//           <span>/kliːn/</span>
//         </h3>
//         <p className="part-of-speech">
//           <strong>adjective</strong>
//         </p>
//         <p className="definition-text">
//           A new standard for conscious living, describes products and practices
//           that are responsibly made, cruelty-free, circular, low waste, and high
//           quality.
//         </p>
//         <p className="example">
//           <em>
//             You can tell she uses clean skincare products, her skin is glowing!
//           </em>
//         </p>
//       </section> */}

//       <section className="profile-carousel">
//   <div className="carousel-wrapper">
//     <div className="carousel-content">
//       {[...Array(3)].map((_, i) => (
//   <div className="avatars" key={i}>
//     {avatars.map((avatar, idx) => (
//       <div
//         className={`avatar ${idx === avatars.length - 1 ? "last-avatar" : ""}`}
//         key={`${i}-${idx}`}
//       >
//         <img src={avatar.img} alt={avatar.alt} />
//         <p>{avatar.alt}</p>
//       </div>
//     ))}
//   </div>
// ))}
//     </div>
//   </div>
// </section>




//       <section className="signup-box-home">
//           {isLoggedIn ? (
//             <h2>Congratulations! Your profile has been created.</h2>
//           ) : (
//             <h2>create a profile</h2>
//           )}
//           <p>
//             The first 1000 sign-ups receive free perks and benefits for life,
//             including product discounts, exclusive content, first access to
//             events, and more—launching this summer.
//           </p>

//           {!isLoggedIn && (
//             <>
//               <button
//                 className="signup-btn facebook"
//                 onClick={() => setShowRegister(true)}
//               >
//                 <i className="fa fa-envelope"></i> Sign Up with Mail
//               </button>
//               <button onClick={handleSubmit} className="signup-btn google">
//                 <i className="fab fa-google"></i> Sign Up with Google
//               </button>
//             </>
//           )}

//           {/* <button className="signup-btn apple">
//           <i className="fab fa-apple"></i> Sign in with Apple
//         </button> */}
//         </section>
//       <Footer/>
//       </section>
//       {showRegister && (
//               <Modal onClose={() => setShowRegister(false)}>
//                 <Register
//                   onSuccess={() => setShowRegister(false)}
//                   onCancel={() => setShowRegister(false)}
//                 />
//               </Modal>
//             )}
//     </>
//   );
// };
