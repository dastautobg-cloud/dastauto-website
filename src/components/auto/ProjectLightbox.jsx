import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function ProjectLightbox({ projects, index, onClose, onNext, onPrev, onGoTo }) {
  const [zoomedImg, setZoomedImg] = useState(null);

  if (index === null) return null;
  const project = projects[index];
  const extraImages = project.extra_images || [];

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-background/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
      <div className="mx-auto max-w-[1320px] py-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Project File / {project.category}</p>
          <button onClick={onClose} className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card" aria-label="Затвори"><X /></button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <BeforeAfterSlider before={project.before} after={project.after} alt={project.alt} />
          <div className="rounded-[2rem] border border-border bg-card p-7">
            <h3 className="font-heading text-4xl font-black uppercase tracking-[-0.06em]">{project.title}</h3>
            <div className="mt-7 grid gap-5 font-mono text-sm leading-7 text-muted-foreground">
              <p><span className="text-primary">Проблем:</span> {project.problem}</p>
              <p><span className="text-primary">Дейности:</span> {project.work}</p>
              <p><span className="text-primary">Материали:</span> {project.materials}</p>
              <p><span className="text-primary">Продължителност:</span> {project.duration}</p>
              <p><span className="text-primary">Резултат:</span> {project.result}</p>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={onPrev} className="grid h-12 w-12 place-items-center rounded-full border border-border hover:border-primary" aria-label="Предишен проект"><ChevronLeft /></button>
              <button onClick={onNext} className="grid h-12 w-12 place-items-center rounded-full border border-border hover:border-primary" aria-label="Следващ проект"><ChevronRight /></button>
            </div>
          </div>
        </div>

        {/* Допълнителни снимки */}
        {extraImages.length > 0 && (
          <div className="mt-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Снимки от проекта</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {extraImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setZoomedImg(src)}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card aspect-video"
                >
                  <img src={src} alt={`${project.title} снимка ${i + 1}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">
                    <ZoomIn className="h-6 w-6 text-white opacity-0 transition group-hover:opacity-100" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Thumbnail лента — останали проекти */}
        <div className="mt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Още проекти</p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => onGoTo && onGoTo(i)}
                aria-label={p.title}
                className={`relative shrink-0 h-20 w-32 overflow-hidden rounded-xl border-2 transition ${i === index ? "border-primary" : "border-border opacity-60 hover:opacity-100 hover:border-primary/60"}`}
              >
                <img src={p.after} alt={p.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-1.5">
                  <span className="font-mono text-[9px] uppercase leading-tight text-white line-clamp-2">{p.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom overlay */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomedImg(null)}
        >
          <img src={zoomedImg} alt="Увеличена снимка" className="max-h-full max-w-full rounded-2xl object-contain" />
          <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-card" onClick={() => setZoomedImg(null)}><X /></button>
        </div>
      )}
    </div>
  );
}