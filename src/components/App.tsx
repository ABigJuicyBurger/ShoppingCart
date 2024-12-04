import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";
// import Footer from "./components/Footer";
// import StudyBuddy from "./components/StudyBuddy";
// import CodingCompanion from "./components/CodingCompanion";
import "../styles/App.css";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  avatarUrl: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item) => {
    setCartItems([
      ...cartItems,
      {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        avatarUrl: item.avatarUrl,
      },
    ]);
  };

  return (
    <>
      <Header cartItems={cartItems} />
      <Outlet context={{ addToCart, cartItems }} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
