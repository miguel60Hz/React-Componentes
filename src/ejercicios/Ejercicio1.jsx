import './Ejercicio1.css'

const parrafo = [
  'Integer ornare neque enim, non imperdiet ex pellentesque sed. Sed congue, nunc ut rhoncus consectetur, diam purus',
  'venenatis lacus, vel sollicitudin nibh tortor sed nunc.',
  'Vestibulum at ante ac tortor ultricies gravida eget molestie',
  'nibh. Fusce tempor dictum lectus, id luctus sapien tristique',
  'suscipit. Cras volutpat lectus at urna vulputate pellentesque',
  'Praesent eleifend, sapien ut finibus facilisis, orci augue',
  'elementum leo, a faucibus augue nibh ac urna. Aliquam erat',
  'volutpat. Sed ultrices tempus neque, nec iaculis orci',
  'sollicitudin id. Mauris gravida congue sapien, vitae finibus nisi',
  'condimentum id. Donec turpis metus, euismod sed luctus sit',
  'amet, semper eu purus.',
]

export default function Ejercicio1() {
  return (
    <div className="e1">
      <header className="e1-header">
        <span className="e1-titulo">Hip &amp; Happenin'</span>
        <span className="e1-headline">Headline</span>
      </header>
      <div className="e1-cols">
        <aside className="e1-col-izq">
          <h2>Contact</h2>
        </aside>
        <section className="e1-col-centro">
          <h2>Where It's At</h2>
          <div className="e1-parrafos">
            {parrafo.map((linea, i) => (
              <p key={i}>{linea}</p>
            ))}
          </div>
        </section>
        <aside className="e1-col-der">
          <h2>News</h2>
        </aside>
      </div>
      <footer className="e1-footer">The small print</footer>
    </div>
  )
}
