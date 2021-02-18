import Octocat from "../images/Octocat.png";
import Linkedin from "../images/linkedinlogo.png";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <Link to={{ pathname: "https://github.com/amarp86" }} target="_blank">
        <img src={Octocat} alt="github" className="footer-img" />
      </Link>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/amar-patel-a90a58b4/" }}
        target="_blank"
      >
        <img src={Linkedin} alt="linkedin" className="footer-img" />
      </Link>
      <p className="footer-text">Copyright 2021 Amar Patel</p>
    </div>
  );
}

export default Footer;
