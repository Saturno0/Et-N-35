import React from "react"

export default function ComunidadEducativa(){
  return (
    <main className="section comunidad-page">
      <div className="container">
        <h1 className="comunidad-title">Comunidad Educativa</h1>
        <div className="comunidad-content">
          <section className="comunidad-section egresados">
            <h2>🎓 Centro de Egresados</h2>
            <div className="comunidad-highlight">
              <p>
                La escuela, en sus primeros 50 años, formó a <strong>3646 Técnicos en Automotores</strong> y <strong>782 Técnicos en Computación</strong>.
              </p>
            </div>

            <article className="comunidad-block">
              <h3>📋 Ceremonias de Graduación</h3>
              <p>
                A partir de <strong>1957</strong>, el acto de despedida de los egresados se convirtió en el <em>evento más importante del establecimiento</em>. Desde 1961, la entrega de diplomas y medallas conmemorativas se realiza de forma especial: los diplomas son entregados por las <strong>madrinas de promoción</strong> (madres, abuelas, esposas) y las medallas por cooperadores y docentes.
              </p>
            </article>

            <article className="comunidad-block">
              <h3>🍽️ 25° Aniversario</h3>
              <p>
                En <strong>1976</strong>, para el 25° Aniversario de la escuela, se convocó una cena de camaradería que reunió a <strong>más de 300 egresados</strong> y se aprovechó la ocasión para convocar una asamblea general y renovar la Comisión Directiva.
              </p>
            </article>

            <div className="comunidad-stats">
              <h3>📊 Distribución Laboral de Egresados</h3>
              <div className="comunidad-stats-grid">
                <div className="stat-card">
                  <span className="stat-number">32%</span>
                  <span className="stat-label">Servicios</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">28%</span>
                  <span className="stat-label">Fábricas de Automotores</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">25%</span>
                  <span className="stat-label">Industria Metalúrgica</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">15%</span>
                  <span className="stat-label">Otras Actividades</span>
                </div>
              </div>
              <p className="stats-note">Otras actividades incluyen docencia, transporte y comercio.</p>
            </div>

            <div className="comunidad-milestones">
              <h3>🏆 Hitos Importantes</h3>
              <div className="milestone">
                <span className="milestone-year">1956</span>
                <span className="milestone-text">Primera promoción no oficial (Promoción N° 0) - 2 egresados</span>
              </div>
              <div className="milestone">
                <span className="milestone-year">1957</span>
                <span className="milestone-text">Primera promoción oficial</span>
              </div>
              <div className="milestone">
                <span className="milestone-year">1980</span>
                <span className="milestone-text"><strong>Mónica Manuli</strong> se convierte en la primera mujer en recibir el título de Técnica en Automotores en el país (Promoción N° 24)</span>
              </div>
              <div className="milestone">
                <span className="milestone-year">1986</span>
                <span className="milestone-text">Primera promoción de Técnicos Programadores en Computación</span>
              </div>
            </div>

            <div className="facebook-link">
              <a
                className="facebook-btn"
                href="https://www.facebook.com/EgresadosET35/?locale=es_LA"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">👥</span>
                <span className="text">Visitá el Centro de Egresados en Facebook</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </section>

          <section className="comunidad-section jubilados">
            <h2>👴 Centro de Jubilados</h2>

            <article className="comunidad-block">
              <h3>🏁 Fundación</h3>
              <p>
                En <strong>1978</strong>, por iniciativa de la dirección de la escuela, se convocó a un grupo de jubilados para crear una asociación, nombrando como presidente al profesor <strong>Elías Zárate</strong> y como secretaria a la señorita <strong>Olga Chacra</strong>.
              </p>
            </article>

            <article className="comunidad-block">
              <h3>🤝 Reencuentros</h3>
              <p>
                En <strong>1980</strong>, los maestros fundadores lograron reunir a <strong>102 de ellos</strong> en una jornada de reencuentro de Maestros de Enseñanza Práctica. Se estableció un calendario de actividades que incluía un encuentro o salida mensual.
              </p>
              <p>
                En <strong>1997</strong>, asistieron a la estancia "La Mimosa", realizaron una excursión de más de un día a las <strong>Cataratas del Iguazú</strong> y pasaron un fin de semana en la estancia "La Herradura".
              </p>
            </article>

            <article className="comunidad-block">
              <h3>🎉 Actividades Anuales</h3>
              <p>
                En el día del jubilado de la E.T. 35, con la asistencia de <strong>51 jubilados</strong>, se acordó que los miembros del Centro asistirían, junto con el personal activo, a todas las reuniones de camaradería organizadas por la Mutual de Personal de la Escuela.
              </p>
              <p>
                Como resultado, <strong>más de 50 jubilados</strong> asisten anualmente a los almuerzos de aniversario de la escuela, al homenaje del día del maestro y a la despedida del año lectivo en diciembre. En el año 2000, el centro continuó organizando salidas de fin de semana para más de cuarenta personas, incluyendo familiares de los jubilados.
              </p>
            </article>

            <article className="comunidad-block">
              <h3>📋 Formalización</h3>
              <p>
                Para registrar el Centro en la <strong>Secretaría de la Tercera Edad del Gobierno de la Ciudad de Buenos Aires</strong>, se modificaron los estatutos y se eligieron nuevas autoridades para el período 2000-2002. Esto se realizó en una Asamblea General Extraordinaria el <strong>16 de septiembre</strong>, donde se aprobaron los estatutos, se fijó la cuota mensual y se conformó la Comisión Directiva.
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  )
}
