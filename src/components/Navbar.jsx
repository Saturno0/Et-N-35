import React from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

export default function Navbar({ theme = 'dark', onToggleTheme = () => {} }){
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="container inner">
        <Link to="/" className="brand">
          <img src="../public/Escudo.png" alt="ET35" />
          <span>Escuela Técnica 35</span>
        </Link>
        <div className="nav-actions">
          <button
            type="button"
            className={`menu-toggle${isOpen ? ' is-open' : ''}`}
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen(o => !o)}
          >
            <span className="menu-bar" />
          </button>
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            title={`Modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            onClick={onToggleTheme}
          >
            <span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
          </button>
        </div>
        <nav id="primary-navigation" className={`navlinks${isOpen ? ' is-open' : ''}`}>
          <NavLink to="/" className="navlink">Inicio</NavLink>
          <NavLink to="/recorrida-historia" className="navlink">Historia del colegio</NavLink>
          <NavLink to="/comunidad-educativa" className="navlink">Comunidad educativa</NavLink>
          <NavLink to="/recorrida" className="navlink">Recorrida</NavLink>
          <NavLink to="/campamento-suyai" className="navlink">Campamento Suyai</NavLink>
        </nav>
      </div>
    </header>
  )
}
