# Black Box Test - Adityyy Store

## Tujuan
Mengidentifikasi validasi input dan fungsi utama dari sudut pandang pengguna.

| No | Fitur          | Input                     | Expected Output                   | Status |
|----|----------------|---------------------------|-----------------------------------|--------|
| 1  | Register       | Email kosong              | Muncul pesan kesalahan            | ✅     |
| 2  | Register       | Password tidak cocok      | Muncul alert password tidak sama  | ✅     |
| 3  | Login          | Email tidak terdaftar     | Muncul pesan login gagal          | ✅     |
| 4  | Form ID        | ID Kosong                 | Tidak bisa lanjut ke pembayaran   | ✅     |