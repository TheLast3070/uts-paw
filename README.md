# Nama Aplikasi

- Nama: Baginda Parulian Siregar
- NIM: 124140135
- Kelas: RB
- Tema: Destinasi Wisata Lampung
- Deployment: https://TheLast3070.github.io/uts-paw/

![Tangkapan layar beranda](./app/src/pages/FotoBeranda.png)

## Fitur

- useLocalStorage(kunci, nilaiAwal) : web bisa menyimpan state ke localStorage terus bisa dilihat lagi ketika halaman dimuat, sehingga data tidak hilang setelah refresh
- useKoleksi() : ambil data dan fungsi dari bagian Context, sehingga cukup 1x panggil hook
- KoleksiProvider : untuk membungkus aplikasi dan membagikan items, loading, error, tambah, dan hapus ke semua halaman
- muat() : gunanya untuk ambil data awal dari koleksi.json dengan fetch(async) terus disimpan datanya
- tambah(item) : menambah destinasi baru ke daftar
- hapus(id) : menghapus destinasi berdasarkan id

## Menjalankan secara lokal

- cd app
- npm install
- npm run dev

## Konsep React yang dipakai

- Komponen fungsi, props, dan children ( KartuItem, KotakPencarian, Rupiah, TombolKembali)
- useState dan useEffect (form, pencarian, filter kategori, memuat data, localStorage)
- Context API seperti createContext, Provider, dan useContext (KoleksiProvider dan useKoleksi)
- hook (useKoleksi dan useLocalStorage)
- fetch dengan async/await serta state loading dan error
- Controlled form dengan validasi, ada di halaman tambah
- Rendering daftar dengan map dan key, serta conditional rendering