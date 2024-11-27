import { Link } from "react-router-dom";
import StudyBuddy from "../products/StudyBuddy";
import LifeCoach from "../products/LifeCoach";
import CodingCompanion from "../products/CodingCompanion";
import "../styles/WelcomeMessage.css";

export type WelcomeMessageProps = {
  name: string;
  price: number;
  avatarUrl?: string;
};

function WelcomeMessage() {
  return (
    <div className="homepageDiv">
      <div className="welcomeMessage">
        <h1>Experience the future with Shop.AI</h1>
        <p>
          Discover your perfect AI companion! Our cutting-edge artificial
          intelligence companions are designed to provide meaningful
          conversations, assistance, and companionship. Whether you&apos;re
          looking for a study buddy, a creative partner, or just someone to chat
          with, our AI companions are here to enrich your daily life.
        </p>
        <Link to="/shop">Shop Now</Link>
      </div>

      <h2>Featured Items</h2>
      <div className="featuredItems">
        <div className="cardContainer">
          <LifeCoach preview={true} />
        </div>
        <div className="cardContainer">
          <StudyBuddy preview={true} />
        </div>
        <div className="cardContainer">
          <CodingCompanion preview={true} />
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;
