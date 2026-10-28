import { FEES, SITE } from "@/lib/constants";
import { ClockIcon, CertificateIcon, BookIcon, ShirtIcon, ToolsIcon, MapIcon } from "@/components/icons";
import type { ReactElement, SVGProps } from "react";

// Icon map for fee items
type FeeIconKey = "certificate" | "book" | "shirt" | "tools" | "map";
const FEE_ICON_MAP: Record<FeeIconKey, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  certificate: CertificateIcon,
  book: BookIcon,
  shirt: ShirtIcon,
  tools: ToolsIcon,
  map: MapIcon,
};

export function HeroSection() {
  return (
    <section className="relative bg-brand-blue text-white px-6 pt-20 pb-24 overflow-hidden">
      {/* Decorative geometric shapes */}
      <div
        className="absolute -right-36 -top-40 w-110 h-110 rounded-full bg-brand-yellow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-22.5 -bottom-37.5 w-80 h-80 rounded-full border-36 border-white opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-295 mx-auto flex flex-wrap items-center gap-14">
        {/* Left column */}
        <div className="flex-1 min-w-75 flex flex-col gap-6">
          <span className="self-start bg-brand-yellow text-brand-navy font-extrabold text-sm px-4.5 py-2 rounded-full shadow-sm">
            Kesempatan Emas!
          </span>

          <h1 className="m-0 text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-extrabold tracking-tight text-white">
            Pelatihan Kerja ke{" "}
            <span className="text-brand-yellow">Jepang</span> dan{" "}
            <span className="text-brand-yellow">Korea</span>
          </h1>

          <p className="m-0 text-lg sm:text-[19px] leading-relaxed font-medium text-white/95 max-w-135">
            Lembaga Pelatihan Kerja {SITE.fullName} Palembang membuka
            penerimaan peserta didik baru. Pendaftaran dibuka{" "}
            {SITE.registrationPeriod}.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-2">
            <a
              id="hero-cta-primary"
              className="btn inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-extrabold text-base px-[30px] py-4 rounded-full shadow-md"
              href="/daftar"
            >
              Daftar Sekarang
            </a>
            <a
              id="hero-cta-secondary"
              className="btn inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold text-base px-7 py-3.5 rounded-full border-2 border-white"
              href={SITE.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </div>

        {/* Right column: Fee & Facility card */}
        <div
          id="biaya"
          className="flex-1 min-w-75 max-w-115 bg-white text-brand-navy rounded-[28px] p-8 flex flex-col gap-5.5 shadow-[0_24px_60px_rgba(14,35,84,0.28)]"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold text-brand-blue tracking-wider uppercase">
              Biaya &amp; Fasilitas Pelatihan
            </span>
            <span className="text-[15px] font-semibold text-brand-muted">
              Periode pendaftaran {SITE.registrationPeriod}
            </span>
          </div>

          {/* Fee items list */}
          <div className="flex flex-col gap-2.5">
            {FEES.feeItems.map((item) => {
              const Icon = FEE_ICON_MAP[item.icon as FeeIconKey];
              return (
                <div
                  key={item.icon}
                  className="flex items-center gap-3 rounded-xl bg-brand-subtle px-4 py-3"
                >
                  <div className="flex-none w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[15px] font-semibold text-brand-navy">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Duration */}
          <div className="flex justify-between items-center gap-3 pb-4.5 border-b border-brand-border">
            <span className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand-muted">
              <ClockIcon className="w-5.5 h-5.5 text-brand-blue" />
              Lama Pelatihan
            </span>
            <span className="text-[26px] font-extrabold text-brand-navy">
              {FEES.trainingHours}
            </span>
          </div>

          {/* Total */}
          <div className="bg-brand-yellow rounded-xl p-5 flex items-center justify-between gap-3 shadow-sm">
            <span className="text-[13px] font-extrabold tracking-wider uppercase text-brand-navy">
              Biaya Total
            </span>
            <span className="text-[28px] font-extrabold text-brand-navy">
              {FEES.total}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

