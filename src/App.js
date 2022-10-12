import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App grid">
      <Navbar />
      <Routes>
        <Route path="/mywebsite/home" element={<Home />} />
        <Route path="/mywebsite/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/mywebsite/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
