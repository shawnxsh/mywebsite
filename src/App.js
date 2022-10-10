import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export const menuItems = ["Home", "Projects"];

function App() {
  return (
    <div className="App grid">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
