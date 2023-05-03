import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/AboutUs";
import ContactForm from "./components/ContactUs";

function App() {
  return (

    <>
    <nav>

    <ul style={{display:"flex",gap:"5%",listStyle:"none"}}>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/search">Search</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>

    </ul>

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