import { Link } from 'react-router-dom'
import './TidakDitemukan.css'

export default function TidakDitemukan() {
  return (
    <section className='tidakditemukan'>
      <div className='sampul'>
        <h1>404</h1>
        <p>Halaman tidak ditemukan.</p>
        <Link className='tombol'  to="/">Kembali ke beranda</Link>  
      </div>
    </section>
  )
}