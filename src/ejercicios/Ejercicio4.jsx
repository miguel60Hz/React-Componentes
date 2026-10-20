import './Ejercicio4.css'
import mapa from '../assets/e4_map.jpg'

export default function Ejercicio4() {
  return (
    <div className="e4">
      <div className="e4-header">
        <h1>World Weather</h1>
        <nav className="e4-nav">
          <a href="#africa">Africa</a>
          <span className="e4-sep">|</span>
          <a href="#australia">Australia</a>
          <span className="e4-sep">|</span>
          <a href="#south-america">South America</a>
        </nav>
      </div>
      <img className="e4-mapa" src={mapa} alt="Mapa del mundo" />
      <div className="e4-franja" />
    </div>
  )
}
