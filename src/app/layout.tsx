import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LPK Kayla Cipta Mandiri Sriwijaya - Pelatihan Kerja ke Jepang dan Korea",
  description:
    "Lembaga Pelatihan Kerja Kayla Cipta Mandiri Sriwijaya (LPK-LN) Palembang. Membuka penerimaan peserta didik baru untuk pelatihan kerja ke Jepang dan Korea.",
  keywords: [
    "LPK Kayla Cipta Mandiri Sriwijaya",
    "LPK Palembang",
    "Kerja ke Jepang",
    "Kerja ke Korea",
    "Pelatihan Kerja Luar Negeri",
    "Perhotelan",
    "Hospitality",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-full font-sans antialiased text-brand-navy bg-white selection:bg-brand-yellow selection:text-brand-navy">
        {children}
      </body>
    </html>
  );
}
