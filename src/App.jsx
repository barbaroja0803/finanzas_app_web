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
  { src: asset('screen-7.png'), title: 'Widget del balance del mes actual' },
  { src: asset('screen-8.png'), title: 'Ingreso/Egresos' },
  { src: asset('screen-9.png'), title: 'Registro de pagos' }
];

const featureItems = [
  { title: 'Acceso rápido', description: 'Resumen semanal y mensual de tus finanzas.', image: screenshots[1].src },
  { title: 'Registro transacciones', description: 'Guarda tus ingresos y egresos de manera sencilla.', image: screenshots[3].src },
  { title: 'Filtros inteligentes', description: 'Encuentra movimientos por tipo o fecha.', image: screenshots[4].src },
  { title: 'Gráficas claras', description: 'Visualiza cómo se distribuyen tus gastos por categorías.', image: screenshots[2].src },
  { title: 'Widget del balance actual', description: 'Consulta el balance del mes actual de un vistazo.', image: screenshots[7].src },
  { title: 'Tabla de amortización', description: 'Define las cuotas y plazos de tus préstamos.', image: screenshots[5].src },
  { title: 'Próximos pagos', description: 'Visualiza los pagos pendientes y sus fechas.', image: screenshots[6].src },
  { title: 'Ingreso/Egresos', description: 'Consulta tus ingresos y egresos de manera detallada.', image: screenshots[8].src }
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const goPrev = () => setActiveSlide((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  const goNext = () => setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  const visibleScreens = Array.from({ length: 4 }, (_, offset) => screenshots[(activeSlide + offset) % screenshots.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-reveal-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="hero" id="inicio">
        <div className="topbar">
          <div className="brand">
            <img src={asset('icono.png')} alt="Icono de Econiqo" className="brand-icon" />
            <span>Econiqo</span>
          </div>
          <nav className="top-nav" aria-label="Secciones principales">
            <a href="#inicio">Inicio</a>
            <a href="#caracteristicas">Características</a>
            <a href="#screenshots">Capturas de pantalla</a>
          </nav>
        </div>

        <div className="container hero-content section-reveal" data-reveal-section>
          <div className="hero-copy">
            <p className="hero-lead">La forma más sencilla de gestionar<br /> tus finanzas personales</p>
            <h1 className="hero-app-name">Econiqo</h1>

            <div className="cta-row">
              <a className="store-btn appstore" href="https://apps.apple.com/ec/app/econiqo-finanzas-personales/id6760971564" aria-label="Descargar en App Store">
                <span className="store-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.57 12.63c.02 2.36 2.07 3.15 2.09 3.16-.02.06-.33 1.15-1.1 2.27-.67.97-1.37 1.95-2.47 1.97-1.08.02-1.43-.65-2.67-.65-1.24 0-1.63.63-2.65.67-1.05.04-1.85-1.05-2.53-2.01-1.4-2.01-2.46-5.68-1.03-8.17.71-1.24 1.98-2.03 3.35-2.05 1.04-.02 2.02.71 2.67.71.65 0 1.88-.87 3.17-.74.54.02 2.05.22 3.02 1.64-.08.05-1.8 1.05-1.77 3.2Zm-2.15-6.43c.56-.68.94-1.62.84-2.56-.81.03-1.79.54-2.38 1.22-.52.59-.97 1.55-.85 2.46.9.07 1.82-.46 2.39-1.12Z" />
                  </svg>
                </span>
                <span>
                  <small>Disponible en</small>
                  <strong>App Store</strong>
                </span>
              </a>
              {/* <a className="store-btn playstore" href="https://play.google.com/store/apps/details?id=app.econiqo.com" aria-label="Descargar en Google Play">
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
              </a> */}
            </div>
          </div>

          <div className="hero-showcase" aria-label="Vista previa de la app">
            <figure className="hero-shot hero-shot-left">
              <img src={asset('screen-1.png')} alt="Pantalla principal de Econiqo" loading="lazy" />
            </figure>
            <figure className="hero-shot hero-shot-center">
              <img src={asset('screen-2.png')} alt="Pantalla de resumen financiero" loading="lazy" />
            </figure>
            <figure className="hero-shot hero-shot-right">
              <img src={asset('screen-7.png')} alt="Widget del balance del mes" loading="lazy" />
            </figure>
          </div>
        </div>
      </header>

      <main>
        <section id="caracteristicas" className="features container section-reveal" data-reveal-section>
          <div className="features-col">
            {featureItems.slice(0, 4).map((item, index) => (
              <button
                key={item.title}
                className={`feature-btn ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
                onFocus={() => setActiveFeature(index)}
                type="button"
              >
                <span className="feature-icon" aria-hidden="true">◉</span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="features-center" aria-live="polite">
            <img src={featureItems[activeFeature].image} alt={featureItems[activeFeature].title} loading="lazy" />
          </div>

          <div className="features-col">
            {featureItems.slice(4).map((item, idx) => {
              const index = idx + 4;
              return (
                <button
                  key={item.title}
                  className={`feature-btn ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                  onFocus={() => setActiveFeature(index)}
                  type="button"
                >
                  <span className="feature-icon" aria-hidden="true">◉</span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section id="screenshots" className="gallery gallery-dark">
          <div className="container section-reveal" data-reveal-section>

            <div className="hero-slider dark-slider">
              <div className="slider-wrap">
                <button className="slider-arrow" onClick={goPrev} aria-label="Imagen anterior">‹</button>

                <div className="slider-viewport dark-viewport">
                  <div className="screens-row">
                    {visibleScreens.map((item, index) => (
                      <figure key={`${item.src}-${activeSlide}-${index}`} className={`screen-card ${index === 1 ? 'featured' : ''}`}>
                        <img className="screen-image" src={item.src} alt={item.title} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </div>

                <button className="slider-arrow" onClick={goNext} aria-label="Siguiente imagen">›</button>
              </div>
            </div>
          </div>
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
