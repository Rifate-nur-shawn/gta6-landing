import React from "react";
import gsap from "gsap";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import { ScrollTrigger } from "gsap/all";
import FristVideo from "./sections/FristVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FristVideo />
      <Jason />
    </main>
  );
}

export default App;
