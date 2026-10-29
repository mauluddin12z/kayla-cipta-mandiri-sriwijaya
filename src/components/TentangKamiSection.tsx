import Image from "next/image";
import { SITE } from "@/lib/constants";

const STATS = [
  { value: "2", unit: "Negara", label: "Tujuan Kerja" },
  { value: "6", unit: "Program", label: "Bidang Keahlian" },
] as const;

const HIGHLIGHTS = [
  { emoji: "🏛️", text: "Lembaga resmi di bawah pengawasan BP3MI" },
  { emoji: "🎓", text: "Sertifikasi profesi resmi BNSP" },
  { emoji: "🤝", text: "Bermitra dengan Hotel Batiqa Palembang" },
  { emoji: "🌍", text: "Penempatan kerja ke Jepang & Korea" },
] as const;

export function TentangKamiSection() {
  return (
    <section id="tentang-kami" className="bg-white px-6 py-20 overflow-hidden">
      <div className="max-w-295 mx-auto flex flex-wrap items-center gap-14 lg:gap-20">
        {/* ── LEFT: Image + floating card ── */}
        <div className="relative flex-none w-full sm:w-105 lg:w-120 mx-auto sm:mx-0">
          {/* Decorative bg block */}
          <div
            className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl bg-brand-blue/10"
            aria-hidden="true"
          />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3">
            <Image
              src="/hero/hero-bg.jpg"
              alt="Kayla Hotel Academy — fasilitas pelatihan perhotelan"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 90vw, 480px"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-brand-navy/40" />
            {/* Tagline overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-brand-navy/90 to-transparent">
              <p className="m-0 text-brand-yellow font-black uppercase text-lg tracking-wide">
                {SITE.tagline}
              </p>
              <p className="m-0 text-white/80 text-sm mt-0.5">{SITE.name}</p>
            </div>
          </div>

          {/* Floating stats card */}
          <div className="absolute -right-6 -bottom-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex gap-5 border border-brand-border z-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-2xl font-black text-brand-blue leading-none">
                  {s.value}
                  <span className="text-sm font-bold text-brand-muted ml-0.5">
                    {s.unit}
                  </span>
                </span>
                <span className="text-[11px] font-semibold text-brand-muted mt-0.5 text-center whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Text content ── */}
        <div className="flex-1 min-w-72 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="self-start text-xs font-extrabold tracking-widest uppercase text-brand-blue bg-brand-subtle px-4 py-1.5 rounded-full">
              Tentang Kami
            </span>
            <h2 className="m-0 text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
              Mencetak Profesional{" "}
              <span className="text-brand-blue">Perhotelan</span> Kelas Dunia
            </h2>
          </div>

          <p className="m-0 text-brand-muted text-lg leading-relaxed">
            <span className="font-bold text-brand-navy">{SITE.name}</span>{" "}
            adalah lembaga pelatihan kerja perhotelan resmi yang siap mencetak
            Anda menjadi profesional perhotelan kelas dunia dengan karier sukses
            di jaringan{" "}
            <span className="text-brand-blue font-semibold">
              hotel internasional
            </span>
            , <span className="text-brand-blue font-semibold">restoran</span>,
            dan{" "}
            <span className="text-brand-blue font-semibold">kapal pesiar</span>.
          </p>

          {/* Highlight list */}
          <div className="grid sm:grid-cols-2 gap-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.text}
                className="flex items-start gap-3 bg-brand-subtle rounded-xl px-4 py-3"
              >
                <span
                  className="text-xl leading-none mt-0.5"
                  aria-hidden="true"
                >
                  {h.emoji}
                </span>
                <span className="text-sm font-semibold text-brand-navy leading-snug">
                  {h.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mt-1">
            <a
              href="/daftar"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-navy text-white font-extrabold text-sm px-6 py-3 rounded-full shadow-md transition-colors"
            >
              Daftar Sekarang
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center bg-transparent border-2 border-brand-border hover:border-brand-blue text-brand-navy font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Lihat Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
