import React from 'react'

const historySections = [
  {
    title: '🏗️ Fundación y Primeros Años',
    paragraphs: [
      'La escuela inició su funcionamiento el 23 de abril de 1951 con el nombre de "Escuela Fábrica de la Nación Automotores". Al año siguiente se le agregó el número 136.',
      'Por iniciativa del entonces director Sr. Antonino Di Grillo, a mediados de 1953, la denominación de la escuela fue la siguiente: "Escuela Fábrica de la Nación Automotores N° 136 Eva Perón".',
      'El CONET ordenó reordenar el número de las escuelas según la fecha de creación y la ciudad de su asentamiento. Desde 1966 pasa a llamarse: "Escuela de Educación Técnica N° 35 \"Ingeniero Eduardo Latzina\"".',
    ],
  },
  {
    title: '🏢 El Edificio',
    paragraphs: [
      'El edificio, que fue construido a partir de 1948, entregado parcialmente en 1951 y recién terminado a mediados de 1952, daba muestras de solidez, que aún hoy se comprueban.',
      'Contaba en un principio con 10 aulas, 2 laboratorios, un anfiteatro, 2 aulas para clases de dibujo, un salón de biblioteca, ambientes para dirección, secretaría y tesorería, 2 oficinas de preceptores, una sala con sus sanitarios para profesores y 2 habitaciones para consultorios.',
      'Un amplio taller, con cabina de comando para el jefe y fosa para inspección de vehículos, depósito de materiales de dos ambientes, 2 vestuarios para alumnos y maestros, sala de duchas con caldera, sanitarios completos y amplio comedor con cocina moderna. Contaba también con un patio cubierto y 2 descubiertos junto con una playa para estacionamiento.',
    ],
  },
  {
    title: '🔧 Modernización y Mejoras',
    paragraphs: [
      'Al edificio original se le hicieron significativos cambios durante las décadas siguientes: edificación de nuevas aulas, construcción de galpones para nuevas especialidades tales como herrería, mejoras en los pisos e incorporación de nuevas maquinarias.',
      'Se optimizaron los espacios de taller, se construyeron nuevos sanitarios y se mejoró la ventilación y el alumbrado para acompañar el crecimiento de la matrícula.',
      'La escuela cuenta con una importante cantidad de herramientas, que con el tiempo se han ido actualizando gracias al trabajo de docentes y cooperadores.',
    ],
  },
  {
    title: '💻 Era Digital',
    paragraphs: [
      'En 1983, la escuela participa de un nuevo proyecto e incorpora por primera vez en su historia material de computación, constituido por 6 computadoras.',
      'Al año siguiente se incorpora la especialidad de Computación junto con otras 12 nuevas unidades actualizadas, ampliando la propuesta educativa.',
      'Desde ese momento hasta la fecha, han sido ingentes los esfuerzos de los cooperadores por mantener dos laboratorios actualizados y preparados para la formación técnica.',
    ],
  },
]

export default function Historia(){
  return (
    <main className="section historia-page">
      <div className="container">
        <header className="historia-header">
          <h1>Nuestra historia</h1>
          <p className="muted">
            Desde 1951 formamos técnicos en automotores y computación con infraestructura en constante evolución.
          </p>
        </header>
        <div className="historia-grid">
          {historySections.map((section) => (
            <article key={section.title} className="historia-block">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
