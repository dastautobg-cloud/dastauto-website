import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Camera, Facebook, Instagram, Mail, MapPin, Phone, Upload } from "lucide-react";
import { contact } from "./siteData";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Автобоядисване",
    message: "",
  });

  const [files, setFiles] = useState([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const uploadImages = async () => {
    const uploadedUrls = [];

    for (const file of files) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "dastauto_upload");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dtsjmztev/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || "Cloudinary upload failed");
      }

      uploadedUrls.push(result.secure_url);
    }

    return uploadedUrls;
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    try {
      const uploadedUrls = await uploadImages();

      await emailjs.send(
        "service_h8dpxo7",
        "template_4p95jfu",
        {
          name: form.name,
          phone: form.phone,
          email: form.email || "Няма",
          service: form.service,
          message: form.message || "Няма",
          photos: uploadedUrls.length > 0 ? uploadedUrls.join("\n") : "Няма снимки",
        },
        "lnucRFjsyGxz4cl09"
      );

      setSent(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "Автобоядисване",
        message: "",
      });
      setFiles([]);
    } catch (error) {
      console.error("FORM ERROR:", error);
      alert("Грешка при изпращане. Провери Cloudinary Upload Preset и EmailJS настройките.");
    } finally {
      setLoading(false);
    }
  };

  const mapabratle =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.7519149485743!2d27.455775199999998!3d42.5393244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a693bfc524801b%3A0xe0086aa4c809fd00!2z0JDQstGC0L7RgdC10YDQstC40Lcg0JTQkNCh0KLQkNCj0KLQng!5e0!3m2!1sbg!2sbg!4v1781193663901!5m2!1sbg!2sbg";

  return (
    <section id="contact" className="border-t border-border bg-card/35 py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Контакти</p>
          <h2 className="mt-4 font-heading text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">
            Drop {"&"} Estimate
          </h2>
          <p className="mt-6 font-mono leading-8 text-muted-foreground">
            Изпратете снимки на щетата или автомобила и ще се свържем с вас за предварителна оценка.
          </p>

          <div className="mt-8 grid gap-5 font-mono text-sm text-muted-foreground">
            <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3 transition hover:text-primary">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground text-base font-bold">{contact.phone}</span>
            </a>

            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 transition hover:text-primary">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              {contact.email}
            </a>

            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              {contact.address}
            </p>

            <p className="pl-8">{contact.hours}</p>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-mono text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 font-mono text-sm text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>

          <iframe
            title="DastAuto локация"
            src={mapabratle}
            className="mt-8 h-64 w-full rounded-[2rem] border border-border"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <form onSubmit={submit} className="rounded-[2rem] border border-border bg-background p-6 lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Име"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="min-h-12 rounded-xl border border-input bg-card px-4 font-mono text-sm"
            />

            <input
              required
              placeholder="Телефон"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="min-h-12 rounded-xl border border-input bg-card px-4 font-mono text-sm"
            />

            <input
              placeholder="Имейл"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="min-h-12 rounded-xl border border-input bg-card px-4 font-mono text-sm"
            />

            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="min-h-12 rounded-xl border border-input bg-card px-4 font-mono text-sm"
            >
              <option>Автобоядисване</option>
              <option>Тенекеджийски ремонт</option>
              <option>Детайлинг</option>
              <option>Керамично покритие</option>
            </select>
          </div>

          <textarea
            placeholder="Опишете щетата или желаната услуга"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-4 min-h-36 w-full rounded-xl border border-input bg-card p-4 font-mono text-sm"
          />

          <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-primary/60 bg-primary/5 p-8 text-center">
            <Upload className="mb-3 h-8 w-8 text-primary" />
            <span className="font-mono text-sm text-foreground">Качете снимки за предварителна оценка</span>
            <span className="mt-1 font-mono text-xs text-muted-foreground">
              {files.length ? `${files.length} избрани файла` : "JPG, PNG или HEIC"}
            </span>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
              className="hidden"
            />
          </label>

          <button
            disabled={loading}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-8 font-mono text-sm font-bold uppercase text-primary-foreground disabled:opacity-60"
          >
            <Camera className="h-4 w-4" />
            {loading ? "Изпращане..." : sent ? "Запитването е изпратено" : "Изпрати запитване"}
          </button>
        </form>
      </div>
    </section>
  );
}