import React from "react";
import Contact from "../components/auto/Contact";
import Reveal from "../components/auto/Reveal";

export default function Kontakti() {
  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 pt-16 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Свържете се с нас</p>
        <h1 className="mt-4 font-heading text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Контакти</h1>
        <p className="mt-5 max-w-2xl font-mono leading-8 text-muted-foreground">Изпратете запитване, качете снимки на щетата и ще се свържем с вас за безплатна оценка.</p>
      </div>
      <Reveal><Contact /></Reveal>
    </>
  );
}