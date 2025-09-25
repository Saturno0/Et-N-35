import React from 'react'
import escudo from '../assets/Escudo.png'

const contactItems = [
  {
    label: "info@tecnica35.edu.ar",
    href: "mailto:info@tecnica35.edu.ar",
    icon: (
      <svg
        className="footer-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l8 4.8 8-4.8V8H4zm16 8V10l-8 4.8L4 10v6h16z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "+54 11 4567-5838",
    href: "tel:+541145675838",
    icon: (
      <svg
        className="footer-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.28 21 3 12.72 3 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.01l-2.2 2.22z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Av. Lope de Vega 2150, CABA",
    href: "https://maps.app.goo.gl/znT6JQepCSEJo9mk6",
    icon: (
      <svg
        className="footer-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 2a7 7 0 0 0-7 7c0 4.48 5.4 11.23 6.08 12a1.2 1.2 0 0 0 1.84 0C13.6 20.23 19 13.48 19 9a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={escudo} alt="Escudo ET35" />
          <div>
            <p>Escuela Técnica N° 35 “Ing. Eduardo Latzina”</p>
            <span>Automotores · Computación</span>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <ul>
            {contactItems.map(item => (
              <li key={item.label}>
                {item.icon}
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Escuela Técnica 35. Proyecto educativo de práctica.</p>
      </div>
    </footer>
  );
}
