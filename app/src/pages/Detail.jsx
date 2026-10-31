import { useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, hapus } = useKoleksi()
  const item = items.find((i) => i.id === id)

  if (!item) return <p>Item tidak ditemukan.</p>

  return (
    <>
      <h1>{item.judul}</h1>
      <button onClick={() => { hapus(item.id); navigate('/koleksi') }}>Hapus</button>
    </>
  )
}