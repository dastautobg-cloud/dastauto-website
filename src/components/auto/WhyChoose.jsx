import React from "react";
import { BadgeCheck, Clock, Gem, ShieldCheck, Sparkles, Star, Wrench, Zap } from "lucide-react";

const benefits = [[ShieldCheck, "Гаранция за качество"], [Gem, "Премиум материали"], [Wrench, "Модерна техника"], [Clock, "Бързо изпълнение"], [Sparkles, "Индивидуален подход"], [BadgeCheck, "Конкурентни цени"], [Zap, "Безплатна консултация"], [Star, "Отлични клиентски оценки"]];

export default function WhyChoose() {
  return <section className="border-y border-border bg-card/35 py-20"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><h2 className="font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">Защо да изберете нас</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon, title]) => <div key={title} className="rounded-[1.5rem] border border-border bg-background p-6"><Icon className="mb-5 h-7 w-7 text-primary" /><p className="font-mono text-sm text-foreground">✓ {title}</p></div>)}</div></div></section>;
}