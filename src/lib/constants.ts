/** Centralised site-wide constants for LPK Kayla Cipta Mandiri Sriwijaya */

export const SITE = {
  name: "Kayla Cipta Mandiri",
  fullName: "LPK-LN Kayla Cipta Mandiri Sriwijaya",
  tagline: "LPK-LN Sriwijaya · Palembang",
  address:
    "Jalan Boulevard Raya Kav. 1, Perumahan Citraland, Kelurahan Keramasan, Kecamatan Kertapati, Kota Palembang, Provinsi Sumatera Selatan, Kode Pos 30259",
  phone: "085121289388",
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
    slug: "workshop-pengembangan-model-pembelajaran-industri",
    category: "Kegiatan",
    title: "Workshop oleh Dr. (Cand) Hadi Sutrisno, S.E., M.M., CHA",
    excerpt:
      "Workshop mengenai 'Pengembangan Model Pembelajaran Berstandar Dunia Industri' untuk para instruktur LPK dengan pembicara Dr. (Cand) Hadi Sutrisno, S.E., M.M., CHA.",
    date: "28 Oktober 2026",
    readTime: "3 menit",
    image: "/activities/workshop.jpg",
    variant: "featured" as const,
content: [ "LPK-LN Kayla Cipta Mandiri Sriwijaya menyelenggarakan workshop intensif bertajuk 'Pengembangan Model Pembelajaran Berstandar Dunia Industri' yang diikuti oleh seluruh jajaran instruktur dan pengajar lembaga. Kegiatan ini bertujuan untuk meningkatkan kualitas pembelajaran serta menyelaraskan pelaksanaan pelatihan dengan kebutuhan industri dan standar kompetensi internasional.", "Workshop ini menghadirkan Dr. (Cand) Hadi Sutrisno, S.E., M.M., CHA, seorang praktisi perhotelan dan pakar pengembangan sumber daya manusia, sebagai narasumber utama. Dalam pemaparannya, beliau menjelaskan materi dan kurikulum pelatihan berbasis standar ASEAN serta standar internasional yang relevan dengan kebutuhan industri, khususnya di bidang perhotelan dan hospitality. Pembahasan mencakup penyelarasan kompetensi, standar pelayanan, serta penerapan pembelajaran vokasi yang berorientasi pada kebutuhan dunia kerja global.", "Materi workshop juga menekankan pentingnya penguatan kompetensi praktis hospitality, penerapan standar kebersihan dan sanitasi, komunikasi lintas budaya, serta pembentukan etos kerja profesional. Para instruktur didorong untuk memahami dan mengimplementasikan standar kompetensi tersebut ke dalam proses pembelajaran agar peserta pelatihan memiliki keterampilan, sikap, dan profesionalisme yang sesuai dengan tuntutan industri.", "Selain penyampaian materi, kegiatan ini menjadi wadah diskusi internal bagi jajaran instruktur dan pengajar LPK-LN Kayla Cipta Mandiri Sriwijaya untuk mengevaluasi pelaksanaan pelatihan, membahas pengembangan kurikulum, serta mengidentifikasi kebutuhan dan tantangan lembaga dalam meningkatkan mutu pendidikan vokasi. Melalui diskusi ini, diharapkan tercipta kesamaan persepsi dan komitmen bersama dalam mengembangkan sistem pembelajaran yang lebih efektif, terarah, dan berstandar internasional.", "Melalui workshop ini, LPK-LN Kayla Cipta Mandiri Sriwijaya berkomitmen untuk terus meningkatkan kualitas instruktur, memperkuat penerapan kurikulum berstandar ASEAN dan internasional, serta mengembangkan program pelatihan yang sesuai dengan kebutuhan industri. Dengan demikian, lembaga diharapkan mampu mencetak calon tenaga kerja yang kompeten, disiplin, adaptif, dan siap bersaing di pasar kerja global." ]
  },
  {
    id: "act-2",
    slug: "kunjungan-kepala-dinas-pendidikan-provinsi-sumsel",
    category: "Kegiatan",
    title: "Kunjungan oleh Kepala Dinas Pendidikan Provinsi Sumatera Selatan Ibu Hj. Mondyaboni, S.E., S.Kom., M.Si., M.Pd",
    excerpt:
      "Kepala Dinas Pendidikan Provinsi Sumatera Selatan Ibu Hj. Mondyaboni, S.E., S.Kom., M.Si., M.Pd mengunjungi LPK-LN Kayla Cipta Mandiri Sriwijaya untuk memberikan arahan kepada para instruktur LPK.",
    date: "28 Oktober 2026",
    readTime: "4 menit",
    image: "/activities/kunjungan.jpeg",
    variant: "default" as const,
    content: [
      "LPK-LN Kayla Cipta Mandiri Sriwijaya mendapat kehormatan atas kunjungan kerja resmi dari Kepala Dinas Pendidikan Provinsi Sumatera Selatan, Ibu Hj. Mondyaboni, S.E., S.Kom., M.Si., M.Pd.",
      "Kunjungan ini bertujuan untuk meninjau secara langsung sarana prasarana pelatihan, kelayakan fasilitas laboratorium praktek (Front Office, Housekeeping, Restaurant, dan Barista), serta kesiapan sistem pembelajaran lembaga dalam menyalurkan tenaga kerja ke luar negeri.",
      "Dalam arahannya, Ibu Hj. Mondyaboni mengapresiasi komitmen LPK-LN Kayla Cipta Mandiri Sriwijaya dalam mendukung program pemerintah daerah guna mengurangi angka pengangguran terbuka melalui pendidikan vokasi terarah dan bersertifikasi resmi.",
      "Beliau juga memberikan dorongan motivasi bagi para instruktur dan staf agar terus menjaga mutu pelatihan serta memperluas jejaring kemitraan, sehingga putra-putri Sumatera Selatan memiliki daya saing unggul di pasar tenaga kerja internasional.",
    ],
  },
  {
    id: "act-3",
    slug: "mou-lpk-kayla-cipta-mandiri-dengan-hotel-batiqa",
    category: "MoU",
    title: "MoU antara LPK-LN Kayla Cipta Mandiri Sriwijaya dengan Hotel Batiqa",
    excerpt:
      "Penandatanganan MoU antara LPK-LN Kayla Cipta Mandiri Sriwijaya dengan Hotel Batiqa untuk menjalin kerjasama dalam bidang pendidikan dan pelatihan perhotelan.",
    date: "28 Oktober 2026",
    readTime: "5 menit",
    image: "/activities/mou.jpeg",
    variant: "default" as const,
    content: [
      "Sebagai wujud nyata komitmen penyaluran lulusan dan peningkatan mutu praktek kerja lapangan, LPK-LN Kayla Cipta Mandiri Sriwijaya resmi menandatangani Nota Kesepahaman (MoU) kemitraan strategis dengan manajemen Hotel Batiqa Palembang.",
      "Kerjasama ini mencakup berbagai ruang lingkup krusial, antara lain: penyediaan tempat Praktik Kerja Lapangan (On-the-Job Training) bagi peserta didik, program pengajar tamu (guest lecturer) dari praktisi hotel, hingga peluang rekrutmen kerja langsung bagi lulusan terbaik.",
      "Pihak manajemen Hotel Batiqa menyambut baik kolaborasi ini dan menyatakan kesiapannya untuk berbagi standar operasional industri perhotelan bintang yang sesungguhnya kepada para siswa.",
      "Dengan terjalinnya kemitraan strategis ini, peserta didik LPK-LN Kayla Cipta Mandiri Sriwijaya akan mendapatkan pengalaman praktek langsung di lingkungan kerja profesional sebelum diberangkatkan ke Jepang maupun Korea Selatan.",
    ],
  },
] as const;

export const NAV_LINKS = [
  { href: "/#program", label: "Bidang Kerja" },
  { href: "/#biaya", label: "Biaya" },
  { href: "/#kegiatan", label: "Kegiatan" },
  { href: "/#persyaratan", label: "Persyaratan" },
  { href: "/#kontak", label: "Kontak" },
] as const;
