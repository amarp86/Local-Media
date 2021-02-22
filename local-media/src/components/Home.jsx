import { Link } from "react-router-dom";
import background from "../images/longroad4.jpg";
import "./Home.css";
import PopupMenu from "./PopupMenu";

function Home() {
  return (
    <div
      className="home-area"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="home-h1">Welcome to Local-Media</h1>
      <h3 className="home-h3">
        A place to share your thoughts on the places, people, and things you've
        encountered while traveling!
      </h3>
      <div className="home-area-button-container">
        {/* <Link to="/reviews">
          <button className="home-area-individual-buttons">Reviews</button>
        </Link>
        <Link to="/locations">
          <button className="home-area-individual-buttons">Locations</button>
        </Link>
        <Link to="/new">
          <button className="home-area-individual-buttons">
            New Destination
          </button>
        </Link>
        <Link to="/search">
          <button className="home-area-individual-buttons">
            Search for a Review
          </button>
        </Link> */}
        <PopupMenu />
      </div>
    </div>
  );
}

export default Home;
