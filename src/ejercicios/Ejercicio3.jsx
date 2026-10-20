import './Ejercicio3.css'
import thumbs from '../assets/e3_thumbs.jpg'
import foto from '../assets/e3_photo.jpg'

export default function Ejercicio3() {
  return (
    <div className="e3">
      <h1 className="e3-titulo">Modular House Exhibit, Park University's</h1>
      <h2 className="e3-subtitulo">Graphic Design Program</h2>
      <p className="e3-instruccion">
        Click a thumbnail at the left in order to move it to the viewing frame at the right.
      </p>
      <img className="e3-thumbs" src={thumbs} alt="Miniaturas" />
      <img className="e3-foto" src={foto} alt="Casa modular en exhibicion" />
    </div>
  )
}
