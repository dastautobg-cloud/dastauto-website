import React from "react";
import { Award, BadgeCheck, Settings, ShieldCheck } from "lucide-react";

const items = [
  [Award, "15+ години опит", "Доказана експертиза в автобояджийски, тенекеджийски и детайлинг услуги."],
  [BadgeCheck, "Сертифицирани специалисти", "Екип, обучен за прецизна работа с модерни системи и покрития."],
  [Settings, "Професионално оборудване", "Камера за боядисване, контрол на цвят и high-end polishing системи."],
  [ShieldCheck, "Работа със застрахователи", "Съдействие при щети, оценка и възстановяване след ПТП."]
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">За нас</p>
          <h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">Ателие за автомобилна перфекция</h2>
          <p className="mt-6 font-mono leading-8 text-muted-foreground">Създадохме студио, в което всеки детайл се обработва с дисциплината на лаборатория и усещането за лукс на премиум автомобилен шоурум. Работим с гаранция за качество, прозрачна комуникация и без компромис във финиша.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(([Icon, title, text]) => <div key={title} className="rounded-[1.75rem] border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/70"><Icon className="mb-6 h-8 w-8 text-primary" /><h3 className="font-heading text-xl font-black uppercase tracking-[-0.04em]">{title}</h3><p className="mt-3 font-mono text-sm leading-7 text-muted-foreground">{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}