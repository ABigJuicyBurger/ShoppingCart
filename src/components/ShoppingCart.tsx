import { useOutletContext } from "react-router-dom";
import Products from "./Products";
import { Link } from "react-router-dom";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface OutletContext {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}

function ShoppingCart() {
  const context = useOutletContext<OutletContext>();
  console.log("Full context:", context);
  const { cartItems } = context;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    const emptyCartMessage = "Your cart is empty";
    return (
      <div>
        <h1>Shopping Cart</h1>
        <p>{emptyCartMessage}</p>
        <Link to="/shop">Browse Products</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={null}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <a>Checkout</a>
    </div>
  );
}

export default ShoppingCart;
