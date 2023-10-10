import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Header from "./Pages/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
