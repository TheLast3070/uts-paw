import { useNavigate } from 'react-router-dom'

export default function TombolKembali({ ke = '/koleksi', label = 'Kembali ke koleksi' }) {
  const navigate = useNavigate()
  return (
    <button type="button" className="tombol-kembali" onClick={() => navigate(ke)}>
      {label}
    </button>
  )
}