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

  const { username, location, review, people, rank } = props.review.fields;

  return (
    <div className="review-container">
      <h3>Who Said What:</h3> {username}
      <h4>Where: {location}</h4>
      <h5>{`${username}'s Review:`}</h5>{" "}
      <div className="review-text">{review}</div>
      <h4>
        {`${username} ranks this spot:`} (1-5): {rank}
      </h4>
      <h4>
        {`${username} says the people are:`} {people}
      </h4>
      <div className="delete-button">
        <button className="review-button" onClick={deleteReview}>
          Delete Review
        </button>
        <Link to={`/edit/${props.review.id}`}>
          <button className="review-button">Edit Review</button>
        </Link>
      </div>
    </div>
  );
}

export default Reviews;
