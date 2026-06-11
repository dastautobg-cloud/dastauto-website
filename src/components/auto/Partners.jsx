import React from "react";

const partners = ["PPG", "Glasurit", "3M", "Rupes", "Koch-Chemie", "CarPro"];

export default function Partners() {
  return <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10"><p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">Нашите партньори</p><div className="grid grid-cols-2 gap-3 md:grid-cols-6">{partners.map((p) => <div key={p} className="rounded-2xl border border-border bg-card p-5 text-center font-heading font-black uppercase tracking-[-0.04em] text-muted-foreground">{p}</div>)}</div></section>;
}