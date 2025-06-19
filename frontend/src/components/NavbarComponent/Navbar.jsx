import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = ({ page }) => {
  return (
    <>
     
        <nav className="nav-bar">
          <ul className="nav-left">
            <li>
              <NavLink 
                to="/" 
                className={page === 'Partner' || page === 'Invest' ? "active-link" : ""}
              >
                <button>Home</button>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/aboutUs" 
                className={page === 'Partner' || page === 'Invest'? "active-link" : ""}
              >
                <button>About</button>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/partner" 
                className={page === 'Partner' || page === 'Invest' ? "active-link" : ""}
              >
                <button>Become a Partner</button>
              </NavLink>
            </li>
          </ul>

          <ul className="nav-right">
            <li>
              <NavLink 
                to="/invest" 
                className={page === 'Partner' || page === 'Invest' ? "active-link" : ""}
              >
                <button>Invest</button>
              </NavLink>
            </li>
          </ul>
        </nav>
     

    </>
  );
};