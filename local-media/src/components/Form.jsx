import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services/index.js";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";

function Form(props) {
  const [review, setReview] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUserName] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.reviews.length > 0 && params.id) {
      const foundReview = props.reviews.find((rev) => rev.id === params.id);
      if (foundReview) {
        setUserName(foundReview.fields.username);
        setLocation(foundReview.fields.location);
        setReview(foundReview.fields.reviews);
      }
    }
  }, [props.reviews, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      location,
      review,
      username,
    };

    if (params.id) {
      const reviewURL = `${baseURL}/${params.id}`;
      await axios.put(reviewURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }

    console.log(fields);
    props.setToggleFetch((currentValue) => !currentValue);
    history.push("/");
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <label htmlFor="review">Review</label>
      <textarea
        value={review}
        type="text"
        onChange={(e) => setReview(e.target.value)}
      />
      <label htmlFor="location">Location</label>
      <input
        value={location}
        type="text"
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="username">UserName</label>
      <input
        value={username}
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Let's Explore!</button>
    </form>
  );
}

export default Form;
