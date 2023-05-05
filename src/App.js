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


  <div className="background">
    <img src="https://c4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-preview.jpg" alt="background"/>
    <div className="overlay"></div>
  </div>

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
