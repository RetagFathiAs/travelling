import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Tours from "./pages/Tours/Tours";
import Map from "./components/map/map"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="/tours" element={<Tours />} />
                <Route path="/tours" element={<Map />} />


        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
