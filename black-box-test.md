# Black Box Test - Adityyy Store

## Tujuan
Mengidentifikasi validasi input dan fungsi utama dari sudut pandang pengguna.

| No | Halaman        |  Test Case                           | Expected Output                     | Status |
|----|----------------|--------------------------------------|-------------------------------------|--------|
| 1  | index.html     | Klik tombol “Explore” di bagian hero | Scroll ke bagian daftar produk/game | ✅     |
| 2  | index.html     | Ketik “Valorant” di kolom pencarian 
                        dan tekan tombol cari                | Muncul alert password tidak sama  | ✅     |
| 3  | login.html     | Email tidak terdaftar                | Muncul pesan login gagal          | ✅     |
| 4  | login.html     | ID Kosong                            | Tidak bisa lanjut ke pembayaran   | ✅     |
| 5  | login.html     | ID Kosong                            | Tidak bisa lanjut ke pembayaran   | ✅     |
| 6  | login.html     | ID Kosong                            | Tidak bisa lanjut ke pembayaran   | ✅     |
| 7  | login.html     | ID Kosong                            | Tidak bisa lanjut ke pembayaran   | ✅     |
| 8  | login.html     | ID Kosong                            | Tidak bisa lanjut ke pembayaran   | ✅     |
| 4  | login.html     | ID Kosong                            | Tidak bisa lanjut ke pembayaran   | ✅     |
| No|Halaman	|Pengujian|	Test Case|	Hasil yang Diharapkan|	Hasil Pengujian|	Kesimpulan|
1	index.html	Klik tombol "Explore"	Klik tombol “Explore” di bagian hero	Scroll ke bagian daftar produk/game	Scroll berhasil	Berhasil
2	index.html	Fungsi pencarian game	Ketik “Valorant” di kolom pencarian dan tekan tombol cari	Game yang relevan muncul di daftar	Tidak ada fitur pencarian aktif (input hanya visual)	Gagal
3	index.html	Tombol “Buy Now” di daftar produk	Klik tombol "Buy Now" di salah satu produk	Aksi pembelian atau redirect ke keranjang	Tidak ada aksi (tombol tidak terhubung)	Gagal
4	login.html	Login dengan data valid	Isi email dan password yang sesuai	Login berhasil dan diarahkan	Alert "Login berhasil" muncul	Berhasil
5	login.html	Login tanpa mengisi form	Biarkan kosong, klik tombol login	Validasi wajib isi muncul	Validasi HTML5 muncul	Berhasil
6	login.html	Login dengan kombinasi email/password salah	Email dan password salah/tidak cocok	Peringatan kesalahan login	Tidak ada pengecekan kombinasi login, tetap alert sukses	Gagal
7	login.html	Klik tautan “Belum punya akun?”	Klik link ke halaman register	Pengguna diarahkan ke register.html	Navigasi berhasil	Berhasil
8	register.html	Registrasi dengan data valid	Isi email, password, dan konfirmasi password sama	Registrasi berhasil, muncul alert sukses	Alert sukses muncul	Berhasil
9	register.html	Registrasi dengan password tidak cocok	Isi password dan konfirmasi yang berbeda	Muncul peringatan ketidakcocokan password	Alert kesalahan muncul	Berhasil
10	register.html	Registrasi ulang dengan email yang sama	Masukkan kembali email yang sama	Validasi: email sudah terdaftar	Tidak dicek, tetap muncul alert sukses	Gagal
11	register.html	Klik tautan “Sudah punya akun?”	Klik link kembali ke login	Pengguna diarahkan ke login.html	Navigasi berhasil	Berhasil
12	cart.html	Isi form user ID dan email dengan benar, klik beli	Isi semua input dan klik “Beli Sekarang”	Pembelian berhasil / alert sukses muncul	Alert sukses muncul	Berhasil
13	cart.html	Klik beli tanpa isi form user ID/email	Kosongkan input lalu klik “Beli Sekarang”	Validasi HTML5 mencegah pengiriman	Validasi HTML5 muncul	Berhasil
14	cart.html	Klik beli tanpa memilih produk	Tidak centang satu pun checkbox produk	Peringatan bahwa produk harus dipilih	Tidak ada validasi, proses lanjut tetap terjadi	Gagal
