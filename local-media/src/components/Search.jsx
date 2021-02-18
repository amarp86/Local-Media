import { useState } from "react";

// this component was taught during workshop on wednesday of P2 week

const Search = (props) => {
  const [username, setUsername] = useState("");

  const filteredReviews = props.reviews.filter((review) =>
    review.fields.username.toLowerCase().includes(username.toLowerCase())
  );

  console.log(filteredReviews);

  return (
    <div className="search">
      <h1 className="search-title">Search Post History by Username:</h1>
      <label htmlFor="searchbox">Search by User: </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input-field"
      />
      <div className="search-results">
        {username &&
          filteredReviews.map((review) => (
            <div className="search-results-container">
              <p key={review.id}>{review.fields.username}</p>
              <p>{review.fields.review}</p>
              <p>{review.fields.rank}</p>
              <p>{review.fields.people}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
