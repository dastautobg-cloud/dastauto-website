import React from "react";
import About from "../components/auto/About";
import Reviews from "../components/auto/Reviews";
import FAQ from "../components/auto/FAQ";
import Reveal from "../components/auto/Reveal";

export default function ZaNas() {
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 pt-16 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Нашата история</p>
        <h1 className="mt-4 font-heading text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">За нас</h1>
        <p className="mt-5 max-w-2xl font-mono leading-8 text-muted-foreground">Над 15 години опит, сертифицирани специалисти и неотменен ангажимент към качеството.</p>
      </div>
      <Reveal><About /></Reveal>
      <Reveal><Reviews /></Reveal>
      <Reveal><FAQ /></Reveal>
    </>
  );
}