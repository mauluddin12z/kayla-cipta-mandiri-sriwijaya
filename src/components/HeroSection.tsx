import Image from "next/image";
import { SITE } from "@/lib/constants";

const VENUE_CHIPS = [
  { label: "Hotel", image: "/hero/hero-hotel.png" },
  { label: "Restoran", image: "/hero/hero-restaurant.png" },
  { label: "Kapal Pesiar", image: "/hero/hero-cruise.png" },
];

const DESTINATIONS = [
  { label: "Jepang", flag: "🇯🇵" },
  { label: "Korea", flag: "🇰🇷" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-brand-navy">
      {/* ── Layer 1: Background photo ── */}
      <Image
        src="/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-35 select-none"
        aria-hidden="true"
      />

      {/* ── Layer 2: Left-dominant background gradient (ensures text readability) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(90deg, #0e2354 0%, #0e2354 0%, #0e2354cc 60%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 3: Top yellow accent stripe ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow z-30"
        aria-hidden="true"
      />

      {/* ── Layer 4: Bottom-left decorative circle ── */}
      <div
        className="absolute -left-16 -bottom-20 w-72 h-72 rounded-full border-30 border-brand-yellow opacity-15 pointer-events-none z-1"
        aria-hidden="true"
      />

      {/* ── Layer 5: Main Content (Left Text + Right Image) ── */}
      <div className="relative w-full max-w-295 mx-auto px-6 pt-16 pb-0 flex flex-col lg:flex-row items-end justify-between gap-8 min-h-[90vh]">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[54%] xl:w-[52%] flex flex-col gap-6 relative z-30 pb-16 lg:pb-24 pt-8">
          {/* Main headline */}
          <h1
            className="m-0 text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-brand-yellow"
            style={{ textShadow: "0 4px 24px rgba(14,35,84,0.5)" }}
          >
            Kuliah Singkat
            <br />
            <span className="text-white">Kerja</span>{" "}
            <span className="text-brand-yellow">Mendunia</span>
          </h1>

          {/* Sub-question */}
          <p className="m-0 text-xl sm:text-2xl text-white/90 font-medium leading-snug max-w-115">
            Ingin bekerja di{" "}
            <span className="text-brand-yellow font-bold">hotel</span>,{" "}
            <span className="text-brand-yellow font-bold">restoran</span>, atau{" "}
            <span className="text-brand-yellow font-bold">kapal pesiar</span>?
          </p>

          {/* Venue chips */}
          <div className="flex flex-wrap gap-2.5">
            {VENUE_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="flex flex-col items-center w-24 aspect-square gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-xs rounded-lg p-2"
              >
                {chip.label}
                <Image
                  src={chip.image}
                  alt={chip.label}
                  className="w-full h-full object-contain"
                  width={100}
                  height={100}
                />
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="m-0 text-white/75 text-base leading-relaxed max-w-115">
            Persiapkan dirimu melalui pelatihan kerja yang tepat untuk meraih
            peluang karier di dunia internasional.
          </p>

          {/* Destinations */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-brand-yellow font-bold text-sm uppercase tracking-wider">
              ✈️ Peluang Karir International
            </span>
            <div className="flex gap-2.5">
              {DESTINATIONS.map((dest) => (
                <span
                  key={dest.label}
                  className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-navy font-extrabold text-sm px-4 py-1.5 rounded-lg shadow"
                >
                  <span>{dest.flag}</span>
                  {dest.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3.5 mt-2">
            <a
              href="/daftar"
              className="inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-extrabold text-base px-8 py-4 rounded-full shadow-lg transition-colors"
            >
              Daftar Sekarang
            </a>
            <a
              href={SITE.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold text-base px-7 py-3.5 rounded-full border-2 border-white transition-colors"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: aligned to right, flush bottom */}
        <div className="w-full lg:w-[46%] xl:w-[48%] h-full hidden sm:flex justify-center lg:justify-end items-end self-end relative z-10">
          <div
            className="relative w-full max-w-105 sm:max-w-120 lg:max-w-132.5 aspect-[1/1.06]"
            style={{ mixBlendMode: "multiply" }}
          >
            <Image
              src="/hero/hero-people.png"
              alt="Profesional perhotelan"
              fill
              priority
              className="object-contain select-none object-top"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 530px"
            />
          </div>
        </div>
      </div>

      {/* ── Layer 6: Gradient overlay outside the column (sitting on top to close the bottom of hero-people) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: [
            /* Bottom gradient to smoothly close the bottom edge of hero-people */
            "linear-gradient(to top, #0e2354 0%, #0e2354 15%, #0e235480 25%, transparent 28%)",
            /* Subtle top vignette */
            "linear-gradient(to bottom, #0e235466 0%, transparent 12%)",
          ].join(", "),
        }}
        aria-hidden="true"
      />
    </section>
  );
}
