import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function AddToCart({ productInfo }) {
  const { addToCart } = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  const increaseNumber = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseNumber = () => {
    setQuantity((prev) => prev - 1);
  };

  const addProducttoCart = () => {
    console.log("Adding to cart:", productInfo);
    addToCart({
      name: productInfo.name,
      price: productInfo.price,
      ...productInfo,
      quantity: quantity,
    });
  };

  return (
    <div>
      <button onClick={decreaseNumber}>-</button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="1"
      ></input>
      <button onClick={increaseNumber}>+</button>
      <button onClick={addProducttoCart}>Add to Cart</button>
    </div>
  );
}
