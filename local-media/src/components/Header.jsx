import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import PopupMenu from "./PopupMenu";

function Header(props) {
  return (
    <nav className="nav">
      <div className="popup">
        <PopupMenu />
      </div>
      <Link to="/">
        <img src={logo} alt="logo-png" className="header-img" />
      </Link>
      <div className="header-buttons">
        <Link to="/reviews">
          <button className="header-individual-button">Reviews</button>
        </Link>
        <Link to="/locations">
          <button className="header-individual-button">Locations</button>
        </Link>
        <Link to="/new">
          <button className="header-individual-button">New Destination</button>
        </Link>
        <Link to="/search">
          <button className="header-individual-button">
            Search for a Review
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
