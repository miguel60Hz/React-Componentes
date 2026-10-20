import './Ejercicio5.css'

export default function Ejercicio5() {
  return (
    <div className="e5">
      <div className="e5-topbar" />
      <header className="e5-header">
        <nav className="e5-nav">
          <a href="#home">Home</a>
          <a href="#photos">Photos</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="e5-banda-azul" />
      <div className="e5-banda-fina" />
      <div className="e5-bloque-claro">
        <span className="e5-family">Family</span>
      </div>
      <div className="e5-caja-fecha">
        <span className="e5-fecha">23</span>
        <span className="e5-dia">Friday</span>
      </div>
      <div className="e5-post-titulo">
        <span className="e5-trip">Trip</span>
        <span className="e5-vacations">Vacations</span>
      </div>
      <span className="e5-post">Post</span>
      <p className="e5-texto">This is the text of my first post</p>
    </div>
  )
}
