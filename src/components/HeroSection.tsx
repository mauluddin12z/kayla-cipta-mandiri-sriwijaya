import { FEES, SITE } from "@/lib/constants";
import { ClockIcon } from "@/components/icons";

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
              href={SITE.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Daftar via WhatsApp
            </a>
            <a
              id="hero-cta-secondary"
              className="btn inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold text-base px-7 py-3.5 rounded-full border-2 border-white"
              href="#persyaratan"
            >
              Lihat Persyaratan
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

          <FeeRow label="Biaya Pendaftaran" value={FEES.registration} valueColor="text-brand-navy" />
          <FeeRow label="Biaya Pendidikan" value={FEES.education} valueColor="text-brand-blue" />

          <div className="flex justify-between items-center gap-3">
            <span className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand-muted">
              <ClockIcon className="w-5.5 h-5.5 text-brand-blue" />
              Lama Pelatihan
            </span>
            <span className="text-[26px] font-extrabold text-brand-navy">
              {FEES.trainingHours}
            </span>
          </div>

          <div className="bg-brand-yellow rounded-lg p-5 flex flex-col gap-1.5 shadow-sm">
            <span className="text-[13px] font-extrabold tracking-wider uppercase text-brand-navy">
              Gratis
            </span>
            <span className="text-base font-bold leading-normal text-brand-navy">
              {FEES.freeItems}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Internal sub-component – not exported; only meaningful inside this module
// ---------------------------------------------------------------------------

interface FeeRowProps {
  label: string;
  value: string;
  valueColor: string;
}

function FeeRow({ label, value, valueColor }: FeeRowProps) {
  return (
    <div className="flex justify-between items-baseline gap-3 pb-4.5 border-b border-brand-border">
      <span className="text-[15px] font-semibold text-brand-muted">{label}</span>
      <span className={`text-[26px] font-extrabold ${valueColor}`}>{value}</span>
    </div>
  );
}
