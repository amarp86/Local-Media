import "../App.css";

function Locations(props) {
  const { location } = props.review.fields;

  return (
    <div className="individual-location">
      <h2>{location} +</h2>
    </div>
  );
}

export default Locations;
