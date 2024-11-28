import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
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
      </div>
    </div>
  );
}
