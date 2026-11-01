import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import TombolKembali from '../components/TombolKembali.jsx'
import Rupiah from '../components/Rupiah.jsx'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <section className="detail">
      <h1>{item.judul}</h1>
      <dl className="detail-tabel">
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>
        <dt>Kabupaten</dt>
        <dd>{item.kabupaten}</dd>
        <dt>Harga Tiket</dt>
        <dd><Rupiah nilai={item.hargaTiket} ribuan={true} /></dd>
        <dt>Jam Buka</dt>
        <dd>{item.jamBuka}</dd>
      </dl>
      <div className="aksi">
        <button type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
        <TombolKembali />
      </div>
    </section>
  )
}