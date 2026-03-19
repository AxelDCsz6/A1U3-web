import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TEMAS, ICONOS, LS_KEY } from '../data/servicios';

const CAMPOS_INIT = {
  nombre: '', descripcion: '', precio: '',
  tipoPrecio: 'fijo', badge: '', icono: ICONOS[0].value,
  tema: '', ingenieros: [],
};

const ERRORES_INIT = {
  nombre: '', descripcion: '', precio: '', ingenieros: '', tema: '',
};

export default function AltaPage() {
  const navigate = useNavigate();
  const [campos, setCampos] = useState(CAMPOS_INIT);
  const [errores, setErrores] = useState(ERRORES_INIT);
  const [exito, setExito] = useState('');

  // ── Helpers de validación ──────────────────────────────────
  function validarNombre(val = campos.nombre) {
    if (!val.trim()) return 'El nombre del servicio es obligatorio.';
    if (val.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
    return '';
  }
  function validarDescripcion(val = campos.descripcion) {
    if (!val.trim()) return 'La descripción es obligatoria.';
    if (val.trim().length < 10) return 'La descripción debe tener al menos 10 caracteres.';
    return '';
  }
  function validarPrecio(val = campos.precio) {
    if (val === '') return 'El precio es obligatorio.';
    const n = Number(val);
    if (isNaN(n) || n < 1) return 'El precio debe ser mayor a $0.';
    if (n > 99999) return 'El precio no puede superar $99,999.';
    return '';
  }
  function validarIngenieros(val = campos.ingenieros) {
    if (val.length === 0) return 'Selecciona al menos un ingeniero responsable.';
    return '';
  }
  function validarTema(val = campos.tema) {
    if (!val) return 'Selecciona un tema visual para la tarjeta.';
    return '';
  }

  // ── Manejo de cambios ──────────────────────────────────────
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setCampos((prev) => ({
        ...prev,
        ingenieros: checked
          ? [...prev.ingenieros, value]
          : prev.ingenieros.filter((v) => v !== value),
      }));
      setErrores((prev) => ({ ...prev, ingenieros: '' }));
    } else {
      setCampos((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    const validators = { nombre: validarNombre, descripcion: validarDescripcion, precio: validarPrecio, tema: validarTema };
    if (validators[name]) {
      setErrores((prev) => ({ ...prev, [name]: validators[name](value) }));
    }
  }

  // ── Envío del formulario ───────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault();

    const nuevosErrores = {
      nombre:      validarNombre(),
      descripcion: validarDescripcion(),
      precio:      validarPrecio(),
      ingenieros:  validarIngenieros(),
      tema:        validarTema(),
    };
    setErrores(nuevosErrores);

    const hayError = Object.values(nuevosErrores).some(Boolean);
    if (hayError) return;

    const tema = TEMAS.find((t) => t.value === campos.tema);
    const precio = Number(campos.precio);
    const precioDisplay = '$' + precio.toLocaleString('es-MX');
    const precioPrefix = campos.tipoPrecio === 'fijo' ? 'desde' : '';
    const precioSuffix = campos.tipoPrecio === 'hora' ? '/ hora' : campos.tipoPrecio === 'mes' ? '/ mes' : '';

    const nuevoServicio = {
      nombre:       campos.nombre.trim(),
      descripcion:  campos.descripcion.trim(),
      precio,
      precioDisplay,
      precioPrefix,
      precioSuffix,
      iconClass:    campos.icono,
      ingenieros:   campos.ingenieros,
      badge:        campos.badge,
      gradFrom:     tema.gradFrom,
      gradTo:       tema.gradTo,
    };

    // localStorage.getItem → JSON.parse → push → JSON.stringify → localStorage.setItem
    const raw = localStorage.getItem(LS_KEY);
    const lista = raw ? JSON.parse(raw) : [];
    lista.push(nuevoServicio);
    localStorage.setItem(LS_KEY, JSON.stringify(lista));

    setExito(`¡Servicio "${nuevoServicio.nombre}" guardado correctamente! Redirigiendo...`);
    setCampos(CAMPOS_INIT);

    setTimeout(() => navigate('/servicios'), 2000);
  }

  const temaActual = TEMAS.find((t) => t.value === campos.tema);

  return (
    <div className="alta-wrap">
      <div className="alta-container">

        <Link to="/" className="alta-volver">
          <i className="fa-solid fa-arrow-left"></i> Volver al catálogo
        </Link>

        <h1 className="alta-titulo">Agregar servicio</h1>
        <p className="alta-subtitulo">
          Completa el formulario para publicar un nuevo servicio en el catálogo.
          Los campos marcados con <strong>*</strong> son obligatorios.
        </p>

        {exito && <div className="msg-exito visible" role="alert">{exito}</div>}

        <form className="alta-form" onSubmit={handleSubmit} noValidate>

          {/* Nombre */}
          <div className="campo-grupo">
            <label htmlFor="nombre">Nombre del servicio *</label>
            <input
              type="text" id="nombre" name="nombre"
              value={campos.nombre} onChange={handleChange} onBlur={handleBlur}
              placeholder="Ej: Desarrollo de App Móvil"
              maxLength={80} autoComplete="off"
            />
            <span className="campo-hint">Entre 3 y 80 caracteres.</span>
            {errores.nombre && <span className="campo-error" role="alert">{errores.nombre}</span>}
          </div>

          {/* Descripción */}
          <div className="campo-grupo">
            <label htmlFor="descripcion">Descripción *</label>
            <textarea
              id="descripcion" name="descripcion"
              value={campos.descripcion} onChange={handleChange} onBlur={handleBlur}
              placeholder="Describe en qué consiste el servicio..."
              maxLength={300} rows={4}
            />
            <div className="char-count">{campos.descripcion.length} / 300</div>
            {errores.descripcion && <span className="campo-error" role="alert">{errores.descripcion}</span>}
          </div>

          {/* Precio + Tipo */}
          <div className="campo-fila">
            <div className="campo-grupo">
              <label htmlFor="precio">Precio (MXN) *</label>
              <input
                type="number" id="precio" name="precio"
                value={campos.precio} onChange={handleChange} onBlur={handleBlur}
                placeholder="Ej: 1500" min={1} max={99999} step={1}
              />
              <span className="campo-hint">Entre $1 y $99,999.</span>
              {errores.precio && <span className="campo-error" role="alert">{errores.precio}</span>}
            </div>

            <div className="campo-grupo">
              <label htmlFor="tipoPrecio">Modalidad de precio</label>
              <div className="select-wrap">
                <select id="tipoPrecio" name="tipoPrecio" value={campos.tipoPrecio} onChange={handleChange}>
                  <option value="fijo">Precio fijo (desde $X)</option>
                  <option value="hora">Por hora (/ hora)</option>
                  <option value="mes">Por mes (/ mes)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Ingenieros */}
          <div className="campo-grupo">
            <label>Ingeniero(s) responsable(s) *</label>
            <div className="check-grupo">
              {[{ val: 'axel', label: 'Axel Dueñas' }, { val: 'jose', label: 'José Beltran' }].map(({ val, label }) => (
                <label key={val} className="check-item">
                  <input
                    type="checkbox" name="ingenieros" value={val}
                    checked={campos.ingenieros.includes(val)}
                    onChange={handleChange}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {errores.ingenieros && <span className="campo-error" role="alert">{errores.ingenieros}</span>}
          </div>

          <div className="form-sep"></div>

          {/* Badge + Ícono */}
          <div className="campo-fila">
            <div className="campo-grupo">
              <label htmlFor="badge">Destacado</label>
              <div className="select-wrap">
                <select id="badge" name="badge" value={campos.badge} onChange={handleChange}>
                  <option value="">Sin destacado</option>
                  <option value="popular">Más contratado</option>
                  <option value="recomendado">Recomendado</option>
                </select>
              </div>
            </div>

            <div className="campo-grupo">
              <label htmlFor="icono">Ícono</label>
              <div className="select-wrap">
                <select id="icono" name="icono" value={campos.icono} onChange={handleChange}>
                  {ICONOS.map((ic) => (
                    <option key={ic.value} value={ic.value}>{ic.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Tema visual */}
          <div className="campo-grupo">
            <label htmlFor="tema">Tema visual de la tarjeta *</label>
            <div className="select-wrap">
              <select id="tema" name="tema" value={campos.tema} onChange={handleChange} onBlur={handleBlur}>
                <option value="">Selecciona un tema...</option>
                {TEMAS.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            <div
              className="tema-preview"
              style={temaActual
                ? { background: `linear-gradient(135deg, ${temaActual.gradFrom} 0%, ${temaActual.gradTo} 100%)` }
                : {}}
            />
            {errores.tema && <span className="campo-error" role="alert">{errores.tema}</span>}
          </div>

          <div className="form-sep"></div>

          <button type="submit" className="btn-submit">
            <i className="fa-solid fa-floppy-disk"></i> Guardar servicio
          </button>

        </form>
      </div>
    </div>
  );
}
