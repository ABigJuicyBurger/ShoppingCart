import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "../styles/App.css";

import Header from "./header";
import Footer from "./footer";
import {
  saveToLocalStorage,
  loadfromLocalStorage,
} from "./API/LocalStorage.tsx";

interface CartItem {
  ID: string;
  price: number;
  quantity: number;
  avatarUrl: string;
}

function App() {
  const savedCartItems = loadfromLocalStorage("cartItems");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.ID === item.ID
      );
      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.ID === item.ID
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...currentItems, item];
    });
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.ID !== item.ID));
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
        <Outlet context={{ addToCart, removeFromCart, cartItems }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
