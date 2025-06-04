# Black Box Test - Adityyy Store

Metode: Equivalence Partitioning dan Boundary Value Analysis

# LOGIN TEST CASE

| No | Test Case                    | Input Email                                 | Input Password | Hasil Output             | Model           |
| -- | ---------------------------- | ------------------------------------------- | -------------- | --------------------------- | --------------- |
| 1  | Valid login                  | [user@example.com](mailto:user@example.com) | password123    | Login berhasil              | Equivalence     |
| 2  | Kosongkan email              | *(kosong)*                                  | password123    | Error: Email wajib diisi    | Boundary Value Analysis  |
| 3  | Kosongkan password           | [user@example.com](mailto:user@example.com) | *(kosong)*     | Error: Password wajib diisi | Boundary Value Analysis  |
| 4  | Email tidak valid (tanpa @)  | userexample.com                             | password123    | Error: Format email salah   | Equivalence     |
| 5  | Email terlalu panjang (>255) | 256 char email                              | password123    | Error / dipotong / validasi | Boundary Value Analysis  |
| 6  | Password salah               | [user@example.com](mailto:user@example.com) | wrongpass      | Error: Login gagal          | Equivalence     |

# REGISTER TEST CASE
| No | Test Case                    | Email                                 | Password   | Konfirmasi | Hasil Output                  | Model       |
| -- | ---------------------------- | ------------------------------------- | ---------- | ---------- | -------------------------------- | ----------- |
| 1  | Input valid semua            | [user@test.com](mailto:user@test.com) | Test123!   | Test123!   | Register sukses                  | Equivalence |
| 2  | Email kosong                 | *(kosong)*                            | Test123!   | Test123!   | Error: Email wajib diisi         | Boundary Value Analysis  |
| 3  | Password kosong              | [user@test.com](mailto:user@test.com) | *(kosong)* | *(kosong)* | Error: Password wajib            | Boundary Value Analysis  |
| 4  | Konfirmasi tidak cocok       | [user@test.com](mailto:user@test.com) | Pass123    | Pass321    | Error: Password tidak cocok      | Equivalence |
| 5  | Format email tidak valid     | user.com                              | Pass123    | Pass123    | Error: Format salah              | Equivalence |

# CART PAGE ( USER ID & PEMBAYARAN) TEST CASE
| No | Test Case                                 | User ID     | Payment Method | Hasil Output                                         | Model          |
| -- | ----------------------------------------- | ----------- | -------------- | ------------------------------------------------------- | -------------- |
| 1  | Tambah 1 User ID valid                    | 123456789   | QRIS           | Berhasil menambahkan 1 user                             | Equivalence    |
| 2  | User ID kosong                            | (kosong)    | QRIS           | Error: Silakan isi User ID terlebih dahulu!             | Boundary Value Analysis     |
| 3  | User ID < 9 digit                         | 12345678    | QRIS           | Error: User ID minimal 9 digit!                         | Boundary Value Analysis     |
| 4  | User ID > 10 digit                        | 12345678901 | QRIS           | Error: User ID maksimal 10 digit!                       | Boundary Value Analysis     |
| 5  | Duplikat User ID                          | 123456789   | QRIS           | Error: User ID sudah ditambahkan sebelumnya!            | Equivalence |
| 6  | Tambah lebih dari 5 User ID               | >5 data     | QRIS           | Error: Maksimal hanya 5 User ID                         | Boundary Value Analysis     |
| 7  | User ID valid, tapi jumlah diamond kosong | 123456789   | QRIS           | Error: Belum memasukkan jumlah diamonds!                     | Equivalence    |
| 8  | Tidak memilih metode pembayaran           | 123456789   | (kosong)       | Error: Mohon memilih metode pembayaran terlebih dahulu! | Boundary Value Analysis     |
| 9  | Generate invoice tanpa email              | 123456789   | QRIS           | Error: Mohon masukkan email pengiriman invoice!         | Boundary Value Analysis    |
