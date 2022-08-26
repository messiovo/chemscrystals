import { Routes, Route } from "react-router-dom/index";
import { Footer, Navbar } from "./Component";
import { Home } from "./Pages";
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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
