# White Box Test - Adityyy Store

## Tujuan
Cek struktur fungsi register() dan login() di auth.js

Di kedua file (register.html dan login.html), terdapat pemanggilan fungsi:

register() saat submit form register

login() saat submit form login


Artinya, fungsi register() dan login() berada di file auth.js
Untuk white box testing, Anda perlu menganalisis isi dari dua fungsi ini:

Apakah fungsi melakukan validasi input?

Apakah ada pengondisian dan pengulangan yang signifikan?

Apakah ada error handling?

### Fungsi `register()` di auth.js
Fungsi untuk registrasi pengguna baru.
•Mengambil input email, password, dan konfirmasi password.

•Menampilkan loading popup dengan SweetAlert.

•Mengecek apakah email sudah terdaftar:

•Jika sudah, tampilkan pesan error dan arahkan kembali ke register.html.

•Jika belum terdaftar:
Periksa apakah password dan konfirmasi cocok.

•Jika tidak cocok, tampilkan pesan error.

•Jika cocok, simpan data pengguna baru ke localStorage, dan tampilkan pesan sukses.

### Fungsi `login()` di auth.js
Fungsi untuk memproses login pengguna.
• Mengambil daftar user dari localStorage.

• Memeriksa apakah input email dan password cocok dengan salah satu pengguna.

•Jika cocok:
Simpan data pengguna yang login ke loginUsers di localStorage.
Tampilkan pesan sukses menggunakan SweetAlert dan arahkan ke index.html.

•Jika tidak cocok:
Tampilkan pesan error dan arahkan kembali ke login.html.


### Flowchart (Registrasi)
[Start]
   ↓
[Input Email, Password, Konfirmasi Password]
   ↓
[Password == Konfirmasi?] ---> Tidak ---> [Tampilkan Error: Password tidak cocok] ---> [End]
   ↓ Ya
[Email sudah ada di localStorage?] ---> Ya ---> [Tampilkan Error: Email sudah terdaftar] ---> [End]
   ↓ Tidak
[Simpan Email + Password ke localStorage]
   ↓
[Tampilkan Pesan Sukses]
   ↓
[Redirect ke Login]
   ↓
[End]
### Flowchart (Login)
[Start]
   ↓
[Input Email & Password]
   ↓
[Email ada di localStorage?] ---> Tidak ---> [Tampilkan Error: Email tidak ditemukan] ---> [End]
   ↓ Ya
[Password cocok?] ---> Tidak ---> [Tampilkan Error: Password salah] ---> [End]
   ↓ Ya
[Tampilkan Pesan Login Sukses]
   ↓
[Redirect ke dashboard.html]
   ↓
[End]

### Coverage
#### Test Case
[Tabel Uji Test Case](laporan-test/Laporan_Bukti_Pengujian_authjs.pdf)
