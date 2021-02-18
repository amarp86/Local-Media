import Octocat from "../images/Octocat.png";
import Linkedin from "../images/linkedinlogo.png";

function Footer(props) {
  return (
    <div className="footer">
      <img src={Octocat} alt="github" className="footer-img" />
      <img src={Linkedin} alt="linkedin" className="footer-img" />
      <p>Copyright 2021 Amar Patel</p>
    </div>
  );
}

export default Footer;
