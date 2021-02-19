import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services/index.js";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";

function Form(props) {
  const [review, setReview] = useState("");
  const [location, setLocation] = useState("");
  const [username, setUserName] = useState("");
  const [rank, setRank] = useState(1);
  const [people, setPeople] = useState("");
  const [link, setLink] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.reviews.length > 0 && params.id) {
      const foundReview = props.reviews.find((rev) => rev.id === params.id);
      if (foundReview) {
        setUserName(foundReview.fields.username);
        setLocation(foundReview.fields.location);
        setReview(foundReview.fields.review);
        setLink(foundReview.fields.link);
        setRank(foundReview.fields.rank);
        setPeople(foundReview.fields.people);
      }
    }
  }, [props.reviews, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      location,
      review,
      username,
      rank,
      people,
      link,
    };

    if (params.id) {
      const reviewURL = `${baseURL}/${params.id}`;
      await axios.put(reviewURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }

    console.log(fields);
    props.setToggleFetch((currentValue) => !currentValue);
    history.push("/reviews");
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <h1>Catch Me If You Can</h1>
      <label htmlFor="username">Username:</label>
      <input
        value={username}
        type="text"
        placeholder="User1234"
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="review">What Do You Think About This Location?</label>
      <textarea
        value={review}
        type="text"
        placeholder="THIS PLACE IS GREAT!"
        onChange={(e) => setReview(e.target.value)}
      />
      <label htmlFor="location">Location(city, state)</label>
      <input
        value={location}
        type="text"
        placeholder="New York, NY"
        onChange={(e) => setLocation(e.target.value)}
      />
      <label htmlFor="people">Describe the Locals:</label>
      <input
        value={people}
        type="text"
        placeholder="friendly, mean, creative, kind, etc"
        onChange={(e) => setPeople(e.target.value)}
      />

      {/* source for upload a file https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react */}
      <label htmlFor="link">Link to a Picture of Location</label>
      <input
        value={link}
        type="text"
        placeholder="https://upload.wikimedia.org/wikipedia/commons/2/2a/BeefCutPlate-ShortRib.png"
        onChange={(e) => setLink(e.target.value)}
      />

      <label htmlFor="rank">Rank Location (1 - 5)</label>
      <input
        value={rank}
        type="number"
        min="1"
        max="5"
        className="rank-input"
        onChange={(e) => setRank(e.target.valueAsNumber)}
      />

      <button className="submit-button" type="submit">
        Send It!
      </button>
    </form>
  );
}

export default Form;
