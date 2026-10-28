import Image from "next/image";
import { ACTIVITIES } from "@/lib/constants";
import { CalendarIcon, ArrowRightIcon } from "@/components/icons";

export function ActivitiesSection() {
  return (
    <section
      id="kegiatan"
      aria-labelledby="activities-heading"
      className="bg-brand-subtle px-6 py-20"
    >
      <div className="max-w-295 mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-3 max-w-180">
            <span className="text-[13px] font-extrabold text-brand-blue tracking-wider uppercase">
              Dokumentasi &amp; Berita Terkini
            </span>
            <h2
              id="activities-heading"
              className="m-0 text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold tracking-tight text-brand-navy"
            >
              Kegiatan &amp; Informasi Lembaga
            </h2>
          </div>
          <a
            href="#kontak"
            className="btn self-start sm:self-auto inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md whitespace-nowrap transition-all"
          >
            Hubungi Kami
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Column Grid for Landscape Photography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {ACTIVITIES.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-[24px] overflow-hidden flex flex-col shadow-sm hover:shadow-xl border border-brand-border hover:border-brand-blue/50 transition-all duration-300"
            >
              {/* Landscape Image Container (3:2 / 16:10 Photography Aspect Ratio) */}
              <div className="relative w-full aspect-[16/10] bg-brand-subtle overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Category Badge on top of image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-brand-navy/90 backdrop-blur-sm text-brand-yellow font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2.5">
                  {/* Meta date */}
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-blue">
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="m-0 text-lg sm:text-[19px] font-extrabold leading-snug text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="m-0 text-sm leading-relaxed text-brand-muted font-normal line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors inline-flex items-center gap-1.5">
                    Baca selengkapnya
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
