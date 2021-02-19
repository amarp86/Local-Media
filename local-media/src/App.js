import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services/index.js";
import Reviews from "./components/Reviews";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Locations from "./components/Locations";
import Search from "./components/Search";
import Home from "./components/Home";

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
        <Home />
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
      <Route path="/search">
        <div className="search-div">
          <Search reviews={reviews} />
        </div>
      </Route>

      <Footer />
    </div>
  );
}

export default App;
