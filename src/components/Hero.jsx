import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
        <h1>Escuela Técnica N°35 “Ing. Eduardo Latzina”</h1>
        <p>Especialidades en Automotores y Computación. Educación pública técnica de la Ciudad de Buenos Aires.</p>
        <div style={{marginTop:16, display:'flex', gap:10, flexWrap:'wrap'}}>
          <Link to="/recorrida"><button className="cta">Ver Recorrida</button></Link>
          <Link to="/comunidad-educativa"><button className="cta" style={{background:'#34d399'}}>Comunidad</button></Link>
        </div>
      </div>
    </section>
  )
}
