import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { contact } from "./siteData";

export default function FloatingActions() {
  return <><div className="fixed bottom-5 left-5 z-40 hidden rounded-2xl border border-border bg-card/80 p-4 font-mono text-xs text-muted-foreground shadow-2xl backdrop-blur-xl md:block"><span className="text-primary">Just Finished:</span> Full Respray on Audi RS6</div><div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3"><a aria-label="Обади се" href={`tel:${contact.phoneHref}`} className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:scale-110"><Phone /></a><a aria-label="WhatsApp" href={`https://wa.me/${contact.phoneHref.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="grid h-14 w-14 place-items-center rounded-full border border-border bg-card text-foreground shadow-xl transition hover:border-primary hover:text-primary"><MessageCircle /></a></div></>;
}