import React from "react";

export default function Recorrida() {
  return (
    <main className="section">
      <div className="container">
        <h2>Recorrida virtual</h2>
        <p className="muted">
          Conocé instalaciones, talleres y espacios educativos.
        </p>
        <div className="grid cols-3" style={{ marginTop: 12 }}>
          <article className="card">
            <div className="body">
              <h3>Recorrida virtual por el colegio</h3>
              <div style={{ position: "relative", paddingTop: "56.25%" }}>
                <iframe
                  className="ytVideo"
                  src="https://www.youtube.com/embed/S4B7r3kew-4"
                  title="Recorrida virtual"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
