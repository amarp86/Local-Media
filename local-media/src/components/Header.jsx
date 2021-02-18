import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/logo.png";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="logo-png" />
      </Link>
      <div className="header-buttons">
        <Link to="/reviews">
          <button>Reviews</button>
        </Link>
        <Link to="/locations">
          <button>Locations</button>
        </Link>
        <Link to="/new">
          <button>New Destination</button>
        </Link>
        <Link to="/search">
          <button>Search for a Review</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
