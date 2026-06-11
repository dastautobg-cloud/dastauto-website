import React from "react";

const steps = ["Оглед", "Оферта", "Изпълнение", "Контрол на качеството", "Предаване на автомобила"];

export default function Process() {
  return <section id="process" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10"><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Процес на работа</p><h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">От оглед до перфектен финиш</h2><div className="mt-12 grid gap-4 lg:grid-cols-5">{steps.map((step, index) => <div key={step} className="relative rounded-[1.75rem] border border-border bg-card p-6"><span className="font-mono text-xs text-primary">STEP 0{index + 1}</span><h3 className="mt-8 font-heading text-2xl font-black uppercase tracking-[-0.05em]">{step}</h3><div className="mt-8 h-px bg-gradient-to-r from-primary to-transparent" /></div>)}</div></section>;
}