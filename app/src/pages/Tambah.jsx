import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Pantai', kabupaten: 'Lampung Barat', hargaTiket: '0', jamBuka: '08.00-17.00' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi dan minimal 3 karakter')
      return
    }
    setGalat('')
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tempat Wisata</h1>

      <label htmlFor="judul">judul / nama Wisata</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />

      <label htmlFor="kategori">Kategori Wisata</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Pantai</option>
        <option>Gunung</option>
        <option>Air Terjun</option>
        <option>Danau</option>
        <option>Hutan</option>
      </select>

      <label htmlFor="kabupaten">Kabupaten Tempat Wisata</label>
      <select id="kabupaten" name="kabupaten" value={form.kabupaten} onChange={ubah}>
        <option>Lampung Barat</option>
        <option>Lampung Selatan</option>
        <option>Lampung Tengah</option>
        <option>Lampung Timur</option>
        <option>Lampung Utara</option>
        <option>Mesuji</option>
        <option>Pesawaran</option>
        <option>Pesisir Barat</option>
        <option>Pringsewu</option>
        <option>Tanggamus</option>
        <option>Tulang Bawang</option>
        <option>Tulang Bawang Barat</option>
        <option>Way Kanan</option>
      </select>

      <label htmlFor="hargaTiket">Harga Tiket (Rp)</label>
      <input id="hargaTiket" name="hargaTiket" type="number" min="0" value={form.hargaTiket} onChange={ubah} placeholder="10000" />

      <label htmlFor="jamBuka">Jam Buka</label>
      <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah} placeholder="08:00 - 17:00" />


      {galat && <p role="alert">{galat}</p>}
      <button type="submit">Simpan</button>
    </form>
  )
}