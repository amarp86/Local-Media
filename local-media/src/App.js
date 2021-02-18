import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services/index.js";
import Reviews from "./components/Reviews";
import { Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Locations from "./components/Locations";
import background from "./images/longroadcut3.jpg";
import Search from "./components/Search";

function App() {
  const [reviews, setReviews] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setReviews(resp.data.records);
      console.log(reviews);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header setToggleFetch={setToggleFetch} />
      <Route exact path="/">
        <div
          className="home-area"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1>
            Welcome to Local-Media - a place to share your thoughts on the
            places, people, and things you've encountered while traveling!
          </h1>
          <div className="home-area-button">
            <Link to="/reviews">
              <button>Reviews</button>
            </Link>
            <Link to="/locations">
              <button>Locations</button>
            </Link>
            <Link to="/new">
              <button>New Destination</button>
            </Link>
            <Link to="/search">
              <button>Search for a Review</button>
            </Link>
          </div>
        </div>
      </Route>
      <Route path="/new">
        <Form reviews={reviews} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form reviews={reviews} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/reviews">
        <div className="reviews">
          {reviews.map((review) => (
            <Reviews
              key={review.id}
              review={review}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route path="/locations">
        <h1>Where We've Been:</h1>
        <div className="all-locations">
          {reviews.map((review) => (
            <Locations
              key={review.id}
              review={review}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route to="/search">
        <Search reviews={reviews} />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
