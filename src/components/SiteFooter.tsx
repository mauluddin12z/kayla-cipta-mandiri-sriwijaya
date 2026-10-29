import { SITE } from "@/lib/constants";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-brand-blue text-white px-6 pt-18 pb-10">
      <div className="max-w-295 mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-16 h-16 bg-brand-yellow aspect-square p-2 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <Image
                  src="/logo.svg"
                  alt="LPK Logo"
                  width={100}
                  height={100}
                />
              </div>
              <span className="font-extrabold text-lg text-white">
                {SITE.fullName}
              </span>
            </div>
            <p className="m-0 text-base leading-relaxed text-white/90">
              Lembaga Pelatihan Kerja {SITE.fullName} Palembang. Pelatihan kerja
              ke Jepang dan Korea.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4.5">
            <h2 className="m-0 text-sm font-extrabold tracking-wider uppercase text-brand-yellow">
              Kontak
            </h2>

            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5.5 h-5.5 text-white shrink-0" />
              <a
                href={SITE.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-yellow font-bold text-base no-underline transition-colors"
              >
                {SITE.phone} (Telepon/WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MailIcon className="w-5.5 h-5.5 text-white shrink-0" />
              <a
                href={`mailto:${SITE.email}`}
                className="text-white hover:text-brand-yellow font-bold text-base no-underline break-all transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Office address */}
          <div className="flex flex-col gap-4.5">
            <h2 className="m-0 text-sm font-extrabold tracking-wider uppercase text-brand-yellow">
              Alamat Kantor
            </h2>
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-5.5 h-5.5 text-white shrink-0 mt-1" />
              <address className="not-italic text-base leading-relaxed font-semibold text-white/95">
                {SITE.address}
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-sm font-semibold text-white/90">
          © {SITE.copyrightYear} LPK-LN {SITE.fullName}. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
