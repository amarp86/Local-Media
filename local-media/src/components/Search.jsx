import { useState } from "react";

// this component was taught during workshop on wednesday of P2 week

const Search = (props) => {
  const [username, setUsername] = useState("");

  const filteredReviews = props.reviews.filter((review) =>
    review.fields.username.toLowerCase().includes(username.toLowerCase())
  );

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
      <h2>Search Results Below</h2>
      <div className="search-results-main">
        {username &&
          filteredReviews.map((review) => (
            <div key={review.id} className="search-results-container">
              <p key={review.username}>Username: {review.fields.username}</p>
              <p key={review.review}>Review: {review.fields.review}</p>
              <p key={review.rank}>Ranking: {review.fields.rank}</p>
              <p key={review.people}>People: {review.fields.people}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
