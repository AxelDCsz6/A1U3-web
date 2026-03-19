import { Link } from 'react-router-dom';

export default function JosePage() {
  return (
    <div className="cv-page-wrap">
      <nav className="cv-navbar">
        <Link to="/" className="cv-brand">DEVCORE</Link>
        <Link to="/#integrantes" className="cv-back">
          <i className="fa fa-arrow-left"></i> Equipo
        </Link>
      </nav>

      <main className="cv-page-layout">

        <aside className="cv-sidebar" data-initial="J">
          <div className="cv-sidebar-inner">
            <i className="fa fa-user-circle cv-avatar"></i>
            <h1 className="cv-name">José<br />Beltran</h1>
            <span className="role-badge">Backend Developer</span>
            <div className="cv-accent-line"></div>
            <div className="cv-contacts">
              <span className="cv-contact-row"><i className="fa fa-envelope"></i> jose@devcore.io</span>
              <span className="cv-contact-row"><i className="fa fa-map-marker"></i> Morelia, MX</span>
              <span className="cv-contact-row"><i className="fa fa-github"></i> github.com/jose-b</span>
            </div>
            <p className="cv-bio">Backend engineer especializado en sistemas distribuidos y cloud. Diseño infraestructuras que escalan sin drama.</p>
          </div>
        </aside>

        <section className="cv-body">

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-code"></i> Stack Técnico</h4>
            <div className="p-skill-tags">
              <span className="tag tag-primary">Python</span>
              <span className="tag tag-primary">Django</span>
              <span className="tag tag-primary">FastAPI</span>
              <span className="tag tag-secondary">AWS</span>
              <span className="tag tag-secondary">PostgreSQL</span>
              <span className="tag tag-secondary">Redis</span>
              <span className="tag tag-accent">Kubernetes</span>
              <span className="tag tag-accent">CI/CD</span>
              <span className="tag tag-accent">Terraform</span>
            </div>
          </div>

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-briefcase"></i> Experiencia</h4>
            <div className="p-timeline">
              <div className="p-tl-item">
                <span className="p-tl-year">2022 – hoy</span>
                <div className="p-tl-body"><strong>Backend Engineer</strong> — SaaS B2B<br /><small>Microservicios escalables con carga de +50 000 req/min</small></div>
              </div>
              <div className="p-tl-item">
                <span className="p-tl-year">2020 – 2022</span>
                <div className="p-tl-body"><strong>Dev Backend</strong> — E-commerce<br /><small>APIs de pagos, autenticación OAuth2 y procesamiento de pedidos</small></div>
              </div>
              <div className="p-tl-item">
                <span className="p-tl-year">2019 – 2020</span>
                <div className="p-tl-body"><strong>Intern Dev</strong> — Consultoría TI<br /><small>Scripts de automatización y pipelines ETL para reportes BI</small></div>
              </div>
            </div>
          </div>

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-graduation-cap"></i> Formación</h4>
            <div className="p-edu">
              <div className="p-edu-item">
                <strong>Lic. en Ciencias de la Computación</strong>
                <span>UMSNH — 2020</span>
              </div>
              <div className="p-edu-item">
                <strong>AWS Solutions Architect Associate</strong>
                <span>Amazon Web Services — 2022</span>
              </div>
              <div className="p-edu-item">
                <strong>Google Cloud Professional Data Engineer</strong>
                <span>Google — 2023</span>
              </div>
            </div>
          </div>

          <div className="cv-cell">
            <h4 className="cv-cell-title"><i className="fa fa-rocket"></i> Proyectos Destacados</h4>
            <div className="p-projects">
              <div className="p-project">
                <span className="p-project-name">CloudQueue</span>
                <p>Sistema de colas distribuidas con SQS + Lambda para procesamiento asíncrono de facturas y notificaciones en tiempo real.</p>
              </div>
              <div className="p-project">
                <span className="p-project-name">DevCore API Gateway</span>
                <p>Gateway centralizado con rate limiting, autenticación JWT y monitoreo con Prometheus y Grafana.</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
