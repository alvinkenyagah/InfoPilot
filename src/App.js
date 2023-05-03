import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/AboutUs";
import ContactForm from "./components/ContactUs";
import React, { useState } from "react";


function App() {

  
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const handleClick = () => {
      setIsDarkMode(!isDarkMode);
    };
  



  return (

    <>
    <div className="hero">
    <nav>
    <img src="https://img.icons8.com/dusk/64/null/geography--v1.png" className="logo"/>
    <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/search">Search</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>

    </ul>
    <button
      className="dark"
      onClick={handleClick}
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>

    </nav>
    </div>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    </>
  );
}

export default App