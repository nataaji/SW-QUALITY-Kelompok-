# WHITE-BOX TESTING
## Skenario Uji White Box (auth.js)

- Desk Checking

- Code Walkthrough

- Formal Inspection

- Control Flow Testing

- Data Flow Testing

- Basic Path Testing

- Loop Testing

### Desk Checking

- Baca kode per baris untuk pastikan logika benar dan semua jalur masuk akal.

- Contoh temuan: login tidak valid langsung diarahkan kembali ke halaman login.

### Code Walkthrough

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

### Formal Inspection

Input/output dan format validasi:

- Input: email, password, konfirmasi password.

- Output: SweetAlert untuk hasil sukses/gagal.

Catatan:

- Belum ada validasi karakter email atau panjang password.

- Tidak ada feedback langsung di form (semuanya melalui alert).

Jangan Lupa Masukan Gambar

### Control Flow Testing

| No | Fungsi    | Kondisi                                                      | Cabang Logika yang Diuji                         | Hasil |
|----|-----------|--------------------------------------------------------------|--------------------------------------------------|--------|
| 1  | login     | Email dan password cocok                                     | user ditemukan → alert sukses → redirect index  | Sukses |
| 2  | login     | Email cocok, password salah                                  | user tidak ditemukan → alert gagal → login.html | Sukses |
| 3  | login     | Email tidak ditemukan                                        | user tidak ditemukan → alert gagal → login.html | Sukses |
| 4  | register  | Email sudah terdaftar                                        | tampilkan alert error email                     | Sukses |
| 5  | register  | Password dan konfirmasi tidak cocok                          | tampilkan alert error password mismatch         | Sukses |
| 6  | register  | Email baru, password cocok                                   | simpan user → alert sukses → redirect login     | Sukses |

### Data Flow Testing

| No | Variabel             | Lokasi Deklarasi      | Lokasi Penggunaan          | Status    | Catatan                                  |
|----|----------------------|------------------------|-----------------------------|-----------|------------------------------------------|
| 1  | emailInput           | login(), register()    | Kondisi pencocokan email    | Digunakan | Input dari user                         |
| 2  | passwordInput        | login(), register()    | Pengecekan dan penyimpanan  | Digunakan | Tidak dienkripsi                        |
| 3  | passwordKonfirmasi   | register()             | Validasi kesamaan password  | Digunakan | Validasi eksplisit                      |
| 4  | users                | Semua fungsi           | Dicari, dimodifikasi        | Digunakan | Disimpan di localStorage                |
| 5  | userFound            | login()                | Pengecekan hasil pencarian  | Digunakan | Nilai boolean                          |
| 6  | emailUserExists      | register()             | Validasi eksistensi email   | Digunakan | Dihasilkan dari some()                  |

- Flowchart
![Flowchart](assets/photos/Keranjang.jpg)

  
### Basic Path Testing
### Loop Testing
