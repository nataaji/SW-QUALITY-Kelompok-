# Black Box Test - Adityyy Store

Metode: Equivalence Partitioning dan Boundary Value Analysis

# LOGIN TEST CASE

| No | Test Case                    | Input Email                                 | Input Password | Expected Output             | Model           |
| -- | ---------------------------- | ------------------------------------------- | -------------- | --------------------------- | --------------- |
| 1  | Valid login                  | [user@example.com](mailto:user@example.com) | password123    | Login berhasil              | Equivalence     |
| 2  | Kosongkan email              | *(kosong)*                                  | password123    | Error: Email wajib diisi    | Boundary/Robust |
| 3  | Kosongkan password           | [user@example.com](mailto:user@example.com) | *(kosong)*     | Error: Password wajib diisi | Boundary/Robust |
| 4  | Email tidak valid (tanpa @)  | userexample.com                             | password123    | Error: Format email salah   | Equivalence     |
| 5  | Email terlalu panjang (>255) | 256 char email                              | password123    | Error / dipotong / validasi | BVA             |
| 6  | Password salah               | [user@example.com](mailto:user@example.com) | wrongpass      | Error: Login gagal          | Equivalence     |
| 7  | SQL Injection attempt        | ' OR '1'='1                                 | anything       | Error / Tidak login         | Robustness      |

# REGISTER TEST CASE
| No | Test Case                    | Email                                 | Password   | Konfirmasi | Expected Output                  | Model       |
| -- | ---------------------------- | ------------------------------------- | ---------- | ---------- | -------------------------------- | ----------- |
| 1  | Input valid semua            | [user@test.com](mailto:user@test.com) | Test123!   | Test123!   | Register sukses                  | Equivalence |
| 2  | Email kosong                 | *(kosong)*                            | Test123!   | Test123!   | Error: Email wajib diisi         | Robustness  |
| 3  | Password kosong              | [user@test.com](mailto:user@test.com) | *(kosong)* | *(kosong)* | Error: Password wajib            | Robustness  |
| 4  | Konfirmasi tidak cocok       | [user@test.com](mailto:user@test.com) | Pass123    | Pass321    | Error: Password tidak cocok      | Equivalence |
| 5  | Format email tidak valid     | user.com                              | Pass123    | Pass123    | Error: Format salah              | Equivalence |
| 6  | Password pendek (<8)         | [user@test.com](mailto:user@test.com) | 123        | 123        | Error: Password terlalu pendek   | BVA         |
| 7  | Karakter spesial di password | [user@test.com](mailto:user@test.com) | <script>   | <script>   | Validasi ditolak (harus dicegah) | Robustness  |

# CART PAGE ( USER ID & PEMBAYARAN) TEST CASE
| No | Test Case                                 | User ID     | Payment Method | Expected Output                                         | Model          |
| -- | ----------------------------------------- | ----------- | -------------- | ------------------------------------------------------- | -------------- |
| 1  | Tambah 1 User ID valid                    | 123456789   | QRIS           | Berhasil menambahkan 1 user                             | Equivalence    |
| 2  | User ID kosong                            | (kosong)    | QRIS           | Error: Silakan isi User ID terlebih dahulu!             | Robustness     |
| 3  | User ID < 9 digit                         | 12345678    | QRIS           | Error: User ID minimal 9 digit!                         | BVA            |
| 4  | User ID > 10 digit                        | 12345678901 | QRIS           | Error: User ID maksimal 10 digit!                       | BVA            |
| 5  | Duplikat User ID                          | 123456789   | QRIS           | Error: User ID sudah ditambahkan sebelumnya!            | Decision Table |
| 6  | Tambah lebih dari 5 User ID               | >5 data     | QRIS           | Error: Maksimal hanya 5 User ID                         | Robustness     |
| 7  | User ID valid, tapi jumlah diamond kosong | 123456789   | QRIS           | Error: Belum memasukkan jumlah item                     | Equivalence    |
| 8  | Tidak memilih metode pembayaran           | 123456789   | (kosong)       | Error: Mohon memilih metode pembayaran terlebih dahulu! | Robustness     |
| 9  | Generate invoice tanpa email              | 123456789   | QRIS           | Error: Mohon masukkan email pengiriman invoice!         | Robustness     |
| 10 | Hapus User ID yang tidak ada              | 000000000   | QRIS           | Error: User ID tidak ditemukan!                         | Negative Path  |
