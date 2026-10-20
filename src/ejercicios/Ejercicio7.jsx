import './Ejercicio7.css'

export default function Ejercicio7() {
  return (
    <div className="e7">
      <div className="e7-browser">
        <div className="e7-tabbar">
          <span className="e7-dot e7-dot-rojo" />
          <span className="e7-dot e7-dot-gris" />
          <span className="e7-dot e7-dot-amarillo" />
          <div className="e7-tab">
            <span className="e7-tab-texto">AngularMaterialTutorial</span>
          </div>
          <span className="e7-autor">Autho</span>
        </div>
        <div className="e7-urlbar">
          <div className="e7-url-input">
            <span className="e7-url-texto">@localhost:4200/dashboard</span>
          </div>
          <span className="e7-avatar">JB</span>
        </div>
        <div className="e7-toolbar">
          <span className="e7-logo">Material Blog</span>
          <span className="e7-nav e7-nav-login">Login</span>
          <span className="e7-nav e7-nav-home">↑Home</span>
          <span className="e7-nav e7-nav-dashboard">Dashboard</span>
          <span className="e7-usuario">ino601</span>
        </div>
        <div className="e7-contenido">
          <div className="e7-addpost">+ Add Post</div>
          <h2 className="e7-recent">Recent Posts</h2>
          <div className="e7-tabla">
            <div className="e7-fila e7-header-fila">
              <span className="e7-c1">Date Posted</span>
              <span className="e7-c2">Title</span>
              <span className="e7-c3">Category</span>
            </div>
            <div className="e7-fila">
              <span className="e7-c1">1/5/2018</span>
              <span className="e7-c2">Post One</span>
              <span className="e7-c3">Web Development</span>
            </div>
            <div className="e7-fila e7-fila-ultima">
              <span className="e7-c1">1/5/2018</span>
              <span className="e7-c2">Post Two</span>
              <span className="e7-c3">Android Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
