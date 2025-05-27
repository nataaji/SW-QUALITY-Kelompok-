# White Box Test - Adityyy Store

## Tujuan
Cek struktur fungsi register() dan login() di auth.js

Di kedua file (register.html dan login.html), terdapat pemanggilan fungsi:

register() saat submit form register

login() saat submit form login


Artinya, fungsi register() dan login() berada di file auth.js (belum Anda unggah).
Untuk white box testing, Anda perlu menganalisis isi dari dua fungsi ini:

Apakah fungsi melakukan validasi input?

Apakah ada pengondisian dan pengulangan yang signifikan?

Apakah ada error handling?

### Fungsi `register()` di auth.js
- Validasi: email valid, password match
- Decision point: if password !== confirmPassword

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
- [x] All condition branches tested
- [x] Loop pada cart traversal tested
