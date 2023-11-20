import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Inventory from "./pages/Inventory";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply"
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/inventory" exact element={<Inventory />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/apply" exact element={<Apply />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
