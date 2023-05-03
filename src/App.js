import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/AboutUs";
import ContactForm from "./components/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
}

export default App