import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Recorrida from './pages/Recorrida.jsx'
import Historia from './pages/Historia.jsx'
import Campamento from './pages/Campamento.jsx'
import ComunidadEducativa from './pages/ComunidadEducativa.jsx'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App(){
  const [theme, setTheme] = React.useState(getInitialTheme)

  React.useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = React.useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recorrida" element={<Recorrida />} />
        <Route path="/recorrida-historia" element={<Historia />} />
        <Route path="/campamento-suyai" element={<Campamento />} />
        <Route path="/comunidad-educativa" element={<ComunidadEducativa />} />
        <Route path="*" element={<main className="section"><div className="container"><h2>404</h2><p className="muted">Página no encontrada</p></div></main>} />
      </Routes>
      <Footer />
    </div>
  )
}
