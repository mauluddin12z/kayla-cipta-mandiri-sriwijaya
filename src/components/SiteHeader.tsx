import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="px-6 py-4 border-b border-brand-border sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-295 mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center"
            aria-hidden="true"
          >
            <Image src="/logo.png" alt="LPK Logo" width={100} height={100} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-base text-brand-navy">
              {SITE.name}
            </span>
            <span className="font-semibold text-xs text-brand-muted">
              {SITE.tagline}
            </span>
          </div>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px] font-semibold"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-brand-navy hover:text-brand-blue transition-colors"
            >
              {label}
            </Link>
          ))}

          <a
            id="nav-cta"
            className="btn inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white px-5.5 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            href={SITE.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Sekarang
          </a>
        </nav>
      </div>
    </header>
  );
}
