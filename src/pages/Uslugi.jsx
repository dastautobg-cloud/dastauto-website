import React from "react";
import Services from "../components/auto/Services";
import Process from "../components/auto/Process";
import WhyChoose from "../components/auto/WhyChoose";
import Reveal from "../components/auto/Reveal";

export default function Uslugi() {
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 pt-16 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Нашите услуги</p>
        <h1 className="mt-4 font-heading text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Какво предлагаме</h1>
        <p className="mt-5 max-w-2xl font-mono leading-8 text-muted-foreground">Комплексни решения за всеки автомобил — от козметична корекция до пълно боядисване и детайлинг.</p>
      </div>
      <Reveal><Services /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><WhyChoose /></Reveal>
    </>
  );
}