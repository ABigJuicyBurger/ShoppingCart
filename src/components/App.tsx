import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "../styles/App.css";

import Header from "./header";
import {
  saveToLocalStorage,
  loadfromLocalStorage,
} from "./API/LocalStorage.tsx";

// import Footer from "./components/Footer";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  avatarUrl: string;
}

function App() {
  const savedCartItems = loadfromLocalStorage("cartItems");
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

  useEffect(() => {
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage("cartItems", cartItems);
  }, [cartItems]);

  return (
    <div className="app-container">
      <Header cartItems={cartItems} />
      <div className="content">
        <Outlet context={{ addToCart, cartItems }} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
