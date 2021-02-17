import axios from "axios";
import { baseURL, config } from "../services/index.js";
import { Link } from "react-router-dom";
import "../App.css";

function Reviews(props) {
  //const { username, location, reviews } = props.review.fields;

  return (
    <div className="review-container">
      <h3>{props.reviews.username}</h3>
      {/* <h4>{location}</h4>
      <h5>{reviews}</h5> */}
    </div>
  );
}

export default Reviews;
