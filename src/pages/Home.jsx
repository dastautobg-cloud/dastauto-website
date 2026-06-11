import React from "react";
import Hero from "../components/auto/Hero";
import WhyChoose from "../components/auto/WhyChoose";
import LatestProjects from "../components/auto/LatestProjects";
import Partners from "../components/auto/Partners";
import Reviews from "../components/auto/Reviews";
import Reveal from "../components/auto/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><WhyChoose /></Reveal>
      <Reveal><LatestProjects /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><Reviews /></Reveal>
    </>
  );
}