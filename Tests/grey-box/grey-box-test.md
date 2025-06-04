# Grey Box Test - Adityyy Store

## Fokus:

- Tambah dan manipulasi User ID / Player ID
- Pilih dan ubah metode pembayaran
- Validasi hasil pada manipulasi DOM di halaman cart
- Interaksi terhadap localStorage untuk cart, games, dan paymentCategories

1. Pengujian Interaksi ID Game (Player ID)

| No | Tase Case              | Aksi                                      | Validasi UI                                                    | Validasi Logika                                           |
| -- | ---------------------- | ----------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------- |
| 1  | Input User ID kosong   | Klik tombol "Tambah" tanpa isi `#user_id` | Muncul alert SweetAlert "Silakan isi User ID terlebih dahulu!" | Tidak terjadi perubahan pada `localStorage.cart.playerId` |
| 2  | Input < 9 digit        | Isi `#user_id` = `123456` → klik "Tambah" | Alert: "User ID minimal 9 digit!"                              | Tidak tambah ke array `playerId`                          |
| 3  | Input > 10 digit       | Isi `#user_id` = `123456789012`           | Alert: "User ID maksimal 10 digit!"                            | Tidak tambah ke array `playerId`                          |
| 4  | Input valid, belum ada | Isi `#user_id` = `123456789`              | Alert konfirmasi → OK → Muncul di elemen `#listPlayer`         | `localStorage.cart.playerId` bertambah                    |
| 5  | Input duplikat         | Masukkan lagi ID yang sama                | Alert: "User ID sudah ditambahkan sebelumnya!"                 | Tidak ada duplikasi pada `cart.playerId`                  |

2. Pengujian Interaksi Metode Pembayaran
   
| No |  Tase Case                    | Aksi                                      | Validasi UI                                               | Validasi Logika                                              |
| -- | ----------------------------- | ----------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| 6  | Klik metode Gopay             | Panggil `updateMetode(2)`                 | `detail-pembayaran` menampilkan "Gopay" dan biaya Rp2.500 | `localStorage.cart.payment = 'Gopay'`, `paymentHarga = 2500` |
| 7  | Klik metode QRIS              | Panggil `updateMetode(1)`                 | Teks berubah ke "Qris" dan harga sesuai                   | Properti `payment` dan `paymentHarga` pada `cart` terupdate  |
| 8  | Tidak pilih metode pembayaran | Klik "Beli Sekarang" tanpa memilih metode | Alert: "Mohon memilih metode pembayaran terlebih dahulu!" | Fungsi `generateInvoice()` tidak lanjut                      |

3. Pengujian Validasi DOM Manipulation
   
| No | Area UI                                      | Pemeriksaan                                                                           |
| -- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| 9  | `#listPlayer`                                | Setelah tambah playerId, div dengan userId muncul (`<div class="btn btn-success"...`) |
| 10 | `#detail-pembayaran`                         | Setelah update jumlah diamond, total pembayaran dan metode tampil dengan benar        |
| 11 | `#banner-detail-img` dan `#game-detail-desc` | Setelah ambil data `cart.gameId`, banner dan deskripsi game ditampilkan               |
| 12 | `#user-status`                               | Menampilkan nama user dari `loginUsers` atau tombol login/daftar jika kosong          |

4. Validasi Akhir Saat Generate Invoice
    
| No |  Tase Case                  | Validasi                                                              |
| -- | --------------------------- | --------------------------------------------------------------------- |
| 13 | Tidak isi email             | Klik "Beli Sekarang" → alert muncul                                   |
| 14 | Ada playerId tapi jmlDm = 0 | Alert muncul: "User X belum memasukkan jumlah diamond!"               |
| 15 | Semua valid                 | Modal invoice tampil dengan email, total harga, metode, dan jumlah ID |
| 16 | Klik "Bayar Sekarang"       | `localStorage.cart` dihapus, redirect ke index.html                   |
  
