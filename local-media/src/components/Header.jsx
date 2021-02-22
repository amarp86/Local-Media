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
      <h3 className="header-title">Where Do We Go Next?</h3>
    </nav>
  );
}

export default Header;
