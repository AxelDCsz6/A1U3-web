import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EQUIPO = [
  {
    id: 'axel',
    nombre: 'Axel Dueñas',
    rol: 'Fullstack Developer',
    email: 'axel@devcore.io',
    ciudad: 'Morelia, MX',
    github: 'github.com/axel-d',
    cvLink: '/axel',
    stack: {
      primary: ['React', 'Next.js', 'Node.js'],
      secondary: ['TypeScript', 'PostgreSQL', 'MongoDB'],
      accent: ['Docker', 'REST APIs', 'GraphQL'],
    },
    experiencia: [
      { anio: '2023 – hoy',   puesto: 'Lead Frontend',  empresa: 'Startup Fintech',   desc: 'Dashboard de métricas en tiempo real para +2 000 usuarios' },
      { anio: '2021 – 2023',  puesto: 'Dev Fullstack',  empresa: 'Agencia Digital',   desc: 'Desarrollo de e-commerce y sistemas de gestión de inventario' },
      { anio: '2020 – 2021',  puesto: 'Junior Frontend', empresa: 'Freelance',         desc: 'Sitios corporativos y landing pages para PyMEs locales' },
    ],
    formacion: [
      { titulo: 'Lic. en Ingeniería en Software',    inst: 'UNAM — 2020' },
      { titulo: 'Certificación AWS Cloud Practitioner', inst: 'Amazon Web Services — 2022' },
      { titulo: 'Meta Frontend Developer',           inst: 'Coursera — 2023' },
    ],
    proyectos: [
      { nombre: 'FinTrack App',  desc: 'Plataforma de seguimiento financiero personal con visualizaciones D3.js y sincronización en tiempo real vía WebSockets.' },
      { nombre: 'DevCore CMS',   desc: 'Sistema de gestión de contenido headless construido con Next.js y PostgreSQL, con soporte multi-idioma.' },
    ],
  },
  {
    id: 'jose',
    nombre: 'José Beltran',
    rol: 'Backend Developer',
    email: 'jose@devcore.io',
    ciudad: 'Morelia, MX',
    github: 'github.com/jose-b',
    cvLink: '/jose',
    stack: {
      primary: ['Python', 'Django', 'FastAPI'],
      secondary: ['AWS', 'PostgreSQL', 'Redis'],
      accent: ['Kubernetes', 'CI/CD', 'Terraform'],
    },
    experiencia: [
      { anio: '2022 – hoy',  puesto: 'Backend Engineer', empresa: 'SaaS B2B',       desc: 'Diseño de microservicios escalables con carga de +50 000 req/min' },
      { anio: '2020 – 2022', puesto: 'Dev Backend',      empresa: 'E-commerce',     desc: 'APIs de pagos, autenticación OAuth2 y procesamiento de pedidos' },
      { anio: '2019 – 2020', puesto: 'Intern Dev',       empresa: 'Consultoría TI', desc: 'Scripts de automatización y pipelines ETL para reportes BI' },
    ],
    formacion: [
      { titulo: 'Lic. en Ciencias de la Computación',      inst: 'UMSNH — 2020' },
      { titulo: 'AWS Solutions Architect Associate',        inst: 'Amazon Web Services — 2022' },
      { titulo: 'Google Cloud Professional Data Engineer',  inst: 'Google — 2023' },
    ],
    proyectos: [
      { nombre: 'CloudQueue',         desc: 'Sistema de colas distribuidas con SQS + Lambda para procesamiento asíncrono de facturas y notificaciones en tiempo real.' },
      { nombre: 'DevCore API Gateway', desc: 'Gateway centralizado con rate limiting, autenticación JWT y monitoreo con Prometheus y Grafana.' },
    ],
  },
];

