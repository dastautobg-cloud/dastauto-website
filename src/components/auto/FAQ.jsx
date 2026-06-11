import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["Колко време отнема боядисването?", "Частично боядисване обикновено отнема 1–3 работни дни, а цялостно боядисване зависи от състоянието и подготовката на автомобила."],
  ["Давате ли гаранция?", "Да. Даваме гаранция за извършените дейности и използваните материали при нормална експлоатация."],
  ["Работите ли със застрахователи?", "Да. Съдействаме при щети, документи и процеса по възстановяване след ПТП."],
  ["Какво представлява керамичното покритие?", "Това е защитен слой върху лака, който повишава гланца, отблъсква вода и улеснява поддръжката."],
  ["Колко време издържа?", "В зависимост от покритието и поддръжката, ефектът може да издържи от 12 месеца до няколко години."]
];

export default function FAQ() {
  return <section className="mx-auto max-w-4xl px-5 py-24"><p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary">FAQ</p><h2 className="mt-4 text-center font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">Често задавани въпроси</h2><Accordion type="single" collapsible className="mt-10">{faqs.map(([q, a]) => <AccordionItem key={q} value={q} className="border-border"><AccordionTrigger className="font-heading text-lg font-black uppercase tracking-[-0.03em] text-left">{q}</AccordionTrigger><AccordionContent className="font-mono leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></section>;
}