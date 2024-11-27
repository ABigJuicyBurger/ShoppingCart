import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header";
// import Footer from "./components/Footer";
// import StudyBuddy from "./components/StudyBuddy";
// import CodingCompanion from "./components/CodingCompanion";
import "../styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
