import { Link } from "react-router-dom";
import "../App.css";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="title">Local-Media</h1>
      </Link>
      <Link to="/reviews">
        <button>Reviews</button>
      </Link>
      <Link to="/locations">
        <button>Locations</button>
      </Link>
      <Link to="/new">
        <button>New Review</button>
      </Link>
    </nav>
  );
}

export default Header;
