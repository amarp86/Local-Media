import "../App.css";
import { Link } from "react-router-dom";

function Locations(props) {
  const { location, link } = props.review.fields;
  let hasLink = link;

  return (
    <div className="individual-location">
      <h2 className="location-h2">❤️ {location} ❤️</h2>
      {/* Added Ternaries below for if people DO NOT submit a link for an image */}
      <Link
        to={
          !hasLink
            ? { pathname: "https://i.stack.imgur.com/6M513.png" }
            : {
                pathname: `${link}`,
              }
        }
        target="_blank"
      >
        {!hasLink ? (
          <img
            src="https://i.stack.imgur.com/6M513.png"
            alt="default"
            className="location-image"
          />
        ) : (
          <img
            src={`${link}`}
            alt="link to location"
            className="location-image"
          />
        )}
      </Link>
    </div>
  );
}

export default Locations;
