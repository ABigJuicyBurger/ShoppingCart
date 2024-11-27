import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">Shop.AI</Link>
      {/* Add SearchBar */}
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
