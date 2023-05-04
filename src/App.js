import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/AboutUs";
import ContactForm from "./components/ContactUs";


function App() {

  return (

    <>
    
    <nav>
    <img src="https://img.icons8.com/dusk/64/null/geography--v1.png" className="logo"/>
    <ul>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/">Home</NavLink></li>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/search">Search</NavLink></li>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/about">About</NavLink></li>
  <li><NavLink style={({isActive})=>(isActive ?{color:"red"}:{})} to="/contact">Contact</NavLink></li>
    </ul>
    <button></button>
    </nav>
    
    


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