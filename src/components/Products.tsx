import CodingCompanion from "../products/CodingCompanion.tsx";
import LifeCoach from "../products/LifeCoach.tsx";
import StudyBuddy from "../products/StudyBuddy.tsx";
import CreativeWriter from "../products/CreativeWriter.tsx";
import EntertainmentAI from "../products/EntertainmentAI.tsx";
import { useParams } from "react-router-dom";
import AddToCart from "./addToCart.tsx";
import { useOutletContext } from "react-router-dom";

const productComponents = {
  "coding-companion": {
    component: CodingCompanion,
    price: 999,
    name: "Coding Companion",
  },
  "creative-writer": {
    component: CreativeWriter,
    price: 399,
    name: "Creative Writer",
  },
  "entertainment-ai": {
    component: EntertainmentAI,
    price: 299,
    name: "Entertainment AI",
  },
  "life-coach": {
    component: LifeCoach,
    price: 699,
    name: "Life Coach",
  },
  "study-buddy": {
    component: StudyBuddy,
    price: 499,
    name: "Study Buddy",
  },
};

function Products() {
  const { addToCart } = useOutletContext();
  const { id } = useParams();
  console.log("Current product id:", id);

  const ProductComponent = productComponents[id].component;
  const productInfo = {
    name: productComponents[id].name,
    price: productComponents[id].price,
  };

  return (
    <div className="fullDisplay">
      <ProductComponent preview={false} addToCart={addToCart} />
      <div className="cartSection">
        <AddToCart productInfo={productInfo} />
      </div>
    </div>
  );
}

export default Products;
