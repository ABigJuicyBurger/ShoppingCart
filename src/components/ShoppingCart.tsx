import { useOutletContext } from "react-router-dom";
import Products from "./Products";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.css";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  avatarUrl: string;
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
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(
          (item) => (
            console.log("Avatar URL:", item.avatarUrl),
            (
              <li className="cart-item" key={null}>
                <img src={item.avatarUrl} alt="{item.name}" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <span className="item-price">
                    ${item.price} x {item.quantity}
                  </span>
                </div>
              </li>
            )
          )
        )}
      </ul>
      <div className="cart-total">
        <p>Total: ${total}</p>
        <a>Checkout</a>
      </div>
    </div>
  );
}

export default ShoppingCart;
