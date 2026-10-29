import {
  SiteHeader,
  HeroSection,
  TentangKamiSection,
  BiayaSection,
  AdvantagesSection,
  ProgramsSection,
  ActivitiesSection,
  RequirementsSection,
  CtaSection,
  SiteFooter,
} from "@/components";
import { SITE } from "@/lib/constants";

/**
 * Homepage — assembles page-level sections in document order.
 * All business data lives in `src/lib/constants.ts`.
 * All presentational logic lives in `src/components/`.
 */
export default function HomePage() {
  return (
    <div className="w-full bg-white text-brand-navy overflow-hidden">
      {/* PPDB announcement banner */}
      <div
        role="banner"
        className="bg-brand-yellow px-6 py-2.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-center text-sm font-bold text-brand-navy"
      >
        <span>Penerimaan Peserta Didik Baru</span>
        <span aria-hidden="true">•</span>
        <span>Pendaftaran: {SITE.registrationPeriod}</span>
      </div>

      <SiteHeader />

      <main>
        <HeroSection />
        <TentangKamiSection />
        <AdvantagesSection />
        <ProgramsSection />
        <BiayaSection />
        <ActivitiesSection />
        <RequirementsSection />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
