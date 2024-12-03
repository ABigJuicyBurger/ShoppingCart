import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const isProductPage = location.pathname.includes("/item");

  return (
    <div className="homepageDiv">
      {isProductPage ? (
        <Outlet />
      ) : (
        <>
          <div className="welcomeMessage">
            <h1>Experience the future with Shop.AI</h1>
            <p className="mainParagraph">
              Discover your perfect AI companion! Our cutting-edge artificial
              intelligence companions are designed to provide meaningful
              conversations, assistance, and companionship. Whether you&apos;re
              looking for a study buddy, a creative partner, or just someone to
              chat with, our AI companions are here to enrich your daily life.
            </p>
            <Link to="/shop">Shop Now</Link>
          </div>

          <h2>Featured Items</h2>
          <div className="featuredItems">
            <div className="cardContainer">
              <Link to="/shop/item/life-coach">
                <LifeCoach preview={true} />
              </Link>
            </div>
            <div className="cardContainer">
              <Link to="/shop/item/study-buddy">
                <StudyBuddy preview={true} />
              </Link>
            </div>
            <div className="cardContainer">
              <Link to="/shop/item/coding-companion">
                <CodingCompanion preview={true} />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WelcomeMessage;
