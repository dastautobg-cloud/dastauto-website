const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { contact } from "./siteData";

const links = [
  { label: "Начало", path: "/" },
  { label: "Услуги", path: "/uslugi" },
  { label: "Галерия", path: "/galeriya" },
  { label: "За нас", path: "/za-nas" },
  { label: "Контакти", path: "/kontakti" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-2xl">
      <div className="h-0.5 bg-primary transition-all" style={{ width: `${progress}%` }} />
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img src="src/assets/logo_white.png" alt="DastAuto logo" className="h-14 w-auto object-contain" />
          <span className="font-heading text-sm font-black uppercase tracking-[-0.04em] text-foreground">DastAuto</span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-xs uppercase transition hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a href={`tel:${contact.phoneHref}`} className="hidden min-h-12 items-center gap-2 rounded-full bg-primary px-5 font-mono text-xs font-bold uppercase text-primary-foreground transition hover:scale-105 lg:flex">
          <Phone className="h-4 w-4" /> Обади се
        </a>
        <button onClick={() => setOpen(!open)} className="grid h-12 w-12 place-items-center rounded-full border border-border lg:hidden" aria-label="Меню">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-3 font-mono text-sm ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <a href={`tel:${contact.phoneHref}`} className="mt-4 flex items-center gap-2 font-mono text-sm text-primary">
            <Phone className="h-4 w-4" /> {contact.phone}
          </a>
        </div>
      )}
    </header>
  );
}