import React from 'react'
import Hero from '../components/Hero.jsx'

export default function Home(){
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <h2>Propuesta educativa</h2>
          <p className="muted">Formación técnica con talleres, laboratorios e integración con el sector productivo.</p>
          <div className="grid cols-3" style={{marginTop:12}}>
            {[
              {title:'Automotores', desc:'Formación integral en mecánica automotriz, sistemas eléctricos y diagnóstico vehicular.'},
              {title:'Computación', desc:'Programación, redes, sistemas informáticos y tecnologías de la información.'},
              {title:'Actividades', desc:'Olimpíadas, campamentos, ferias y más.'},
            ].map((c,i)=>(
              <article key={i} className="card">
                <div className="body">
                  <h3>{c.title}</h3>
                  <p className="muted">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Galería</h2>
          <p className="muted">Instalaciones y eventos destacados</p>
          <div className="gallery" style={{marginTop:12}}>
            {[1,2,3,4,5,6,7,8].map(i=>(
              <img key={i} src={`https://picsum.photos/seed/et35-${i}/400/300`} alt={`Foto ${i}`} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
