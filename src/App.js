import { Routes, Route } from "react-router-dom/index";
import { Footer, Navbar } from "./Component";
import { Home, About, Hub, Contact } from "./Pages";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
