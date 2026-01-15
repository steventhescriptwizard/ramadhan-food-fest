<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🌙 Ramadhan Food Festival - Aplikasi Web

Aplikasi web modern untuk Ramadhan Food Festival yang menawarkan pengalaman kuliner premium dengan direktori pedagang makanan, resep tradisional, dan sistem pemesanan menu interaktif.

**Author:** Stevencodelab ([stevencodelab@gmail.com](mailto:stevencodelab@gmail.com))

> **View your app in AI Studio:** [https://ai.studio/apps/drive/1Zs0TkCN7q_YpbVhmkDp72pxfcQMfJGKX](https://ai.studio/apps/drive/1Zs0TkCN7q_YpbVhmkDp72pxfcQMfJGKX)

---

## ✨ Fitur Utama

- 🏪 **Direktori Pedagang** - Jelajahi koleksi lengkap pedagang makanan Ramadhan
- 🍽️ **Menu Interaktif** - Lihat menu lengkap dan detail makanan setiap pedagang
- 🏷️ **Detail Stall** - Informasi mendalam tentang setiap pedagang dengan rating dan lokasi
- 📖 **Tentang Kami** - Pelajari cerita dan visi Festival Makanan Ramadhan
- 📞 **Hubungi Kami** - Halaman kontak untuk pertanyaan dan masukan
- 📱 **Responsif** - Desain yang optimal di semua ukuran perangkat

---

## 🚀 Teknologi yang Digunakan

- **React 19** - Library UI modern dengan hooks dan fitur terbaru
- **TypeScript** - Type-safe development dengan JavaScript
- **Vite** - Build tool dan dev server yang cepat
- **React Router v7** - Client-side routing untuk navigasi halaman
- **CSS Modern** - Styling yang responsif dan elegan

---

## 📋 Prasyarat

- **Node.js** versi 16 atau lebih tinggi
- **npm** atau **yarn** sebagai package manager
- Git (untuk clone repository)

---

## 🛠️ Instalasi dan Setup

### 1. Clone Repository

```bash
git clone https://github.com/username/ramadhan-food-fest.git
cd ramadhan-food-fest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables (Opsional)

Jika aplikasi menggunakan API eksternal, buat file `.env.local`:

```bash
VITE_API_KEY=your_api_key_here
VITE_API_URL=your_api_url_here
```

---

## ▶️ Menjalankan Aplikasi

### Development Mode

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain yang tersedia)

### Build untuk Production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`

### Preview Build Production Lokal

```bash
npm run preview
```

---

## 📁 Struktur Proyek

```
ramadhan-food-fest/
├── src/
│   ├── components/
│   │   └── Layout.tsx           # Komponen layout utama
│   ├── pages/
│   │   ├── Home.tsx             # Halaman beranda
│   │   ├── Directory.tsx         # Halaman direktori pedagang
│   │   ├── Menu.tsx             # Halaman menu makanan
│   │   ├── StallDetails.tsx      # Detail pedagang spesifik
│   │   ├── About.tsx            # Halaman tentang kami
│   │   └── Contact.tsx          # Halaman kontak
│   ├── App.tsx                  # Komponen root aplikasi
│   ├── index.tsx                # Entry point aplikasi
│   ├── types.ts                 # Type definitions TypeScript
│   └── constants.ts             # Konstanta aplikasi
├── public/
│   └── index.html               # File HTML utama
├── vite.config.ts               # Konfigurasi Vite
├── tsconfig.json                # Konfigurasi TypeScript
├── package.json                 # Dependencies dan scripts
├── metadata.json                # Metadata aplikasi
└── README.md                    # File dokumentasi (Anda di sini)
```

---

## 🧭 Navigasi Halaman

| Halaman | Path | Deskripsi |
|---------|------|-----------|
| Beranda | `/` | Halaman utama dengan welcome message |
| Direktori | `/directory` | Daftar lengkap semua pedagang makanan |
| Menu | `/menu` | Koleksi menu dari semua pedagang |
| Detail Stall | `/stall/:id` | Informasi detail pedagang tertentu |
| Tentang | `/about` | Informasi tentang festival |
| Kontak | `/contact` | Formulir kontak dan informasi hubungi kami |

---

## 🔧 Pengembangan

### Membuat Komponen Baru

1. Buat file di folder `components/` atau `pages/`
2. Gunakan TypeScript dengan proper typing
3. Import dan gunakan di `App.tsx` atau komponen parent

### Menambah Rute Baru

Tambahkan route baru di `App.tsx`:

```tsx
<Route path="/new-page" element={<NewPage />} />
```

### Menggunakan Constants

Import constants dari `constants.ts`:

```tsx
import { STALL_LIST, API_ENDPOINTS } from './constants';
```

---

## 📦 Build dan Deployment

### Build untuk Production

```bash
npm run build
```

### Deploy ke Platform Hosting

Aplikasi siap untuk di-deploy ke berbagai platform:

- **Vercel** - Optimal untuk aplikasi Vite/React
- **Netlify** - Memiliki CI/CD terintegrasi
- **GitHub Pages** - Gratis untuk repository publik
- **Firebase Hosting** - Dengan SSR support
- **Google Cloud** - Dengan berbagai pilihan deployment

**Langkah umum:**
1. Build aplikasi: `npm run build`
2. Upload folder `dist/` ke platform hosting
3. Configure build command: `npm run build`
4. Configure output directory: `dist`

---

## 📝 Fitur Khusus

### Geolocation

Aplikasi memiliki permission untuk mengakses lokasi pengguna (berguna untuk mencari pedagang terdekat):

```json
{
  "requestFramePermissions": ["geolocation"]
}
```

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Port 5173 sudah digunakan | Vite akan otomatis gunakan port berikutnya |
| Module not found errors | Jalankan `npm install` ulang |
| TypeScript errors | Pastikan tipe sudah didefinisikan di `types.ts` |
| Build gagal | Bersihkan `node_modules` dan `.cache`, lalu install ulang |

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [LICENSE](LICENSE) - lihat file LICENSE untuk detail lengkap.

---

## 👨‍💻 Author

**Stevencodelab**
- 📧 Email: [stevencodelab@gmail.com](mailto:stevencodelab@gmail.com)
- 💼 Pengembang Full Stack
- 🌐 Fokus pada aplikasi web modern dengan React & TypeScript

---

## 🤝 Kontribusi

Kami menerima kontribusi dari komunitas! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📞 Dukungan

Untuk pertanyaan atau laporan bug, silakan:
- Buka [Issues](../../issues)
- Hubungi melalui halaman Contact di aplikasi
- Email: [stevencodelab@gmail.com](mailto:stevencodelab@gmail.com)

---

## 🙏 Terima Kasih

Terima kasih telah menggunakan Ramadhan Food Festival App! Kami berharap Anda menikmati pengalaman kuliner yang luar biasa.

**Selamat menikmati kelezatan Ramadhan! 🌙🍽️**
