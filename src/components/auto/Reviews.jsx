import React from "react";
import { Star } from "lucide-react";

const reviews = [
  ["Иван Петров", "Боядисаха бронята на BMW-то ми перфектно. Цветът е 1:1, а колата беше предадена чиста и полирана."],
  ["Мария Георгиева", "Керамичното покритие промени автомобила изцяло. Вече се мие много по-лесно и изглежда като нов."],
  ["Николай Димитров", "След ПТП ми помогнаха със застрахователя и върнаха колата в заводски вид. Силно препоръчвам."]
];

export default function Reviews() {
  return <section id="reviews" className="border-y border-border bg-card/35 py-24"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Google Reviews</p><h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">Отзиви от клиенти</h2></div><a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="font-mono text-sm text-primary underline underline-offset-8">Виж всички в Google Maps</a></div><div className="mt-10 grid gap-5 lg:grid-cols-3">{reviews.map(([name, text]) => <div key={name} className="rounded-[2rem] border border-border bg-background p-7"><div className="mb-5 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div><p className="font-mono leading-7 text-muted-foreground">“{text}”</p><div className="mt-7 flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-full bg-primary font-heading font-black text-primary-foreground">{name[0]}</div><span className="font-mono text-sm text-foreground">{name}</span></div></div>)}</div></div></section>;
}