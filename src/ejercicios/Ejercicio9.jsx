import './Ejercicio9.css'

const noticiasIzq = [
  { fecha: '27/06/2026', titulo: 'Lorem ipsum dolor sit amet', top: 190 },
  { fecha: '27/06/2026', titulo: 'Consectetuer adipiscing elit', top: 238 },
  { fecha: '27/06/2026', titulo: 'Donec molestie nunc gu\nsapien', top: 286 },
  { fecha: '27/06/2026', titulo: 'Maecenas aliguam dolor\nsget metus', top: 357 },
  { fecha: '27/06/2026', titulo: 'Fusce tristique lorem id\nmetus', top: 431 },
]

const enlaces = [
  { texto: 'Proin placerat', top: 529 },
  { texto: 'Nulla in fels', top: 552 },
  { texto: 'Nam luctus', top: 578 },
]

const publicidad = [
  'Donec aliquet. Duis',
  'dapibus sem. Donec',
  'quam libero, lacinia',
  'eget, nonummy ac,',
  'metus. Nullam',
  'accumsan lorem in',
  'dui. Cras ultricies',
  'mi eu turpis hendrerit',
  'fringilla. Vestibulum',
  'ante ipsum primis in',
  'faucibus orci luctus et',
  'ultrices posuere cubilia',
  'Curae.',
]

const centroParrafo1 = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec quam libero, lacinia eget, nonummy ac, metus.',
  'Nullam accumsan lorem in dui. Cras ultricies mi eu turpis',
  'hendrerit fringilla. Vestibulum ante ipsum primis in faucibus',
  'orci luctus et ultrices posuere cubilia Curae; In ac dui quis',
  'libero consectetuer lacinia. Nam pretium turpis et arcu.',
]

const centroParrafo2 = [
  'Vivamus lobortis turpis ac ante fames ac ante tincidunt',
  'tempus. Donec vitae sapien ut libero venenatis faucibus.',
  'Nullam quis ante. Etiam sit amet orci eget eros faucibus',
  'tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
  'Donec sodales sagittis magna. Sed consequat, leo eget',
  'bibendum sodales, augue velit cursus nunc, quis gravida',
  'magna mi a libero. Fusce vulputate eleifend sapien.',
]

const derParrafo1 = [
  'Praesent sodales.',
  'Lorem ipsum dolor sit',
  'amet, consectetuer',
  'adipiscing elit.',
  'Maecenas ornare',
  'tellus. Cras elit nisl,',
  'venenatis vitae,',
  'ultricies dapibus.',
]

const derParrafo2 = [
  'Lorem ipsum dolor sit',
  'amet, consectetuer',
  'adipiscing elit.',
  'Maecenas ornare tellus.',
  'Cras elit nisl, venenatis',
  'vitae, ultricies dapibus,',
  'dignissim sit amet,',
  'lorem. Donec dictum',
  'metus id sapien.',
]

export default function Ejercicio9() {
  return (
    <div className="e9">
      <header className="e9-header">
        <span className="e9-logo">Logotipo</span>
        <span className="e9-buscar">Buscar</span>
      </header>
      <nav className="e9-nav">
        <a href="#lorem">Lorem</a>
        <a href="#ipsum">Ipsum</a>
        <a href="#dolor">Dolor</a>
        <a href="#sit-amet">Sit Amet</a>
      </nav>

      <section className="e9-col-izq">
        <h2 className="e9-noticias">Noticias</h2>
        {noticiasIzq.map((n, i) => (
          <div className="e9-noticia" key={i} style={{ top: `${n.top}px` }}>
            <span className="e9-noticia-fecha">{n.fecha}</span>
            <span className="e9-noticia-titulo">
              {n.titulo.split('\n').map((linea, j) => (
                <span key={j} className="e9-noticia-linea">{linea}</span>
              ))}
            </span>
          </div>
        ))}
        <h3 className="e9-enlaces-titulo">Enlaces relacionados</h3>
        {enlaces.map((e, i) => (
          <a className="e9-enlace" key={i} href="#enlace" style={{ top: `${e.top}px` }}>
            {e.texto}
          </a>
        ))}
        <div className="e9-publicidad">
          <h3 className="e9-pub-titulo">Publicidad</h3>
          {publicidad.map((linea, i) => (
            <span className="e9-pub-linea" key={i} style={{ top: `${668 - 620 + i * 25}px` }}>
              {linea}
            </span>
          ))}
          <span className="e9-pub-seguir">Seguir leyendo..</span>
        </div>
      </section>

      <section className="e9-col-centro">
        <h1 className="e9-titulo-centro">
          Lorem ipsum dolor sit amet, consectetuer
          <br />
          adipiscing elit
        </h1>
        <div className="e9-caja-gris" />
        {centroParrafo1.map((linea, i) => (
          <span
            className="e9-linea"
            key={`c1-${i}`}
            style={{
              left: i < 6 ? '153px' : '1px',
              top: `${242 - 138 + i * 30}px`,
            }}
          >
            {linea}
          </span>
        ))}
        <span className="e9-seguir e9-seguir-centro-1">Seguir leyendo..</span>
        <h3 className="e9-subtitulo-centro">Vivamus lobortis turpis ac antefringilla faucibus</h3>
        {centroParrafo2.map((linea, i) => (
          <span
            className="e9-linea"
            key={`c2-${i}`}
            style={{
              left: i < 6 ? '154px' : '3px',
              top: `${520 + i * 29}px`,
            }}
          >
            {linea}
          </span>
        ))}
        <span className="e9-seguir e9-seguir-centro-2">Seguir levendo...</span>
      </section>

      <section className="e9-col-der">
        <h3 className="e9-der-titulo">Phasellus blandit</h3>
        {derParrafo1.map((linea, i) => (
          <span className="e9-linea e9-linea-der" key={`d1-${i}`} style={{ top: `${69 + i * 28}px` }}>
            {linea}
          </span>
        ))}
        <span className="e9-seguir e9-seguir-der-1">Secir levendo..</span>
        <h3 className="e9-der-subtitulo">Nullam vel turpis</h3>
        {derParrafo2.map((linea, i) => (
          <span className="e9-linea e9-linea-der" key={`d2-${i}`} style={{ top: `${372 + i * 29}px` }}>
            {linea}
          </span>
        ))}
        <span className="e9-seguir e9-seguir-der-2">Seouir leyendo..</span>
      </section>

      <footer className="e9-footer">
        <span className="e9-footer-izq">Nua Pharetra Luchua sam Prsin Pacem</span>
        <span className="e9-footer-der">Copyright Lorem ipsum</span>
      </footer>
    </div>
  )
}
