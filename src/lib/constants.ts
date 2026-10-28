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
  total: "Rp15.000.000",
  trainingHours: "960 Jam",
  feeItems: [
    { label: "Sertifikasi", icon: "certificate" },
    { label: "Buku Diklat", icon: "book" },
    { label: "Seragam", icon: "shirt" },
    { label: "Bahan Baku Praktek", icon: "tools" },
    { label: "Field Trip", icon: "map" },
  ],
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

export const ACTIVITIES = [
  {
    id: "act-1",
    category: "Kegiatan",
    title: "Orientasi & Pengenalan Program Pelatihan Kerja",
    excerpt:
      "Peserta baru mengikuti sesi orientasi menyeluruh, mulai dari pengenalan kurikulum, jadwal pelatihan, hingga tata tertib asrama dan fasilitas lembaga.",
    date: "28 Oktober 2026",
    readTime: "3 menit",
    image: "/activities/orientation.jpg",
    variant: "featured" as const,
  },
  {
    id: "act-2",
    category: "Field Trip",
    title: "Kunjungan Industri ke Hotel Bintang 5 di Palembang",
    excerpt:
      "Peserta mendapat kesempatan mengunjungi hotel berbintang untuk melihat langsung standar operasional industri perhotelan internasional.",
    date: "28 Oktober 2026",
    readTime: "4 menit",
    image: "/activities/field-trip.jpg",
    variant: "default" as const,
  },
  {
    id: "act-3",
    category: "Pelatihan",
    title: "Uji Kompetensi Sertifikasi BNSP Angkatan Ke-7",
    excerpt:
      "Peserta angkatan ke-7 berhasil mengikuti uji kompetensi resmi dari Badan Nasional Sertifikasi Profesi dan meraih sertifikat profesi.",
    date: "28 Oktober 2026",
    readTime: "5 menit",
    image: "/activities/certification.jpg",
    variant: "default" as const,
  },
] as const;

export const NAV_LINKS = [
  { href: "#program", label: "Bidang Kerja" },
  { href: "#biaya", label: "Biaya" },
  { href: "#kegiatan", label: "Kegiatan" },
  { href: "#persyaratan", label: "Persyaratan" },
  { href: "#kontak", label: "Kontak" },
] as const;
