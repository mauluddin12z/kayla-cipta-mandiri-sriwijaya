/** Centralised site-wide constants for LPK Kayla Cipta Mandiri Sriwijaya */

export const SITE = {
  name: "Kayla Cipta Mandiri",
  fullName: "LPK-LN Kayla Cipta Mandiri Sriwijaya",
  tagline: "LPK-LN Sriwijaya · Palembang",
  address:
    "Jalan Boulevard Raya Kav. 1, Perumahan Citraland, Kelurahan Keramasan, Kecamatan Kertapati, Kota Palembang, Provinsi Sumatera Selatan, Kode Pos 30259",
  phone: "081367618764",
  phoneHref: "https://wa.me/6281367618764",
  email: "kaylaciptamandiri@gmail.com",
  registrationPeriod: "November – Desember",
  copyrightYear: 2026,
} as const;

export const FEES = {
  registration: "Rp500.000",
  education: "Rp7.000.000",
  trainingHours: "960 Jam",
  freeItems: "Kaos Olahraga, Baju Batik, dan Buku Panduan Bahasa Jepang",
} as const;

export const ADVANTAGES = [
  {
    id: "bp3mi",
    icon: "shield-check",
    title: "Pengawasan BP3MI",
    description:
      "Kegiatan Lembaga Pelatihan Kerja berada di bawah pengawasan langsung BP3MI.",
    variant: "default" as const,
  },
  {
    id: "fasilitas",
    icon: "building",
    title: "Fasilitas Standar Industri",
    description:
      "Fasilitas lengkap dan berstandar dunia industri: Front Office, Housekeeping, Restaurant, dan Barista.",
    variant: "default" as const,
  },
  {
    id: "bnsp",
    icon: "certificate",
    title: "Sertifikasi BNSP",
    description:
      "Sertifikasi Profesi resmi dari Badan Nasional Sertifikasi Profesi (BNSP).",
    variant: "highlight" as const,
  },
] as const;

export const PROGRAMS = [
  {
    id: "front-office",
    icon: "person",
    title: "Front Office",
    variant: "default" as const,
  },
  {
    id: "housekeeping",
    icon: "housekeeping",
    title: "Housekeeping",
    variant: "default" as const,
  },
  {
    id: "fnb",
    icon: "restaurant",
    title: "Food and Beverage Service",
    variant: "default" as const,
  },
  {
    id: "barista",
    icon: "coffee",
    title: "Barista",
    variant: "default" as const,
  },
  {
    id: "language",
    icon: "chat",
    title: "Basic English, Japanese, and Korean for Hospitality",
    variant: "featured" as const,
  },
] as const;

export type ProgramIconKey = (typeof PROGRAMS)[number]["icon"];
export type AdvantageIconKey = (typeof ADVANTAGES)[number]["icon"];

export const HEALTH_REQUIREMENTS = [
  "Tidak buta warna, bertato, bertindik, dan narkoba",
  "Tidak memiliki mata minus/silinder tinggi",
] as const;

export const REQUIRED_DOCUMENTS = [
  { label: "KTP", variant: "default" as const },
  { label: "Kartu Keluarga (KK)", variant: "default" as const },
  { label: "Akta Kelahiran", variant: "default" as const },
  { label: "Ijazah SD, SMP, SMA/SMK", variant: "highlight" as const },
] as const;

export const GENERAL_REQUIREMENTS = [
  { label: "Jenis Kelamin", value: "Laki-laki / Perempuan", color: "navy" as const },
  { label: "Usia", value: "18 – 38 tahun", color: "blue" as const },
  { label: "Pendidikan Minimal", value: "SMA/SMK Sederajat", color: "navy" as const },
] as const;

export const HEIGHT_REQUIREMENTS = [
  { label: "Laki-laki", value: "160 cm", variant: "subtle" as const },
  { label: "Perempuan", value: "150 cm", variant: "yellow" as const },
] as const;

export const NAV_LINKS = [
  { href: "#program", label: "Bidang Kerja" },
  { href: "#biaya", label: "Biaya" },
  { href: "#persyaratan", label: "Persyaratan" },
  { href: "#kontak", label: "Kontak" },
] as const;
