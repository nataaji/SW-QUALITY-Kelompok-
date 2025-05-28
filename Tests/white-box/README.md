# White-Box Testing
### Skenario Uji White Box

- Desk Checking

- Code Walkthrough

- Formal Inspection

- Control Flow Testing

- Data Flow Testing

- Basic Path Testing

- Loop Testing

#### Desk Checking

- Baca kode per baris untuk pastikan logika benar dan semua jalur masuk akal.

- Contoh temuan: login tidak valid langsung diarahkan kembali ke halaman login.

#### Code Walkthrough

Fungsi createAdminUser()

 - Membuat akun admin default jika belum ada.

- Aman digunakan, meskipun bisa dipertimbangkan untuk menghindari hardcode password.

Fungsi login()

- Mencari user yang cocok berdasarkan email dan password.

- Menghapus data login sebelumnya dan menyimpan user yang berhasil login.

 Catatan:

- Tidak ada validasi format email (misalnya dengan regex).

- Email dan password dicek dengan === tanpa sanitasi input.

Fungsi register()

- Memeriksa email sudah terdaftar.

- Memvalidasi kesesuaian password dan konfirmasi.

- Jika berhasil, menambahkan user baru.

Catatan:

- Nama dan username diisi sama dengan email.

- Validasi kekuatan password (seperti panjang minimal) tidak ada.

#### Formal Inspection

Input/output dan format validasi:

- Input: email, password, konfirmasi password.

- Output: SweetAlert untuk hasil sukses/gagal.

Catatan:

- Belum ada validasi karakter email atau panjang password.

- Tidak ada feedback langsung di form (semuanya melalui alert).

Jangan Lupa Masukan Gambar

#### Control Flow Testing
#### Data Flow Testing
#### Basic Path Testing
#### Loop Testing
