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
| No | Test Case                        | User ID    | Metode Pembayaran | Expected Output                      | Model              |
| -- | -------------------------------- | ---------- | ----------------- | ------------------------------------ | ------------------ |
| 1  | Semua input valid                | 12345678   | QRIS              | Transaksi berhasil                   | Equivalence        |
| 2  | Kosongkan User ID                | *(kosong)* | QRIS              | Error: User ID wajib diisi           | Robustness         |
| 3  | Format User ID tidak valid       | 1234abcd   | QRIS              | Error: Format salah / tidak diterima | Equivalence        |
| 4  | Input panjang (>50 karakter)     | panjang    | QRIS              | Error atau dipotong otomatis         | BVA                |
| 5  | Pilih metode pembayaran          | 12345678   | GoPay             | Harga berubah sesuai metode          | Decision Table     |
| 6  | Tidak memilih metode pembayaran  | 12345678   | *(kosong)*        | Error: Harus pilih metode            | Robustness         |
| 7  | Klik semua metode berturut-turut | 12345678   | Semua metode      | UI tetap stabil                      | Stress / Endurance |
