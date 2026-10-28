import Image from "next/image";
import { ACTIVITIES } from "@/lib/constants";
import { CalendarIcon, ArrowRightIcon } from "@/components/icons";

export function ActivitiesSection() {
  const [featured, ...rest] = ACTIVITIES;

  return (
    <section
      id="kegiatan"
      aria-labelledby="activities-heading"
      className="bg-brand-subtle px-6 py-20"
    >
      <div className="max-w-295 mx-auto flex flex-col gap-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-3 max-w-170">
            <span className="text-[13px] font-extrabold text-brand-blue tracking-wider uppercase">
              Kegiatan &amp; Informasi
            </span>
            <h2
              id="activities-heading"
              className="m-0 text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold tracking-tight"
            >
              Dokumentasi kegiatan peserta kami
            </h2>
          </div>
          <a
            href="#kontak"
            className="btn self-start sm:self-auto inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm px-5 py-3 rounded-full shadow-sm whitespace-nowrap"
          >
            Hubungi Kami
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Featured card — portrait image left, text right */}
          <article className="lg:col-span-2 bg-brand-navy rounded-[24px] overflow-hidden flex flex-col sm:flex-row shadow-md hover:shadow-xl transition-shadow min-h-[420px]">
            {/* Portrait image panel */}
            <div className="relative w-full sm:w-52 lg:w-64 shrink-0 h-72 sm:h-auto bg-brand-blue/30">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 256px"
              />
              {/* Category badge */}
              <span className="absolute top-4 left-4 bg-brand-yellow text-brand-navy font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                {featured.category}
              </span>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-between gap-6 p-8 flex-1">
              <div className="flex flex-col gap-4">
                <h3 className="m-0 text-2xl sm:text-[26px] font-extrabold leading-snug text-white">
                  {featured.title}
                </h3>
                <p className="m-0 text-base leading-relaxed font-medium text-white/80">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/20">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/70">
                  <CalendarIcon className="w-4 h-4 text-brand-yellow" />
                  {featured.date}
                </span>
              </div>
            </div>
          </article>

          {/* Secondary cards — portrait image left, text right */}
          <div className="flex flex-col gap-6">
            {rest.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-[24px] overflow-hidden flex flex-row shadow-sm hover:shadow-md border border-brand-border transition-shadow"
              >
                {/* Portrait image panel */}
                <div className="relative w-28 sm:w-32 shrink-0 self-stretch bg-brand-subtle">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                  />
                  {/* Category badge — rotated vertically on narrow panel */}
                  <span className="absolute top-3 left-2 right-2 bg-brand-blue/90 text-white font-extrabold text-[10px] px-2 py-1 rounded-full uppercase tracking-wide text-center shadow-sm leading-tight">
                    {item.category}
                  </span>
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-between gap-3 p-5 flex-1 min-w-0">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="m-0 text-[15px] font-extrabold leading-snug text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="m-0 text-xs leading-relaxed text-brand-muted line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-brand-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-muted">
                      <CalendarIcon className="w-3 h-3 text-brand-blue" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