function TeamCard({ persona, index, onOpen, onClose, isOpen }) {
  const cardRef = useRef(null);
  const slide2Ref = useRef(null);

  function handleMouseEnter() {
    if (!cardRef.current || !slide2Ref.current) return;
    const cardRect = cardRef.current.getBoundingClientRect();
    const slide2Rect = slide2Ref.current.getBoundingClientRect();
    const accentLeft = cardRect.left - slide2Rect.left;
    slide2Ref.current.style.setProperty('--accent-left', accentLeft + 'px');
    slide2Ref.current.style.setProperty('--accent-width', cardRect.width + 'px');
    slide2Ref.current.style.height = 'auto';
    const fullH = slide2Ref.current.scrollHeight + 36;
    slide2Ref.current.style.height = '0';
    slide2Ref.current.getBoundingClientRect(); // reflow
    slide2Ref.current.style.height = fullH + 'px';
    onOpen(fullH);
  }

  function handleMouseLeave() {
    if (slide2Ref.current) slide2Ref.current.style.height = '0';
    onClose();
  }

  return (
    <div
      className={`card${isOpen ? ' is-open' : ''}`}
      data-index={index}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide 1 — cara frontal */}
      <div className="slide slide1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <h3>{persona.nombre}</h3>
            <span className="role-badge">{persona.rol}</span>
          </div>
        </div>
      </div>

      {/* Slide 2 — panel expandido */}
      <div className="slide slide2" ref={slide2Ref}>
        <div className="content expanded-content">

          <div className="cv-header">
            <div className="cv-title">
              <h3>{persona.nombre}</h3>
              <span className="cv-role">{persona.rol.toUpperCase()}</span>
            </div>
            <div className="cv-contact">
              <span><i className="fa fa-envelope"></i> {persona.email}</span>
              <span><i className="fa fa-map-marker"></i> {persona.ciudad}</span>
              <span><i className="fa fa-github"></i> {persona.github}</span>
            </div>
          </div>

          <div className="cv-grid">

            <div className="cv-section">
              <h4><i className="fa fa-code"></i> Stack Técnico</h4>
              <div className="skill-tags">
                {persona.stack.primary.map((t) => <span key={t} className="tag tag-primary">{t}</span>)}
                {persona.stack.secondary.map((t) => <span key={t} className="tag tag-secondary">{t}</span>)}
                {persona.stack.accent.map((t) => <span key={t} className="tag tag-accent">{t}</span>)}
              </div>
            </div>

            <div className="cv-section">
              <h4><i className="fa fa-briefcase"></i> Experiencia</h4>
              <div className="timeline">
                {persona.experiencia.map((e) => (
                  <div key={e.anio} className="tl-item">
                    <span className="tl-year">{e.anio}</span>
                    <div className="tl-body">
                      <strong>{e.puesto}</strong> — {e.empresa}<br />
                      <small>{e.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cv-section">
              <h4><i className="fa fa-graduation-cap"></i> Formación</h4>
              {persona.formacion.map((f) => (
                <div key={f.titulo} className="edu-item">
                  <strong>{f.titulo}</strong>
                  <span>{f.inst}</span>
                </div>
              ))}
            </div>

            <div className="cv-section">
              <h4><i className="fa fa-rocket"></i> Proyectos Destacados</h4>
              {persona.proyectos.map((p) => (
                <div key={p.nombre} className="project-item">
                  <span className="project-name">{p.nombre}</span>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="cv-cta">
            <Link to={persona.cvLink}>Ver CV completo →</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [expandHeight, setExpandHeight] = useState(0);
  const contenedorRef = useRef(null);
  const contentTagRef = useRef(null);

  useEffect(() => {
    if (contenedorRef.current) {
      contenedorRef.current.style.marginBottom = openIndex !== null ? expandHeight + 'px' : '0';
    }
    if (contentTagRef.current) {
      contentTagRef.current.style.paddingBottom = openIndex !== null ? '0' : '';
    }
  }, [openIndex, expandHeight]);

  // Scroll reveal
  useEffect(() => {
    const targets = document.querySelectorAll('.card, .seccion-cta, footer');
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 0.08) + 's';
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contenido">

      {/* Hero */}
      <div className="seccion">
        <h1>Equipo de<br />desarrollo</h1>
        <p>
          Somos un equipo orientado a proyectos con implementación integral y conocimientos
          en diversas áreas de la informática: desde arquitectura de sistemas hasta interfaces
          de usuario. Construimos software que escala contigo.
        </p>
        <p id="ancla"></p>
      </div>

      {/* Quiénes somos */}
      <div id="integrantes" className="content-tag" ref={contentTagRef}>
        <h1>¿Quiénes somos?</h1>
        <p className="subtitle">
          Personas apasionadas por la tecnología, comprometidas con la calidad del código
          y enfocadas en entregar resultados concretos en cada proyecto.
        </p>

        <div className="contenedor-tarjetas" ref={contenedorRef}>
          {EQUIPO.map((persona, index) => (
            <TeamCard
              key={persona.id}
              persona={persona}
              index={index}
              isOpen={openIndex === index}
              onOpen={(h) => { setOpenIndex(index); setExpandHeight(h); }}
              onClose={() => { setOpenIndex(null); setExpandHeight(0); }}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="seccion-cta">
        <p>¿Listo para empezar con tu proyecto?</p>
        <Link to="/servicios">Mira nuestros servicios</Link>
      </div>

    </div>
  );
}
