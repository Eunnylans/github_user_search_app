import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
