import axios from "axios";
import { baseURL, config } from "../services/index.js";
import { Link } from "react-router-dom";
import "../App.css";

function Reviews(props) {
  const deleteReview = async () => {
    const reviewURL = `${baseURL}/${props.review.id}`;
    await axios.delete(reviewURL, config);
    props.setToggleFetch((currentValue) => !currentValue);
  };

  const { username, location, review } = props.review.fields;

  return (
    <div className="review-container">
      <h3>Local-Media Username:</h3> {username}
      <h4>Location: {location}</h4>
      <h5>Straight from the Underground:</h5> {review}
      <div className="delete-button">
        <button onClick={deleteReview}>Delete Review</button>
        <Link to={`/edit/${props.review.id}`}>
          <button>Edit Review</button>
        </Link>
      </div>
    </div>
  );
}

export default Reviews;
