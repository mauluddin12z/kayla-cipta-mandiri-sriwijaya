'use server'

/**
 * Server Action: submitRegistration
 *
 * Mengirim data formulir pendaftaran ke Google Apps Script Web App,
 * yang kemudian menyimpannya ke Google Sheets.
 *
 * Setup:
 *  1. Buat Google Apps Script baru di https://script.google.com
 *  2. Paste kode Apps Script dari APPS_SCRIPT_CODE.md
 *  3. Deploy sebagai Web App (Execute as: Me, Access: Anyone)
 *  4. Salin URL deployment ke .env.local sebagai GOOGLE_SCRIPT_URL
 */

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitRegistration(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL

  if (!scriptUrl) {
    console.error('GOOGLE_SCRIPT_URL is not set in environment variables.')
    return {
      status: 'error',
      message:
        'Konfigurasi server belum lengkap. Silakan hubungi kami via WhatsApp.',
    }
  }

  const payload = {
    nama: (formData.get('nama') as string)?.trim(),
    whatsapp: (formData.get('whatsapp') as string)?.trim(),
    email: (formData.get('email') as string)?.trim() || '-',
    jenisKelamin: formData.get('jenisKelamin') as string,
    usia: (formData.get('usia') as string)?.trim(),
    kota: (formData.get('kota') as string)?.trim(),
    pendidikan: formData.get('pendidikan') as string,
    pesan: (formData.get('pesan') as string)?.trim() || '-',
    timestamp: new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
    }),
  }

  // Basic server-side validation
  if (!payload.nama || !payload.whatsapp || !payload.usia || !payload.kota) {
    return { status: 'error', message: 'Mohon lengkapi semua kolom wajib.' }
  }

  try {
    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    // Google Apps Script selalu mengembalikan HTTP 200 bahkan saat error di script.
    // Cek JSON status secara eksplisit:
    const result = await res.json().catch(() => null)
    if (result && result.status === 'error') {
      throw new Error(result.message || 'Error dari Google Apps Script')
    }

    return {
      status: 'success',
      message:
        'Pendaftaran berhasil dikirim! Kami akan menghubungi Anda dalam 1×24 jam.',
    }
  } catch (err) {
    console.error('Failed to submit to Google Sheets:', err)
    return {
      status: 'error',
      message:
        'Gagal mengirim data. Silakan coba lagi atau hubungi kami via WhatsApp.',
    }
  }
}

