# Adityyy Store - Web Top-Up Game

Website sederhana untuk pembelian top-up game, dibuat sebagai proyek kelompok yang menguji aplikasi menggunakan metode:
- Black Box
- White Box
- Grey Box

## Fitur
- Register & Login
- Halaman utama dengan promosi top-up game
- Form ID pemain & metode pembayaran
- Keranjang pembelian
- Validasi input form
- Responsif dan modern design

## Pengujian

### Black Box Testing
Dilakukan oleh: [Trisna Prawijaya]  
Contoh test case:
- [ ] Input kosong pada form register
- [ ] Email tidak valid pada login
- [ ] Password tidak cocok saat register

### White Box Testing
Dilakukan oleh: [Aji Nata Sobari]  
Cakupan:
- Cek struktur fungsi `register()` dan `login()` di `auth.js`
- Buat flowchart decision tree
- Lakukan coverage path pada validasi input

### Grey Box Testing
Dilakukan oleh: [Haekal Abdullah Ali Akbar Fajar Ramadhan]  
Metode:
- Gabungkan pengujian UI + logika kode
- Cek interaksi ID Game & metode pembayaran (cart.html)
- Validasi hasil DOM manipulation

## Struktur Proyek
```
├── index.html
├── login.html
├── register.html
├── cart.html
├── assets/
│   ├── js/
│   ├── css/
│   ├── photos/
│   └── audios/
└── README.md
```

## 👨‍💻 Developer
- Frontend Developer & GitHub: [Muhamad Aditya Suhendar]
- Tester: [Trisna Prawijaya,Aji Nata Sobari,Haekal Abdullah Ali Akbar Fajar Ramadhan]

## 🚀 Cara Menjalankan
1. Clone repo: `git clone https://github.com/namakamu/repo.git`
2. Buka `index.html` di browser
3. Untuk hosting, gunakan [GitHub Pages](https://pages.github.com/)
