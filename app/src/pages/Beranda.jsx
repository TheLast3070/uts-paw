import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="beranda">
      <div className="beranda-sampul">
        <h1>Destinasi Wisata Lampung</h1>
        <p className="beranda-pengantar">
          Dalam Website ini akan menampilkan Daftar {mahasiswa.tema}, Serta berbagai informasi terkait destinasi wisata di Lampung. Di sini bisa juga menambahkan destinasi baru.
        </p>
        {loading ? (
          <p className="beranda-ringkasan">Memuat ringkasan...</p>
        ) : (
          <p className="beranda-ringkasan">
            Sekarang terdapat {items.length} destinasi wisata dalam {jumlahKategori} kategori.
          </p>
        )}
        <Link className="beranda-tombol" to="/koleksi">Lihat semua destinasi</Link>
      </div>
    </section>
  )
}