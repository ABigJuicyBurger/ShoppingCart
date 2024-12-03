import { state, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import "../styles/WelcomeMessage.css";
import CreativeWriter from "../products/CreativeWriter";
import StudyBuddy from "../products/StudyBuddy";
import LifeCoach from "../products/LifeCoach";
import CodingCompanion from "../products/CodingCompanion";
import EntertainmentAI from "../products/EntertainmentAI";

export default function Shop() {
  const context = useOutletContext();
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function getShoppingItems() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const fetchedData = await response.json();
      console.log(fetchedData);
      setData(fetchedData);
    } catch (err) {
      setError("failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getShoppingItems();
  }, []);

  const location = useLocation();
  const isProductPage = location.pathname.includes("/item");

  return (
    <div>
      {isProductPage ? (
        <Outlet context={context} />
      ) : (
        <div>
          <h1>Our AI Companions</h1>

          <div className="featuredItems">
            <div className="cardContainer">
              <Link to="/shop/item/coding-companion">
                <CodingCompanion preview={true} />
              </Link>
            </div>
            <div className="cardContainer">
              <Link to="/shop/item/life-coach">
                <LifeCoach preview={true} />
              </Link>
            </div>
            <div className="cardContainer">
              <Link to="/shop/item/creative-writer">
                <CreativeWriter preview={true} description="wqieubw" />
              </Link>
            </div>
            <div className="cardContainer">
              <Link to="/shop/item/entertainment-ai">
                <EntertainmentAI preview={true} />
              </Link>
            </div>
            <div className="cardContainer">
              <Link to="/shop/item/study-buddy">
                <StudyBuddy preview={true} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
