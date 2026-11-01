export default function Rupiah({ nilai, ribuan = false }) {
  const angka = Number(nilai)
  const valid = nilai !== '' && nilai !== undefined
  const tampil = valid && ribuan ? angka.toLocaleString('id-ID') : nilai

  return (
    <span className="rupiah">
      <span className="rupiah-simbol">Rp </span>
      <span>{tampil}</span>
    </span>
  )
}