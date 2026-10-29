import { FEES, SITE } from "@/lib/constants";
import {
  ClockIcon,
  CertificateIcon,
  BookIcon,
  ShirtIcon,
  ToolsIcon,
  MapIcon,
} from "@/components/icons";
import type { ReactElement, SVGProps } from "react";

type FeeIconKey = "certificate" | "book" | "shirt" | "tools" | "map";
const FEE_ICON_MAP: Record<
  FeeIconKey,
  (p: SVGProps<SVGSVGElement>) => ReactElement
> = {
  certificate: CertificateIcon,
  book: BookIcon,
  shirt: ShirtIcon,
  tools: ToolsIcon,
  map: MapIcon,
};

export function BiayaSection() {
  return (
    <section id="biaya" className="bg-brand-blue px-6 py-20">
      <div className="max-w-295 mx-auto flex flex-wrap items-center gap-14">
        {/* Left: text */}
        <div className="flex-1 min-w-75 flex flex-col gap-5">
          <span className="self-start bg-brand-yellow text-brand-navy font-extrabold text-sm px-4.5 py-2 rounded-full">
            Investasi Terbaik
          </span>
          <h2 className="m-0 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Biaya &amp; Fasilitas{" "}
            <span className="text-brand-yellow">Pelatihan</span>
          </h2>
          <p className="m-0 text-white/80 text-lg leading-relaxed">
            Raih karier internasional dengan investasi yang terjangkau. Program
            pelatihan komprehensif selama{" "}
            <span className="text-white font-semibold">
              {FEES.trainingHours}
            </span>{" "}
            dengan fasilitas lengkap.
          </p>
          <p className="m-0 text-brand-yellow/90 text-sm font-semibold">
            Periode pendaftaran {SITE.registrationPeriod}
          </p>
        </div>

        {/* Right: fee card */}
        <div className="flex-1 min-w-75 max-w-115 bg-white text-brand-navy rounded-[28px] p-8 flex flex-col gap-5.5 shadow-[0_24px_60px_rgba(14,35,84,0.28)]">
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold text-brand-blue tracking-wider uppercase">
              Yang Sudah Termasuk
            </span>
            <span className="text-[15px] font-semibold text-brand-muted">
              Paket pelatihan lengkap
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
          {/* <div className="flex justify-between items-center gap-3 pb-4.5 border-b border-brand-border">
            <span className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand-muted">
              <ClockIcon className="w-5.5 h-5.5 text-brand-blue" />
              Lama Pelatihan
            </span>
            <span className="text-[26px] font-extrabold text-brand-navy">
              {FEES.trainingHours}
            </span>
          </div> */}

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
