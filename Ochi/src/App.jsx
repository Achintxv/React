import React from "react";
import Navbar from "./Components/navbar";
import Landing from "./Components/Landing";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Project from "./Components/Project";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Project />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
