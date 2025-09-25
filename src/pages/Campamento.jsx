import React from "react";

const campSections = [
  {
    title: "Orígenes de las excursiones",
    content: [
      "En 1961 comenzaron las excursiones a Bariloche con fines recreativos. Durante los años siguientes se repitieron los viajes, pero tras un clima poco favorable surgió la idea de adquirir un terreno permanente para edificar y tener dónde cocinar y comer, guarecidos de la lluvia.",
    ],
  },
  {
    title: "Gestiones y terreno propio",
    content: [
      "Las gestiones ante Parques Nacionales fueron intensas y porfiadas, hasta que, por la Resolución 01886 otorgada el 16 de septiembre de 1964, se asignó a la escuela el lote N° 80 de la Villa Mascardi, de 109 x 390 metros, con fines de utilidad pública y un plazo de 3 años para edificar.",
    ],
  },
  {
    title: "Infraestructura actual",
    content: [
      "El campamento cuenta hoy con dormitorios, cocina, cabañas, un amplio comedor, despensa, sanitarios, sala de duchas, una oficina de enfermería y servicios de energía eléctrica y calefacción a gas.",
    ],
  },
  {
    title: "Un espacio llamado esperanza",
    content: [
      "Así surgió el \"Campamento Suyai\", que en lengua araucana significa \"esperanza\". Hasta el año 2000 concurrieron aproximadamente 6415 alumnos, distribuidos en 118 grupos de verano y 36 de invierno.",
    ],
  },
];

const galleryImages = [
  "https://picsum.photos/seed/suyai1/600/400",
  "https://picsum.photos/seed/suyai2/600/400",
  "https://picsum.photos/seed/suyai3/600/400",
  "https://picsum.photos/seed/suyai4/600/400",
  "https://picsum.photos/seed/suyai5/600/400",
  "https://picsum.photos/seed/suyai6/600/400",
];

export default function Campamento() {
  return (
    <main className="section camp-page">
      <div className="container">
        <header className="camp-header">
          <h1>Campamento Suyai</h1>
          <p className="muted">
            Experiencia educativa en Villa Mascardi (Lote 80), a 31 km de Bariloche.
          </p>
          <div className="camp-badges">
            <span className="badge">Desde 1961</span>
            <span className="badge">Más de 6400 alumnos</span>
            <span className="badge">Infraestructura propia</span>
          </div>
        </header>

        <div className="camp-grid">
          {campSections.map((section) => (
            <article key={section.title} className="camp-card">
              <h2>{section.title}</h2>
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="camp-highlight">
          <p>
            “El Campamento Suyai es un proyecto colectivo que mantiene viva la tradición de la escuela: aprender haciendo, colaborar y convivir en comunidad en un entorno natural privilegiado.”
          </p>
        </div>

        <div className="camp-gallery">
          <h3>Postales del Suyai</h3>
          <div className="gallery">
            {galleryImages.map((src, index) => (
              <img key={src} src={src} alt={`Campamento Suyai ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
