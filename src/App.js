import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home";
import ContactForm from "./components/ContactUs";

function App() {
  return (
    <div>
      <Home />
      <div className="App">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
