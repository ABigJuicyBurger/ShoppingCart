import { Link } from "react-router-dom";
import "../styles/header.css";

interface HeaderProps {
  cartItems: {
    quantity: number,
    price: Number,
    name: String,
  }[];
}

export default function Header({ cartItems }: HeaderProps) {
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="header">
      <Link to="/" className="title">
        Shop.AI
      </Link>
      {/* Add SearchBar */}
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <span className="cartCount">{totalItems}</span>
      </div>
    </div>
  );
}
