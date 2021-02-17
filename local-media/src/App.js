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
        <div className="home-area">Home Area</div>
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
              reviews={reviews}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route path="/locations">
        <Locations />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
