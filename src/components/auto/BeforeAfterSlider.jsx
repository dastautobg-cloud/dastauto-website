import React, { useState } from "react";

export default function BeforeAfterSlider({ before, after, alt }) {
  const [position, setPosition] = useState(52);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/40">
      <img src={after} alt={`${alt} - след`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt={`${alt} - преди`} className="h-full w-full max-w-none object-cover" style={{ width: `${10000 / position}%` }} />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
        <div className="h-full w-px bg-primary shadow-[0_0_24px_hsl(var(--primary))]" />
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary bg-background/80 text-primary backdrop-blur-xl">↔</div>
      </div>
      <div className="absolute left-4 top-4 rounded-full bg-background/75 px-3 py-1 text-xs font-mono text-foreground backdrop-blur">ПРЕДИ</div>
      <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-mono text-primary-foreground">СЛЕД</div>
      <input
        aria-label="Сравнение преди и след"
        type="range"
        min="8"
        max="92"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}