import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { Register } from "./pages/RegisterPage/Register.jsx";
import { Login } from "./pages/Login";
import { Home } from "./pages/HomePage/Home";
import { Logout } from "./pages/Logout";
import { OAuthSuccess } from "./pages/oAuthSuccess";
import Partner from "./pages/PartnerPage/Partner.jsx";
import Invest from "./pages/InvestPage/Invest.jsx";
import { AboutUs } from "./pages/AboutPage/AboutUs.jsx";

// Helper to fire a GA4 page_view event
function gtagPageview(path) {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
    });
  }
}

// Listens for route changes, scrolls to top, and sends page_view
function ScrollAndTrack() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    gtagPageview(pathname);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      {/* this component runs on every route change */}
      <ScrollAndTrack />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
