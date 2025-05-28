# White-Box Testing
### Skenario Uji White Box

• Desk Checking

• Code Walkthrough

• Formal Inspection

• Control Flow Testing

• Data Flow Testing

• Basic Path Testing

• Loop Testing

#### Desk Checking

• Baca kode per baris untuk pastikan logika benar dan semua jalur masuk akal.

• Contoh temuan: login tidak valid langsung diarahkan kembali ke halaman login.

#### Code Walkthrough

• Fungsi createAdminUser()

1. Membuat akun admin default jika belum ada.

2. Aman digunakan, meskipun bisa dipertimbangkan untuk menghindari hardcode password.

• Fungsi login()

1. Mencari user yang cocok berdasarkan email dan password.

2. Menghapus data login sebelumnya dan menyimpan user yang berhasil login.

• Catatan:

° Tidak ada validasi format email (misalnya dengan regex).

° Email dan password dicek dengan === tanpa sanitasi input.

• Fungsi register()

1. Memeriksa email sudah terdaftar.

2. Memvalidasi kesesuaian password dan konfirmasi.

3. Jika berhasil, menambahkan user baru.

• Catatan:

° Nama dan username diisi sama dengan email.

° Validasi kekuatan password (seperti panjang minimal) tidak ada.

#### Formal Inspection
#### Control Flow Testing
#### Data Flow Testing
#### Basic Path Testing
#### Loop Testing
