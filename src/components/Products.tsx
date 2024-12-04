import CodingCompanion from "../products/CodingCompanion.tsx";
import LifeCoach from "../products/LifeCoach.tsx";
import StudyBuddy from "../products/StudyBuddy.tsx";
import CreativeWriter from "../products/CreativeWriter.tsx";
import EntertainmentAI from "../products/EntertainmentAI.tsx";
import { useParams } from "react-router-dom";
import AddToCart from "./addToCart.tsx";
import { useOutletContext } from "react-router-dom";
import {
  OutletContext,
  PathParams,
  ProductProps,
} from "../types/ProductTypes.ts";
import CodingCompanionPhoto from "../assets/CodingCompanion.png";
import CreativeWriterPhoto from "../assets/CreativeWriter.png";
import EntertainmentAIPhoto from "../assets/EntertainmentAI.png";
import LifeCoachPhoto from "../assets/LifeCoach.png";
import StudyBuddyPhoto from "../assets/StudyBuddy.png";

type ProductComponent = {
  component: any;
  price: number;
  name: string;
  avatarUrl: string;
};

const productComponents: {
  [key: string]: ProductComponent;
} = {
  "coding-companion": {
    component: CodingCompanion,
    price: 999,
    name: "Coding Companion",
    avatarUrl: CodingCompanionPhoto,
  },
  "creative-writer": {
    component: CreativeWriter,
    price: 399,
    name: "Creative Writer",
    avatarUrl: CreativeWriterPhoto,
  },
  "entertainment-ai": {
    component: EntertainmentAI,
    price: 299,
    name: "Entertainment AI",
    avatarUrl: EntertainmentAIPhoto,
  },
  "life-coach": {
    component: LifeCoach,
    price: 699,
    name: "Life Coach",
    avatarUrl: LifeCoachPhoto,
  },
  "study-buddy": {
    component: StudyBuddy,
    price: 499,
    name: "Study Buddy",
    avatarUrl: StudyBuddyPhoto,
  },
};

function Products() {
  const { addToCart } = useOutletContext<OutletContext>();
  const { productid } = useParams<PathParams>();
  console.log("Current product productid:", productid);

  const product: ProductComponent | undefined =
    productComponents[String(productid)];
  const ProductComponent: undefined | any = product?.component;
  const productInfo = {
    name: productComponents[String(productid)].name,
    price: productComponents[String(productid)].price,
    avatarUrl: productComponents[String(productid)].avatarUrl,
  };
  console.log("Product Info:", productInfo);

  return (
    <div className="fullDisplay">
      {ProductComponent ? (
        <ProductComponent preview={false} addToCart={addToCart} />
      ) : null}
      <div className="cartSection">
        <AddToCart productInfo={productInfo} />
      </div>
    </div>
  );
}

export default Products;
