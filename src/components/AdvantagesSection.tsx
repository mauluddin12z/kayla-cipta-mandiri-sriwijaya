import type { ReactElement, SVGProps } from "react";
import { ADVANTAGES } from "@/lib/constants";
import type { AdvantageIconKey } from "@/lib/constants";
import {
  ShieldCheckIcon,
  BuildingIcon,
  CertificateIcon,
} from "@/components/icons";

// Map icon keys to components so the data layer stays JSX-free
const ICON_MAP: Record<AdvantageIconKey, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  "shield-check": ShieldCheckIcon,
  building: BuildingIcon,
  certificate: CertificateIcon,
};

export function AdvantagesSection() {
  return (
    <section aria-labelledby="advantages-heading" className="bg-white px-6 pt-20 pb-6">
      <div className="max-w-295 mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 max-w-170">
          <span className="text-[13px] font-extrabold text-brand-blue tracking-wider uppercase">
            Keunggulan Lembaga
          </span>
          <h2
            id="advantages-heading"
            className="m-0 text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold tracking-tight"
          >
            Berizin, berstandar industri, bersertifikat
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANTAGES.map((item) => {
            const Icon = ICON_MAP[item.icon as AdvantageIconKey];
            const isHighlight = item.variant === "highlight";

            return (
              <div
                key={item.id}
                className={
                  isHighlight
                    ? "bg-brand-yellow rounded-3xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                    : "bg-brand-subtle rounded-3xl p-8 flex flex-col gap-4 border border-brand-border/40 hover:shadow-md transition-shadow"
                }
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${isHighlight ? "bg-brand-navy" : "bg-brand-blue"}`}
                >
                  <Icon
                    className={`w-7 h-7 ${isHighlight ? "text-brand-yellow" : "text-white"}`}
                  />
                </div>
                <h3
                  className={`m-0 text-xl font-extrabold ${isHighlight ? "text-brand-navy" : ""}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`m-0 text-base leading-relaxed ${isHighlight ? "font-medium text-brand-navy" : "text-brand-muted"}`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
