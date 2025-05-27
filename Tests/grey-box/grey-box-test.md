### 📄 grey-box-testing.md
markdown
# 🧪 Grey Box Testing

Dilakukan oleh: [Haekal Abdullah Ali Akbar Fajar Ramadhan]

Metode: Kombinasi pengujian UI dan pemahaman kode (Grey Box)

## Fokus:
- Interaksi pada `cart.html`
- Validasi ID Game & metode pembayaran
- Pemeriksaan DOM manipulation

### Pengujian
| No | Fitur          | Input                          | Ekspektasi                                   | Hasil | Status |
|----|----------------|--------------------------------|----------------------------------------------|--------|--------|
| 1  | Isi ID Game    | ID = 123456                    | Tampil data game terkait                     | OK     | ✅      |
| 2  | Pilih metode   | Metode = QRIS                 | Metode tersimpan & tampilkan total harga     | OK     | ✅      |
| 3  | Validasi DOM   | Simulasi pembayaran            | Konten div hasil pembayaran ter-update       | OK     | ✅      |

DOM diuji dengan memeriksa `innerHTML`, `value`, dan `textContent` dari elemen UI.


---
