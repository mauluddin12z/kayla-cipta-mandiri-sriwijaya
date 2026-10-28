/**
 * ============================================================
 * Google Apps Script — LPK Pendaftaran ke Google Sheets
 * ============================================================
 *
 * CARA SETUP:
 * 1. Buka https://script.google.com → New Project
 * 2. Beri nama project, misal: "LPK Form Pendaftaran"
 * 3. Hapus semua kode default, paste seluruh kode di bawah ini
 * 4. Ganti SPREADSHEET_ID dengan ID Google Sheet Anda
 *    (ID ada di URL: docs.google.com/spreadsheets/d/ID_INI/edit)
 * 5. Klik menu Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Klik Deploy → izinkan akses → salin URL deployment
 * 7. Paste URL ke .env.local sebagai GOOGLE_SCRIPT_URL
 * ============================================================
 */

const SPREADSHEET_ID = '1bP7qljLMdg-4pr8uO1xoNFHRCor1ay1xK9GoT5_1__E';
const SHEET_NAME = 'Pendaftaran';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Jika tab 'Pendaftaran' belum ada
    if (!sheet) {
      const firstSheet = ss.getSheets()[0];
      // Jika tab pertama masih kosong, ganti namanya jadi 'Pendaftaran'
      if (firstSheet && firstSheet.getLastRow() === 0) {
        firstSheet.setName(SHEET_NAME);
        sheet = firstSheet;
      } else {
        sheet = ss.insertSheet(SHEET_NAME);
      }

      // Buat Header row
      sheet.appendRow([
        'Timestamp',
        'Nama Lengkap',
        'WhatsApp',
        'Email',
        'Jenis Kelamin',
        'Usia',
        'Kota/Kabupaten',
        'Pendidikan',
        'Bidang Diminati',
        'Pesan',
      ]);
      // Style header
      const headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#2b70e4');
      headerRange.setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Append data row
    sheet.appendRow([
      data.timestamp,
      data.nama,
      data.whatsapp,
      data.email,
      data.jenisKelamin,
      data.usia,
      data.kota,
      data.pendidikan,
      data.bidang,
      data.pesan,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Untuk testing via GET (opsional, bisa dihapus di production)
function doGet() {
  return ContentService
    .createTextOutput('LPK Form endpoint aktif.')
    .setMimeType(ContentService.MimeType.TEXT);
}

