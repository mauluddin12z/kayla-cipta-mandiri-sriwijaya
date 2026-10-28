import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { Metadata } from "next";
import { ACTIVITIES, SITE } from "@/lib/constants";
import { SiteHeader, SiteFooter } from "@/components";
import { CalendarIcon, ArrowRightIcon } from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = ACTIVITIES.find((item) => item.slug === slug);

  if (!activity) {
    return {
      title: `Kegiatan Tidak Ditemukan - ${SITE.name}`,
    };
  }

  return {
    title: `${activity.title} - ${SITE.fullName}`,
    description: activity.excerpt,
    openGraph: {
      title: activity.title,
      description: activity.excerpt,
      images: [{ url: activity.image }],
    },
  };
}

export function generateStaticParams() {
  return ACTIVITIES.map((item) => ({
    slug: item.slug,
  }));
}

// ---------------------------------------------------------------------------
// Skeleton fallback for instant App Shell (resolves instant-shell-url-data)
// ---------------------------------------------------------------------------
function KegiatanDetailSkeleton() {
  return (
    <main className="flex-1 bg-brand-subtle py-10 sm:py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 animate-pulse">
        <div className="h-5 w-48 bg-brand-border/60 rounded-md" />
        <div className="bg-white rounded-[28px] p-6 sm:p-10 border border-brand-border flex flex-col gap-6">
          <div className="h-6 w-32 bg-brand-border/60 rounded-full" />
          <div className="h-10 w-3/4 bg-brand-border/60 rounded-lg" />
          <div className="w-full aspect-[16/10] bg-brand-border/40 rounded-2xl" />
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-brand-border/50 rounded" />
            <div className="h-4 w-5/6 bg-brand-border/50 rounded" />
            <div className="h-4 w-4/6 bg-brand-border/50 rounded" />
          </div>
        </div>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Main page component - Renders the instant App Shell + Suspense boundary
// ---------------------------------------------------------------------------
export default function KegiatanDetailPage({ params }: PageProps) {
  return (
    <div className="w-full bg-white text-brand-navy min-h-screen flex flex-col">
      <SiteHeader />
      <Suspense fallback={<KegiatanDetailSkeleton />}>
        <KegiatanDetailContent params={params} />
      </Suspense>
      <SiteFooter />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Async content component - Reads params inside Suspense
// ---------------------------------------------------------------------------
async function KegiatanDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const activity = ACTIVITIES.find((item) => item.slug === slug);

  if (!activity) {
    notFound();
  }

  // Rekomendasi kegiatan lainnya
  const otherActivities = ACTIVITIES.filter((item) => item.slug !== slug);

  return (
    <main className="flex-1 bg-brand-subtle py-10 sm:py-16 px-6">
      <article className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm font-semibold text-brand-muted"
        >
          <Link
            href="/"
            className="hover:text-brand-blue transition-colors no-underline text-inherit"
          >
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/#kegiatan"
            className="hover:text-brand-blue transition-colors no-underline text-inherit"
          >
            Kegiatan
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-brand-blue truncate max-w-[200px] sm:max-w-none">
            {activity.category}
          </span>
        </nav>

        {/* Article Header Card */}
        <div className="bg-white rounded-[28px] p-6 sm:p-10 shadow-sm border border-brand-border flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-brand-navy text-brand-yellow font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              {activity.category}
            </span>
            <div className="flex items-center gap-2 text-xs font-bold text-brand-blue">
              <CalendarIcon className="w-4 h-4" />
              <span>{activity.date}</span>
              <span aria-hidden="true">•</span>
              <span className="text-brand-muted">
                {activity.readTime} baca
              </span>
            </div>
          </div>

          <h1 className="m-0 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-brand-navy">
            {activity.title}
          </h1>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-brand-subtle">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          {/* Article Body Content */}
          <div className="flex flex-col gap-5 pt-4 text-base sm:text-lg leading-relaxed text-brand-navy/90 font-medium">
            {activity.content.map((paragraph, idx) => (
              <p key={idx} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Box Inside Article */}
          <div className="mt-6 bg-brand-blue rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex flex-col gap-1.5 text-center sm:text-left">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-yellow">
                Bergabung Bersama Kami
              </span>
              <h3 className="m-0 text-xl font-extrabold leading-snug">
                Wujudkan Karier Perhotelan ke Jepang &amp; Korea
              </h3>
              <p className="m-0 text-sm text-white/80 font-normal">
                Pendaftaran peserta didik baru dibuka untuk periode{" "}
                {SITE.registrationPeriod}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/daftar"
                className="btn inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-extrabold text-sm px-6 py-3.5 rounded-full shadow-sm no-underline"
              >
                Daftar Sekarang
              </Link>
              <a
                href={SITE.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3.5 rounded-full border border-white/30 no-underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related / Other Activities Section */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="m-0 text-2xl font-extrabold text-brand-navy tracking-tight">
              Kegiatan Lainnya
            </h2>
            <Link
              href="/#kegiatan"
              className="text-sm font-bold text-brand-blue hover:text-brand-navy transition-colors no-underline inline-flex items-center gap-1"
            >
              Lihat Semua Kegiatan
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherActivities.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-[22px] overflow-hidden flex flex-col shadow-sm hover:shadow-md border border-brand-border transition-all duration-300"
              >
                <Link
                  href={`/kegiatan/${item.slug}`}
                  className="relative w-full aspect-[16/10] bg-brand-subtle overflow-hidden block"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block bg-brand-navy/90 backdrop-blur-sm text-brand-yellow font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-blue">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="m-0 text-base font-extrabold leading-snug text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2">
                      <Link
                        href={`/kegiatan/${item.slug}`}
                        className="no-underline text-inherit"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="m-0 text-xs leading-relaxed text-brand-muted line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-border">
                    <Link
                      href={`/kegiatan/${item.slug}`}
                      className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors inline-flex items-center gap-1 no-underline"
                    >
                      Baca selengkapnya
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
