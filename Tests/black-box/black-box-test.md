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
