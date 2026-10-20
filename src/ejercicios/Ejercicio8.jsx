import './Ejercicio8.css'
import chart from '../assets/e8_chart1.jpg'

export default function Ejercicio8() {
  return (
    <div className="e8">
      <aside className="e8-sidebar">
        <span className="e8-logo">Asset Management</span>
        <nav className="e8-menu">
          <span className="e8-item e8-item-1">Dashboard</span>
          <span className="e8-item e8-item-2">Hardware</span>
          <span className="e8-item e8-item-3">Software</span>
          <span className="e8-item e8-item-4">Issued Licenses</span>
          <span className="e8-item e8-item-5">Requests</span>
          <span className="e8-badge">10 New</span>
          <span className="e8-item e8-item-6">About</span>
        </nav>
      </aside>
      <main className="e8-contenido">
        <h1 className="e8-titulo">Dashboard</h1>
        <div className="e8-card e8-card-morado">
          <span className="e8-card-numero">15</span>
          <span className="e8-card-label">Requests Processed</span>
        </div>
        <div className="e8-card e8-card-verde">
          <span className="e8-card-numero">30</span>
          <span className="e8-card-label">Licenses Issued</span>
        </div>
        <h2 className="e8-subtitulo e8-subtitulo-1">Statistics by Hardware Status</h2>
        <img className="e8-chart1" src={chart} alt="Grafico de estado del hardware" />
        <h2 className="e8-subtitulo e8-subtitulo-2">Statistics by Hardware Category</h2>
      </main>
    </div>
  )
}
