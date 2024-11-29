import CodingCompanion from "../products/CodingCompanion.tsx";
import LifeCoach from "../products/LifeCoach.tsx";
import StudyBuddy from "../products/StudyBuddy.tsx";
import CreativeWriter from "../products/CreativeWriter.tsx";
import EntertainmentAI from "../products/EntertainmentAI.tsx";
import { useParams } from "react-router-dom";
import AddToCart from "./addToCart.tsx";

const productComponents = {
  "coding-companion": CodingCompanion,
  "creative-writer": CreativeWriter,
  "study-buddy": StudyBuddy,
  "life-coach": LifeCoach,
  "entertainment-ai": EntertainmentAI,
};

function Products() {
  const { id } = useParams();
  console.log("Current product id:", id);

  const ProductComponent = productComponents[id];
  return (
    <div className="fullDisplay">
      <ProductComponent preview={false} />
      <div className="cartSection">
        <AddToCart />
      </div>
    </div>
  );
}

export default Products;
