import React, { useEffect, useState } from 'react';

const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

const screenshots = [
  { src: asset('screen-1.png'), title: 'Econiqo' },
  { src: asset('screen-2.png'), title: 'Dashboard y resumen' },
  { src: asset('screen-3.png'), title: 'Distribución de gastos por categorías' },
  { src: asset('screen-4.png'), title: 'Registro de transacciones' },
  { src: asset('screen-4-1.png'), title: 'Transacciones, ingresos y egresos' },
  { src: asset('screen-5.png'), title: 'Tabla de amortización' },
  { src: asset('screen-6.png'), title: 'Proximos pagos' },
  { src: asset('screen-7.png'), title: 'Widget del balance del mes actual' }
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const goPrev = () => setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  const goNext = () => setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="page">
      <header className="hero">


        <div className="container hero-content">
          <div className="hero-copy">  
            <h1 className="hero-title">
              <img src={asset('icono.png')} alt="Icono de Econiqo" className="brand-icon hero-title-icon" />
              <span className="hero-title-text">Econiqo</span>
            </h1>
            <p className="kicker">Finanzas personales - Inteligencia para tu dinero</p>
            <p className="description">
              Aplicación para gestionar de manera integral las finanzas personales,
              permitiendo registrar y controlar ingresos y egresos de forma segura,
              sin depender de conexión a internet ni compartir información con terceros.
              La información se almacena y procesa localmente, garantizando privacidad,
              autonomía y total confidencialidad en la administración financiera del usuario.
            </p>

            <ul className="trust-points">
              <li>Datos almacenados localmente</li>
              <li>Sin nube obligatoria</li>
              <li>Sin vender tu información</li>
            </ul>

            <div className="cta-row">
              <a className="store-btn appstore" href="#" aria-label="Descargar en App Store">
                <span className="store-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.57 12.63c.02 2.36 2.07 3.15 2.09 3.16-.02.06-.33 1.15-1.1 2.27-.67.97-1.37 1.95-2.47 1.97-1.08.02-1.43-.65-2.67-.65-1.24 0-1.63.63-2.65.67-1.05.04-1.85-1.05-2.53-2.01-1.4-2.01-2.46-5.68-1.03-8.17.71-1.24 1.98-2.03 3.35-2.05 1.04-.02 2.02.71 2.67.71.65 0 1.88-.87 3.17-.74.54.02 2.05.22 3.02 1.64-.08.05-1.8 1.05-1.77 3.2Zm-2.15-6.43c.56-.68.94-1.62.84-2.56-.81.03-1.79.54-2.38 1.22-.52.59-.97 1.55-.85 2.46.9.07 1.82-.46 2.39-1.12Z" />
                  </svg>
                </span>
                <span>
                  <small>Disponible en</small>
                  <strong>App Store</strong>
                </span>
                <span className="store-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </a>
              <a className="store-btn playstore" href="#" aria-label="Descargar en Google Play">
                <span className="store-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <polygon points="3,2 14,12 3,22" fill="#34A853" />
                    <polygon points="14,12 18,8.8 21,10.5 17.2,12.8" fill="#FBBC04" />
                    <polygon points="14,12 17.2,12.8 21,14.9 18,16.6" fill="#EA4335" />
                    <polygon points="3,2 10.2,8.5 14,12 10.2,15.5 3,22" fill="#4285F4" />
                  </svg>
                </span>
                <span>
                  <small>Disponible en</small>
                  <strong>Google Play</strong>
                </span>
                <span className="store-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

        <section className="hero-slider">
          <div className="slider-wrap">
            <button className="slider-arrow" onClick={goPrev} aria-label="Imagen anterior">‹</button>

            <div className="slider-viewport">
              <div className="slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {screenshots.map((item, index) => (
                  <figure key={item.src} className="slide-item">
                    <img className="slide-image" src={item.src} alt={`Pantalla ${index + 1} de Econiqo`} loading="lazy" />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <button className="slider-arrow" onClick={goNext} aria-label="Siguiente imagen">›</button>
          </div>

          <div className="slider-dots" aria-label="Navegación del slider">
            {screenshots.map((item, index) => (
              <button
                key={item.src}
                className={`dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </section>
        </div>
      </header>

      <main>
        <section className="features container">
          <article>
            <h3>100% Privado</h3>
            <p>Los datos viven en tu dispositivo. Sin compartir información con terceros.</p>
          </article>
          <article>
            <h3>Funciona Offline</h3>
            <p>Registra y consulta tus movimientos sin internet, en cualquier momento.</p>
          </article>
          <article>
            <h3>Control Total</h3>
            <p>Visualiza ingresos y egresos para tomar mejores decisiones financieras.</p>
          </article>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Econiqo - Finanzas personales</p>
          <p>Privacidad, autonomía y control financiero.</p>
        </div>
      </footer>
    </div>
  );
}
