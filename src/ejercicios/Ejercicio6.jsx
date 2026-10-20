import './Ejercicio6.css'

export default function Ejercicio6() {
  return (
    <div className="e6">
      <div className="e6-topbar">
        <span className="e6-nombre">Personal Trainer</span>
        <span className="e6-label e6-label-top">Top Nav</span>
        <span className="e6-history">History</span>
      </div>
      <div className="e6-subnav">
        <span className="e6-btn">↑ Home</span>
        <span className="e6-btn">+ New Workout</span>
        <span className="e6-btn">+ New Exercise</span>
        <span className="e6-label e6-label-sub">Sub Nav</span>
      </div>
      <aside className="e6-sidebar">
        <div className="e6-menu">
          <span className="e6-item">Workouts</span>
          <span className="e6-item">Exercises</span>
        </div>
        <span className="e6-label e6-label-left">Left Nav</span>
      </aside>
      <main className="e6-contenido">
        <span className="e6-label e6-label-content">Content Area</span>
      </main>
    </div>
  )
}
