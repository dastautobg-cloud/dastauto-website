const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Car, Droplets, Hammer, Paintbrush } from "lucide-react";

const groups = [
  { icon: Paintbrush, title: "Автобояджийски услуги", image: "src/assets/bodypaint_services.png", services: ["Цялостно боядисване", "Частично боядисване", "Боядисване на брони", "Боядисване на калници", "Полиране след боядисване", "Възстановяване след ПТП"] },
  { icon: Hammer, title: "PDR услуги", image: "src/assets/pdr_services.png", services: ["Премахване на градушки", "Изправяне на вдлъбнатини без боядисване", "Ремонт на щети от паркинг удари", "Възстановяване на елементи от купето"] },
  { icon: Droplets, title: "Детайлинг", image: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/b0bf4a7c4_generated_9dc06179.png", services: ["Външен детайлинг", "Вътрешен детайлинг", "Машинно полиране", "Корекция на лак", "Керамично покритие", "Нано защита", "Почистване на двигателен отсек", "Пране на салон", "Защита на кожа и пластмаси"] }
];

export default function Services() {
  return (
    <section id="services" className="border-y border-border bg-card/35 py-24">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Услуги</p><h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">Системи за възстановяване</h2></div>
          <p className="max-w-xl font-mono leading-8 text-muted-foreground">От щета до шоурум финиш — с точен процес, премиум материали и контрол във всяка фаза.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, image, services }) => <article key={title} className="group overflow-hidden rounded-[2rem] border border-border bg-background transition hover:-translate-y-2 hover:border-primary/60"><div className="relative h-56 overflow-hidden"><img src={image} alt={`Премиум ${title.toLowerCase()}`} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" /></div><div className="p-7"><Icon className="mb-5 h-9 w-9 text-primary" /><h3 className="mb-6 font-heading text-2xl font-black uppercase tracking-[-0.05em]">{title}</h3><ul className="grid gap-4">{services.map((service) => <li key={service} className="flex gap-3 font-mono text-sm text-muted-foreground"><Car className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{service}</li>)}</ul></div></article>)}
        </div>
      </div>
    </section>
  );
}