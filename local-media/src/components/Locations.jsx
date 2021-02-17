import "../App.css";

function Locations(props) {
  const { location, link } = props.review.fields;
  console.log(link);

  return (
    <div className="individual-location">
      <h2>{location} +</h2>
      <iframe src={`${link}`} title="link-iframe" />
    </div>
  );
}

export default Locations;
