"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitRegistration, type FormState } from "@/lib/actions";
import { SITE } from "@/lib/constants";
import Link from "next/link";
import { CheckmarkIcon } from "@/components/icons";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Submit button – reads pending state from parent <form>
// ---------------------------------------------------------------------------
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full btn inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold text-base px-8 py-4 rounded-full shadow-md transition-all"
    >
      {pending ? "Mengirim..." : "Kirim Pendaftaran"}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Reusable field wrapper
// ---------------------------------------------------------------------------
function Field({
  label,
  required,
  children,
}: Readonly<{
  label: string;
  required?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-bold text-brand-navy">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-[15px] font-medium text-brand-navy placeholder:text-brand-muted/60 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition";

const selectCls =
  "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-[15px] font-medium text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition appearance-none";

// ---------------------------------------------------------------------------
// Main form component
// ---------------------------------------------------------------------------
const initialState: FormState = { status: "idle", message: "" };

export default function DaftarPage() {
  const [state, formAction] = useActionState(submitRegistration, initialState);

  return (
    <div className="min-h-screen bg-brand-subtle">
      {/* Top bar */}
      <div className="bg-brand-blue px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-extrabold text-lg no-underline hover:text-brand-yellow transition-colors"
          >
            <div
              className="w-10 h-10 bg-brand-yellow aspect-square p-2 rounded-xl flex items-center justify-center"
              aria-hidden="true"
            >
              <Image src="/logo.png" alt="LPK Logo" width={100} height={100} />
            </div>
            <span className="hidden sm:inline">{SITE.fullName}</span>
            <span className="sm:hidden">{SITE.name}</span>
          </Link>
          <a
            href={SITE.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-brand-yellow hover:text-white transition-colors"
          >
            Butuh bantuan? WhatsApp kami
          </a>
        </div>
      </div>

      <main className="px-6 py-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-extrabold text-brand-blue tracking-wider uppercase">
              Formulir Pendaftaran
            </span>
            <h1 className="m-0 text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy leading-tight">
              Daftar Pelatihan Kerja ke Jepang &amp; Korea
            </h1>
            <p className="m-0 text-base text-brand-muted font-medium leading-relaxed mt-1">
              Isi formulir di bawah ini dengan lengkap dan benar. Kami akan
              menghubungi Anda dalam 1&times;24 jam setelah pendaftaran
              diterima.
            </p>
          </div>

          {/* Success state */}
          {state.status === "success" ? (
            <div className="bg-white rounded-[24px] p-10 flex flex-col items-center gap-5 text-center shadow-sm border border-brand-border">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckmarkIcon
                  className="w-8 h-8 text-green-600"
                  strokeWidth={3}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="m-0 text-2xl font-extrabold text-brand-navy">
                  Pendaftaran Terkirim!
                </h2>
                <p className="m-0 text-brand-muted font-medium leading-relaxed max-w-md">
                  {state.message}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-2">
                <Link
                  href="/"
                  className="btn inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm px-6 py-3 rounded-full shadow-sm"
                >
                  Kembali ke Beranda
                </Link>
                <a
                  href={SITE.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center justify-center bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy/5 font-bold text-sm px-6 py-3 rounded-full"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form
              action={formAction}
              className="bg-white rounded-[24px] p-8 sm:p-10 flex flex-col gap-6 shadow-sm border border-brand-border"
            >
              {/* Error banner */}
              {state.status === "error" && (
                <div
                  role="alert"
                  className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm font-semibold text-red-700"
                >
                  {state.message}
                </div>
              )}

              {/* Section: Data Diri */}
              <div className="flex flex-col gap-5">
                <h2 className="m-0 text-lg font-extrabold text-brand-navy border-b border-brand-border pb-3">
                  Data Diri
                </h2>

                <Field label="Nama Lengkap" required>
                  <input
                    type="text"
                    name="nama"
                    placeholder="Sesuai KTP"
                    required
                    className={inputCls}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nomor WhatsApp" required>
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="08xxxxxxxxxx"
                      required
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      placeholder="email@contoh.com (opsional)"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Jenis Kelamin" required>
                    <select name="jenisKelamin" required className={selectCls}>
                      <option value="">— Pilih —</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </Field>
                  <Field label="Usia (tahun)" required>
                    <input
                      type="number"
                      name="usia"
                      placeholder="18 – 38"
                      min={18}
                      max={38}
                      required
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="Kota / Kabupaten Asal" required>
                  <input
                    type="text"
                    name="kota"
                    placeholder="Contoh: Palembang"
                    required
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Section: Latar Belakang */}
              <div className="flex flex-col gap-5">
                <h2 className="m-0 text-lg font-extrabold text-brand-navy border-b border-brand-border pb-3">
                  Pendidikan &amp; Lainnya
                </h2>

                <Field label="Pendidikan Terakhir" required>
                  <select name="pendidikan" required className={selectCls}>
                    <option value="">— Pilih —</option>
                    <option value="SMA/SMK">SMA / SMK</option>
                    <option value="D1/D2/D3">D1 / D2 / D3</option>
                    <option value="S1">S1</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </Field>

                <Field label="Pesan / Pertanyaan Tambahan">
                  <textarea
                    name="pesan"
                    rows={4}
                    placeholder="Ceritakan motivasi Anda atau tulis pertanyaan yang ingin disampaikan (opsional)"
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-2">
                <SubmitButton />
                <a
                  href={SITE.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-border hover:border-brand-navy text-brand-muted hover:text-brand-navy font-bold text-sm px-8 py-3.5 rounded-full transition-all"
                >
                  Atau daftar via WhatsApp
                </a>
                <p className="text-center text-xs text-brand-muted/70 font-medium">
                  Data Anda aman dan tidak akan dibagikan kepada pihak ketiga.
                </p>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
