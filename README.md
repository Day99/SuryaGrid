# SuryaGrid Website

Situs statis (HTML/CSS/JS murni, tanpa build) untuk SuryaGrid: solusi PLTS rumah, bisnis, telekomunikasi dan pertanian.

## Struktur
```
index.html            Halaman utama + meta SEO, Open Graph, JSON-LD (LocalBusiness, WebSite, FAQPage)
404.html              Halaman tidak ditemukan
robots.txt            Izin crawler, termasuk bot AI (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, dll)
sitemap.xml           Peta situs + gambar
llms.txt              Ringkasan bisnis untuk asisten AI
site.webmanifest      Manifest PWA / ikon
CNAME                 Domain kustom GitHub Pages
.nojekyll             Matikan Jekyll di GitHub Pages
PHOTO-LOG.csv         Log sumber & lisensi foto (semua masih placeholder)
assets/css/style.css
assets/js/main.js     Menu mobile + kalkulator estimasi PLTS
assets/img/           Foto, ikon, og-image
```

## Deploy ke GitHub Pages
```bash
git init && git add . && git commit -m "Initial SuryaGrid site"
git branch -M main
git remote add origin https://github.com/<user>/suryagrid-web.git
git push -u origin main
```
Lalu di GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.

Domain: `suryagrid.timurintisinergi.co.id`. Di DNS timurintisinergi.co.id tambahkan **CNAME `suryagrid` → `day99.github.io`**, lalu di Settings → Pages isi Custom domain dan aktifkan **Enforce HTTPS**. Verifikasi domain di Settings akun → Pages → Verified domains.

## Wajib dicek sebelum live
- [x] Domain: semua URL memakai `https://suryagrid.timurintisinergi.co.id/`.
- [x] Email: `hidayat@timurintisinergi.co.id`.
- [ ] Alamat kantor lengkap → tambahkan ke JSON-LD `address` (streetAddress, postalCode) agar muncul di pencarian lokal.
- [ ] Ganti semua foto placeholder (lihat `PHOTO-LOG.csv`), pertahankan nama file atau perbarui `width`/`height` di HTML.

## Setelah live
1. Daftarkan di **Google Search Console** dan **Bing Webmaster Tools**, submit `sitemap.xml`. (Bing juga memasok ChatGPT Search & Copilot.)
2. Buat **Google Business Profile** dengan nama, nomor WA dan alamat yang sama persis dengan situs.
3. Uji: Rich Results Test (FAQ & LocalBusiness), PageSpeed Insights, dan preview share di WhatsApp.
4. Tambah halaman terpisah per solusi (`/plts-rumah/`, `/plts-bts/`, dst.) dan artikel nyata, lalu daftarkan di `sitemap.xml` dan `llms.txt`. Ini yang paling berpengaruh agar direkomendasikan AI.
