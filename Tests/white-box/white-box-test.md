# White Box Test - Adityyy Store

## Tujuan
Menguji logika program, percabangan, dan fungsi secara menyeluruh.

### Fungsi `register()` di auth.js
- Validasi: email valid, password match
- Decision point: if password !== confirmPassword

### Diagram Alir (Flowchart)
# Register
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

### Coverage
- [x] All condition branches tested
- [x] Loop pada cart traversal tested
