import type { ReactElement, SVGProps } from "react";
import { PROGRAMS } from "@/lib/constants";
import type { ProgramIconKey } from "@/lib/constants";
import {
  PersonIcon,
  HousekeepingIcon,
  RestaurantIcon,
  CoffeeIcon,
  ChatIcon,
} from "@/components/icons";

const ICON_MAP: Record<ProgramIconKey, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  person: PersonIcon,
  housekeeping: HousekeepingIcon,
  restaurant: RestaurantIcon,
  coffee: CoffeeIcon,
  chat: ChatIcon,
};

export function ProgramsSection() {
  return (
    <section
      id="program"
      aria-labelledby="programs-heading"
      className="bg-white px-6 py-20"
    >
      <div className="max-w-295 mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 max-w-170">
          <span className="text-[13px] font-extrabold text-brand-blue tracking-wider uppercase">
            Bidang Kerja
          </span>
          <h2
            id="programs-heading"
            className="m-0 text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold tracking-tight"
          >
            Lima bidang pelatihan untuk dunia perhotelan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROGRAMS.map((program) => {
            const Icon = ICON_MAP[program.icon as ProgramIconKey];
            const isFeatured = program.variant === "featured";

            return (
              <div
                key={program.id}
                className={
                  isFeatured
                    ? "border-2 border-brand-blue rounded-[22px] p-6 flex flex-col gap-4 bg-brand-blue text-white shadow-md hover:shadow-xl transition-all"
                    : "border-2 border-brand-border rounded-[22px] p-6 flex flex-col gap-4 bg-white hover:border-brand-blue hover:shadow-md transition-all"
                }
              >
                <div
                  className={`w-13 h-13 rounded-full flex items-center justify-center shadow-sm ${isFeatured ? "bg-white" : "bg-brand-yellow"}`}
                >
                  <Icon
                    className={`w-6.5 h-6.5 ${isFeatured ? "text-brand-blue" : "text-brand-navy"}`}
                  />
                </div>
                <h3
                  className={`m-0 text-lg font-extrabold ${isFeatured ? "text-white" : ""}`}
                >
                  {program.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
