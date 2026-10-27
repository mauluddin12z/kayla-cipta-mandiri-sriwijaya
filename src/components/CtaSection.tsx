import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="bg-brand-yellow px-6 py-20">
      <div className="max-w-295 mx-auto flex flex-wrap items-center justify-between gap-8">
        <div className="flex-1 min-w-75 flex flex-col gap-3">
          <h2
            id="cta-heading"
            className="m-0 text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold tracking-tight text-brand-navy"
          >
            Pendaftaran dibuka {SITE.registrationPeriod}
          </h2>
          <p className="m-0 text-lg leading-relaxed font-semibold text-brand-navy">
            Hubungi kami untuk mendaftar dan menanyakan informasi pelatihan
            kerja ke Jepang dan Korea.
          </p>
        </div>

        <div className="flex flex-wrap gap-3.5">
          <a
            id="cta-whatsapp"
            className="btn inline-flex items-center justify-center bg-brand-navy hover:bg-brand-navy-dark text-white font-extrabold text-base px-[30px] py-4 rounded-full shadow-md"
            href={SITE.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat WhatsApp
          </a>
          <a
            id="cta-email"
            className="btn inline-flex items-center justify-center bg-transparent hover:bg-brand-navy/10 text-brand-navy font-extrabold text-base px-7 py-3.5 rounded-full border-2 border-brand-navy"
            href={`mailto:${SITE.email}`}
          >
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  );
}
