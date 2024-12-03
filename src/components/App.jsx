import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import Header from "./header";
// import Footer from "./components/Footer";
// import StudyBuddy from "./components/StudyBuddy";
// import CodingCompanion from "./components/CodingCompanion";
import "../styles/App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([
      ...cartItems,
      {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
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
