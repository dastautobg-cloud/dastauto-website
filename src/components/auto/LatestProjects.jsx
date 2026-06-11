import React from "react";

const projects = ["Full repaint / Mercedes C-Class", "Ceramic 9H / Porsche Cayenne", "PDR + Paint / Audi A6", "Interior Detail / BMW X5"];

export default function LatestProjects() {
  return <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10"><div className="rounded-[2rem] border border-border bg-card p-7"><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Последни проекти</p><div className="mt-6 grid gap-4 lg:grid-cols-4">{projects.map((item) => <div key={item} className="rounded-2xl bg-background p-5 font-mono text-sm text-muted-foreground"><span className="mb-3 block text-primary">STATUS: DELIVERED</span>{item}</div>)}</div></div></section>;
}