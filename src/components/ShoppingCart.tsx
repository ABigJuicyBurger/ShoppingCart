import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
  const context = useOutletContext();
  console.log("Full context:", context);
  const { cartItems } = context;

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
