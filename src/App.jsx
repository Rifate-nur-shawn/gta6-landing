import React from "react";
import gsap from "gsap";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import { ScrollTrigger } from "gsap/all";
import FristVideo from "./sections/FristVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FristVideo />
      <Jason />
      <SecondVideo />
    <Lucia /> 
    <PostCard />
    <Final />
    <Outro />
    </main>
  );
}

export default App;
