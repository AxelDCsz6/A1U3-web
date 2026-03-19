import { Link } from 'react-router-dom';

export default function AxelPage() {
  return (
    <div className="cv-page-wrap">
      <nav className="cv-navbar">
        <Link to="/" className="cv-brand">DEVCORE</Link>
        <Link to="/#integrantes" className="cv-back">
          <i className="fa fa-arrow-left"></i> Equipo
        </Link>
      </nav>

      <main className="cv-page-layout">

        <aside className="cv-sidebar" data-initial="A">
          <div className="cv-sidebar-inner">
            <i className="fa fa-user-circle cv-avatar"></i>
            <h1 className="cv-name">Axel<br />Dueñas</h1>
            <span className="role-badge">Fullstack Developer</span>
            <div className="cv-accent-line"></div>
            <div className="cv-contacts">
              <span className="cv-contact-row"><i className="fa fa-envelope"></i> axel@devcore.io</span>
              <span className="cv-contact-row"><i className="fa fa-map-marker"></i> Morelia, MX</span>
              <span className="cv-contact-row"><i className="fa fa-github"></i> github.com/axel-d</span>
            </div>
            <p className="cv-bio">Fullstack con foco en arquitecturas escalables y experiencia de usuario. Construyo desde la API hasta el pixel.</p>
          </div>
        </aside>

        <section className="cv-body">

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-code"></i> Stack Técnico</h4>
            <div className="p-skill-tags">
              <span className="tag tag-primary">React</span>
              <span className="tag tag-primary">Next.js</span>
              <span className="tag tag-primary">Node.js</span>
              <span className="tag tag-secondary">TypeScript</span>
              <span className="tag tag-secondary">PostgreSQL</span>
              <span className="tag tag-secondary">MongoDB</span>
              <span className="tag tag-accent">Docker</span>
              <span className="tag tag-accent">REST APIs</span>
              <span className="tag tag-accent">GraphQL</span>
            </div>
          </div>

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-briefcase"></i> Experiencia</h4>
            <div className="p-timeline">
              <div className="p-tl-item">
                <span className="p-tl-year">2023 – hoy</span>
                <div className="p-tl-body"><strong>Lead Frontend</strong> — Startup Fintech<br /><small>Dashboard de métricas en tiempo real para +2 000 usuarios</small></div>
              </div>
              <div className="p-tl-item">
                <span className="p-tl-year">2021 – 2023</span>
                <div className="p-tl-body"><strong>Dev Fullstack</strong> — Agencia Digital<br /><small>E-commerce y sistemas de gestión de inventario</small></div>
              </div>
              <div className="p-tl-item">
                <span className="p-tl-year">2020 – 2021</span>
                <div className="p-tl-body"><strong>Junior Frontend</strong> — Freelance<br /><small>Sitios corporativos y landing pages para PyMEs locales</small></div>
              </div>
            </div>
          </div>

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-graduation-cap"></i> Formación</h4>
            <div className="p-edu">
              <div className="p-edu-item">
                <strong>Lic. en Ingeniería en Software</strong>
                <span>UNAM — 2020</span>
              </div>
              <div className="p-edu-item">
                <strong>Certificación AWS Cloud Practitioner</strong>
                <span>Amazon Web Services — 2022</span>
              </div>
              <div className="p-edu-item">
                <strong>Meta Frontend Developer</strong>
                <span>Coursera — 2023</span>
              </div>
            </div>
          </div>

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-rocket"></i> Proyectos Destacados</h4>
            <div className="p-projects">
              <div className="p-project">
                <span className="p-project-name">FinTrack App</span>
                <p>Plataforma de seguimiento financiero personal con visualizaciones D3.js y sincronización en tiempo real vía WebSockets.</p>
              </div>
              <div className="p-project">
                <span className="p-project-name">DevCore CMS</span>
                <p>Sistema de gestión de contenido headless construido con Next.js y PostgreSQL, con soporte multi-idioma.</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
