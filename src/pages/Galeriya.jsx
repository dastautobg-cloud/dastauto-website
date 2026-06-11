import React from "react";
import Gallery from "../components/auto/Gallery";
import Reveal from "../components/auto/Reveal";

export default function Galeriya() {
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 pt-16 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Трансформации</p>
        <h1 className="mt-4 font-heading text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Галерия преди / след</h1>
        <p className="mt-5 max-w-2xl font-mono leading-8 text-muted-foreground">Разгледайте реални проекти от нашето студио — плъзнете слайдера за да видите разликата.</p>
      </div>
      <Reveal><Gallery /></Reveal>
    </>
  );
}