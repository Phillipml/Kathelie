import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import BtnToWandComponents from "./sections/btnToWandComponents/BtnToWandComponents";
import Header from "./sections/header/Header";
import HowAreMade from "./sections/howAreMade/HowAreMade";
import Intro from "./sections/intro/Intro";
import Process from "./sections/process/Process";
import AllWandsComponents from "./pages/allWandsComponents/AllWandsComponents";
import Footer from "./sections/footer/Footer";
import WandGenerator from "./pages/wandGenerator/WandGenerator";
import Contact from "./sections/contactForm/contactForm";
import BtnToShopee from "./sections/btnToShopee/BtnToShopee";

function MainContent() {
  return (
    <>
      <Intro />
      <Process />
      <HowAreMade />
      <BtnToShopee />
      <BtnToWandComponents />
      <Contact />
    </>
  );
}

function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    userAgent.includes("mobile") ||
    userAgent.includes("tablet") ||
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("android")
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <Router>
      <>
        {!isMobile && <Cursor />}
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route
            path="/all-wands-components"
            element={<AllWandsComponents />}
          />
          <Route path="/wand-generator" element={<WandGenerator />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
