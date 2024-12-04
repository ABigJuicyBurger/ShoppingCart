import { Link } from "react-router-dom";
import "../styles/footer.css";
import githubLogo from "../assets/githublogo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="navLinks">
        <Link to="/" className="title">
          Shop.AI
        </Link>
        <a className="gitHub" href="https://github.com/abigjuicyBurger/">
          <img src={githubLogo} alt="GitHub Logo"></img>ABigJuicyBurger
        </a>
      </div>
    </div>
  );
}
