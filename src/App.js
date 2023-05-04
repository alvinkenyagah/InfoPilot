import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Search from "./components/Search";
import About from "./components/AboutUs";
import ContactForm from "./components/ContactUs";
import NavBar from "./components/NavBar";

function App() {
  return (

    <>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </>
  );
}

export default App;
