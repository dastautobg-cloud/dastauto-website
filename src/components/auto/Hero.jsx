const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { contact } from "./siteData";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-20 md:pt-28">
      <img src="dastauto-website/src/assets/banner.png" alt="Луксозен автомобил в тъмно премиум студио за автобоядисване и детайлинг" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent_0,rgba(8,8,8,.35)_30%,hsl(var(--background))_78%)]" />
      <div className="absolute left-0 top-1/3 h-px w-full rotate-[-8deg] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-10 px-5 py-12 md:py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-primary md:mb-5 md:tracking-[0.35em] md:text-xs">PREMIUM REFINISH / AUTO BODY & DETAILING</p>
          <h1 className="font-heading text-[clamp(2rem,7vw,6.7rem)] font-black uppercase leading-[.9] tracking-[-0.05em] text-foreground md:leading-[.79] md:tracking-[-0.07em] py-6">АВТОБОЯДЖИЙСКИ И ДЕТАЙЛИНГ  УСЛУГИ</h1>
          <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-muted-foreground md:mt-7 md:text-base md:leading-8">Възстановяваме блясъка и перфектния външен вид на вашия автомобил.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="kontakti" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 font-mono text-sm font-bold uppercase text-primary-foreground transition hover:scale-[1.03]">Поискай Оферта <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
            <a href={`tel:${contact.phoneHref}`} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-border bg-card/70 px-8 font-mono text-sm font-bold uppercase text-foreground backdrop-blur transition hover:border-primary hover:text-primary"><Phone className="h-4 w-4" /> Обади се Сега</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }} className="hidden lg:block">
          <div className="ml-auto max-w-md rounded-[2rem] border border-border bg-card/65 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <img src="src/assets/logo_white.png" alt="DastAuto" className="mb-5 h-24 w-auto object-contain" />
            <div className="font-heading text-3xl font-black uppercase tracking-[-0.05em]">DastAuto</div>
            <p className="mt-3 font-mono text-sm leading-7 text-muted-foreground">Сертифициран процес, премиум материали и контрол на качеството при всяко предаване.</p>
          </div>
        </motion.div>
      </div>
    </section>);

}