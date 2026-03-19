import { makeFoto } from '../data/servicios';

const NOMBRES = { axel: 'Axel Dueñas', jose: 'José Beltran' };

export default function ServiceCard({ servicio }) {
  const { nombre, descripcion, precio, precioDisplay, precioPrefix, precioSuffix,
          iconClass, ingenieros, badge, gradFrom, gradTo } = servicio;

  const esPremium = precio > 1000;

  const clases = ['servicio-card', badge, esPremium ? 'premium' : '']
    .filter(Boolean).join(' ');

  return (
    <article className={clases} data-engineers={ingenieros.join(' ')}>
      {badge && (
        <span className={`servicio-badge badge-${badge}`}>
          {badge === 'popular' ? 'Más contratado' : 'Recomendado'}
        </span>
      )}

      <img
        className="servicio-foto"
        src={makeFoto(gradFrom, gradTo)}
        alt={`Imagen de ${nombre}`}
      />

      <div className="servicio-icon">
        <i className={iconClass}></i>
      </div>

      <h2 className="servicio-nombre">{nombre}</h2>
      <div className="servicio-sep"></div>
      <p className="servicio-desc">{descripcion}</p>

      <div className="servicio-precio">
        {precioPrefix && <span className="precio-label">{precioPrefix}</span>}
        <span className="precio-valor">{precioDisplay}</span>
        {precioSuffix && <span className="precio-label">{precioSuffix}</span>}
      </div>

      <div className="ingenieros">
        {ingenieros.map((eng) => (
          <span key={eng} className="ingeniero-tag" data-eng={eng}>
            <i className="fa-solid fa-circle-user"></i> {NOMBRES[eng] || eng}
          </span>
        ))}
      </div>
    </article>
  );
}
