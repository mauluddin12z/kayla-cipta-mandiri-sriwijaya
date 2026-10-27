import {
  GENERAL_REQUIREMENTS,
  HEIGHT_REQUIREMENTS,
  HEALTH_REQUIREMENTS,
  REQUIRED_DOCUMENTS,
} from "@/lib/constants";
import { CheckmarkIcon } from "@/components/icons";

export function RequirementsSection() {
  return (
    <section
      id="persyaratan"
      aria-labelledby="requirements-heading"
      className="bg-brand-subtle px-6 py-20"
    >
      <div className="max-w-295 mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 max-w-170">
          <span className="text-[13px] font-extrabold text-brand-blue tracking-wider uppercase">
            Persyaratan Peserta
          </span>
          <h2
            id="requirements-heading"
            className="m-0 text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold tracking-tight"
          >
            Pastikan Anda memenuhi syarat sebelum mendaftar
          </h2>
        </div>

        {/* Row 1: General requirements */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {GENERAL_REQUIREMENTS.map(({ label, value, color }) => (
            <div
              key={label}
              className="bg-white rounded-[22px] p-7 flex flex-col gap-2 shadow-sm"
            >
              <span className="text-sm font-bold text-brand-muted">{label}</span>
              <span
                className={`text-[26px] font-extrabold ${color === "blue" ? "text-brand-blue" : "text-brand-navy"}`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Height & health */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Height */}
          <div className="bg-white rounded-[22px] p-8 flex flex-col gap-5 shadow-sm">
            <h3 className="m-0 text-xl font-extrabold">Tinggi Badan Minimal</h3>
            <div className="grid grid-cols-2 gap-4">
              {HEIGHT_REQUIREMENTS.map(({ label, value, variant }) => (
                <div
                  key={label}
                  className={`rounded-2xl p-5 flex flex-col gap-1 ${variant === "yellow" ? "bg-brand-yellow" : "bg-brand-subtle"}`}
                >
                  <span
                    className={`text-sm font-bold ${variant === "yellow" ? "text-brand-navy" : "text-brand-muted"}`}
                  >
                    {label}
                  </span>
                  <span
                    className={`text-[32px] font-extrabold ${variant === "yellow" ? "text-brand-navy" : "text-brand-blue"}`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Health */}
          <div className="bg-white rounded-[22px] p-8 flex flex-col gap-5 shadow-sm">
            <h3 className="m-0 text-xl font-extrabold">Kesehatan</h3>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {HEALTH_REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <div className="flex-none w-7 h-7 rounded-full bg-brand-blue flex items-center justify-center text-white">
                    <CheckmarkIcon className="w-4 h-4" />
                  </div>
                  <span className="text-base leading-snug font-semibold text-brand-navy">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row 3: Required documents */}
        <div className="bg-brand-blue rounded-[26px] p-9 flex flex-wrap items-center justify-between gap-7 shadow-lg">
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-extrabold tracking-wider uppercase text-brand-yellow">
              Siapkan
            </span>
            <h3 className="m-0 text-[26px] leading-tight font-extrabold text-white">
              Dokumen yang harus dibawa
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {REQUIRED_DOCUMENTS.map(({ label, variant }) => (
              <span
                key={label}
                className={`font-bold text-[15px] px-5 py-3 rounded-full shadow-sm ${variant === "highlight" ? "bg-brand-yellow text-brand-navy" : "bg-white text-brand-navy"}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
