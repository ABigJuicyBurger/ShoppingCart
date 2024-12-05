import { useOutletContext } from "react-router-dom";
import Products from "./Products";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.css";

interface CartItem {
  ID: string;
  price: number;
  quantity: number;
  avatarUrl: string;
}

interface OutletContext {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}

function ShoppingCart() {
  const context = useOutletContext<OutletContext>();
  console.log("Full context:", context);
  const { cartItems, removeFromCart } = context;

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
              <li className="cart-item" key={item.ID}>
                <img src={item.avatarUrl} alt={item.ID} />
                <div className="item-details">
                  <h3>{item.ID}</h3>
                  <span className="item-price">
                    ${item.price} x {item.quantity}
                  </span>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            )
          )
        )}
      </ul>
      <div className="cart-total">
        <p>Total: ${total}</p>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
