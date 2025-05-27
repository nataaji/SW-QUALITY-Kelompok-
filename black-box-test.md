# Black Box Test - Adityyy Store

## Tujuan
Mengidentifikasi validasi input dan fungsi utama dari sudut pandang pengguna.

| No | Halaman       | Test Case                                  | Expected Output                                  | Status |
| -- | ------------- | ------------------------------------------ | ------------------------------------------------ | ------ |
| 1  | index.html    | Klik tombol “Explore” di bagian hero       | Scroll ke bagian daftar produk/game              | ✅      |
| 2  | index.html    | Ketik “Valorant” di kolom pencarian        | Fitur pencarian aktif & produk terkait muncul    | ❌      |
| 3  | index.html    | Klik tombol “Buy Now”                      | Redirect atau aksi pembelian terjadi             | ❌      |
| 4  | login.html    | Isi email & password valid                 | Login berhasil, diarahkan ke halaman utama       | ✅      |
| 5  | login.html    | Login tanpa mengisi form                   | Validasi input muncul (required field)           | ✅      |
| 6  | login.html    | Email/password salah                       | Muncul pesan login gagal / kombinasi tidak cocok | ❌      |
| 7  | login.html    | Klik link “Belum punya akun?”              | Navigasi ke halaman register.html                | ✅      |
| 8  | register.html | Isi semua field dengan data valid          | Registrasi berhasil, muncul alert sukses         | ✅      |
| 9  | register.html | Password & konfirmasi tidak cocok          | Muncul alert “Password tidak cocok”              | ✅      |
| 10 | register.html | Registrasi ulang dengan email sama         | Muncul peringatan “email sudah terdaftar”        | ❌      |
| 11 | register.html | Klik link “Sudah punya akun?”              | Navigasi ke halaman login.html                   | ✅      |
| 12 | cart.html     | Isi form lengkap lalu klik “Beli Sekarang” | Pembelian berhasil, muncul alert sukses          | ✅      |
| 13 | cart.html     | Klik beli tanpa isi user ID/email          | Validasi HTML5 mencegah proses                   | ✅      |
| 14 | cart.html     | Klik beli tanpa memilih produk             | Peringatan: produk harus dipilih                 | ❌      |
| 15 | cart.html     | Pilih metode pembayaran                    | Metode aktif ditandai, harga diperbarui otomatis | ❌      |
| 16 | cart.html     | Masukkan email tidak valid                 | Form ditolak, muncul validasi format email       | ✅      |
