import React, { useMemo, useState } from "react";
import { categories, galleryProjects } from "./siteData";
import BeforeAfterSlider from "./BeforeAfterSlider";
import ProjectLightbox from "./ProjectLightbox";

export default function Gallery() {
  const [category, setCategory] = useState("Всички");
  const [active, setActive] = useState(null);
  const projects = useMemo(() => category === "Всички" ? galleryProjects : galleryProjects.filter((p) => p.category === category), [category]);

  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
      <div className="mb-10"><p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Галерия преди / след</p><h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">Transformation Lab</h2></div>
      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`min-h-12 whitespace-nowrap rounded-full border px-5 font-mono text-xs uppercase transition ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-primary"}`}>{item}</button>)}</div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => <article key={project.title} onClick={() => setActive(index)} className="cursor-pointer rounded-[2rem] border border-border bg-card p-3 transition hover:-translate-y-1 hover:border-primary/70"><BeforeAfterSlider before={project.before} after={project.after} alt={project.alt} /><div className="p-5"><p className="font-mono text-xs uppercase text-primary">{project.category}</p><h3 className="mt-2 font-heading text-2xl font-black uppercase tracking-[-0.05em]">{project.title}</h3><p className="mt-3 font-mono text-sm text-muted-foreground">{project.result}</p></div></article>)}
      </div>
      <ProjectLightbox projects={projects} index={active} onClose={() => setActive(null)} onNext={() => setActive((active + 1) % projects.length)} onPrev={() => setActive((active - 1 + projects.length) % projects.length)} onGoTo={(i) => setActive(i)} />
    </section>
  );
}