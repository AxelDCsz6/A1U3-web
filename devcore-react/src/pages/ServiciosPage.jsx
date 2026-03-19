import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { SERVICIOS, LS_KEY } from '../data/servicios';

const FILTROS = [
  { filter: 'all',  text: 'Todos los servicios' },
  { filter: 'axel', text: 'Axel Dueñas'         },
  { filter: 'jose', text: 'José Beltran'         },
];

export default function ServiciosPage() {
  const [filtro, setFiltro] = useState('all');
  const [catalogo, setCatalogo] = useState(SERVICIOS);

  // Cargar servicios extra desde localStorage al montar
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const extras = JSON.parse(raw);
      setCatalogo([...SERVICIOS, ...extras]);
    }
  }, []);

  // Filtrar por ingeniero
  const visibles = filtro === 'all'
    ? catalogo
    : catalogo.filter((s) => s.ingenieros.includes(filtro));

  return (
    <div className="contenido">

      {/* Hero */}
      <div className="seccion">
        <h1>Nuestros<br />servicios</h1>
        <p>
          Soluciones de ingeniería diseñadas para cada etapa de tu proyecto.
          Transparencia de precios, tecnología de primer nivel y un equipo
          comprometido con los resultados.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-num">{catalogo.length}</span>
          <span className="stat-label">Servicios disponibles</span>
        </div>
        <div className="stat-sep"></div>
        <div className="stat">
          <span className="stat-num">2</span>
          <span className="stat-label">Ingenieros especializados</span>
        </div>
        <div className="stat-sep"></div>
        <div className="stat">
          <span className="stat-num">100%</span>
          <span className="stat-label">Consulta inicial gratuita</span>
        </div>
      </div>

      {/* Catálogo */}
      <section className="servicios-seccion">
        <div className="servicios-header">
          <h1>Catálogo completo</h1>
          <p className="subtitle">
            Los precios son referenciales y se ajustan al alcance de cada proyecto.
            Incluye consulta inicial sin costo.
          </p>
        </div>

        {/* Filtros */}
        <div className="filtros">
          {FILTROS.map(({ filter, text }) => (
            <button
              key={filter}
              className={`filtro-btn${filtro === filter ? ' activo' : ''}`}
              onClick={() => setFiltro(filter)}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Leyenda */}
        <div className="servicios-leyenda">
          <div className="leyenda-item">
            <span className="dot dot-popular"></span>
            <span>Más contratado</span>
          </div>
          <div className="leyenda-item">
            <span className="dot dot-recomendado"></span>
            <span>Recomendado</span>
          </div>
        </div>

        {/* Grid */}
        <div className="servicios-grid" id="servicios-grid">
          {visibles.map((s, i) => (
            <ServiceCard key={`${s.nombre}-${i}`} servicio={s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="seccion-cta">
        <p>¿Tienes un proyecto en mente?</p>
        <Link to="/#integrantes">Habla con el equipo</Link>
      </div>

      {/* Agregar servicio */}
      <div className="seccion-agregar">
        <Link to="/alta" className="btn-agregar-servicio">
          <i className="fa-solid fa-plus"></i> Agregar servicio
        </Link>
      </div>

    </div>
  );
}
