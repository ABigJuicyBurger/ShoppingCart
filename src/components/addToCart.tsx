import { useState } from "react";

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1);

  const increaseNumber = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseNumber = () => {
    setQuantity((prev) => prev - 1);
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
      <button>Add to Cart</button>
    </div>
  );
}
