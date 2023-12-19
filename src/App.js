import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
import Servies from "./components/Services";
import Careers from "./components/Careers";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Servies />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
