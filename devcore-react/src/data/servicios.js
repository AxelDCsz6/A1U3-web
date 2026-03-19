// ── CATÁLOGO BASE DE SERVICIOS ───────────────────────────────
export const SERVICIOS = [
  {
    nombre: 'Desarrollo Web Fullstack',
    descripcion: 'Diseño y desarrollo de aplicaciones web completas, desde el frontend hasta la capa de datos, con foco en rendimiento y escalabilidad.',
    precio: 2500, precioDisplay: '$2,500', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-code', ingenieros: ['axel'], badge: 'popular',
    gradFrom: '#071a46', gradTo: '#0B2D72',
  },
  {
    nombre: 'Diseño de API REST',
    descripcion: 'Arquitectura e implementación de APIs RESTful escalables, con documentación completa y pruebas automatizadas.',
    precio: 800, precioDisplay: '$800', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-plug', ingenieros: ['axel', 'jose'], badge: '',
    gradFrom: '#0B2D72', gradTo: '#0992C2',
  },
  {
    nombre: 'Arquitectura de Microservicios',
    descripcion: 'Diseño de sistemas distribuidos de alta disponibilidad con desacoplamiento entre servicios y comunicación eficiente.',
    precio: 1800, precioDisplay: '$1,800', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-cubes', ingenieros: ['jose'], badge: 'recomendado',
    gradFrom: '#0992C2', gradTo: '#0AC4E0',
  },
  {
    nombre: 'Despliegue en AWS',
    descripcion: 'Configuración y despliegue de infraestructura en Amazon Web Services aplicando mejores prácticas de seguridad y costo.',
    precio: 600, precioDisplay: '$600', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-cloud', ingenieros: ['jose'], badge: '',
    gradFrom: '#071a46', gradTo: '#0992C2',
  },
  {
    nombre: 'Modelado de Bases de Datos',
    descripcion: 'Diseño de esquemas relacionales y no relacionales optimizados para rendimiento, integridad y mantenibilidad a largo plazo.',
    precio: 500, precioDisplay: '$500', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-database', ingenieros: ['axel', 'jose'], badge: '',
    gradFrom: '#0B2D72', gradTo: '#0AC4E0',
  },
  {
    nombre: 'Interfaces de Usuario',
    descripcion: 'Desarrollo de interfaces modernas, responsivas y accesibles con React y las últimas tendencias de diseño web.',
    precio: 1200, precioDisplay: '$1,200', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-display', ingenieros: ['axel'], badge: 'popular',
    gradFrom: '#071a46', gradTo: '#0AC4E0',
  },
  {
    nombre: 'Optimización de Rendimiento',
    descripcion: 'Diagnóstico y mejora de tiempos de respuesta, consultas lentas y cuellos de botella en aplicaciones web existentes.',
    precio: 700, precioDisplay: '$700', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-gauge-high', ingenieros: ['axel', 'jose'], badge: '',
    gradFrom: '#0992C2', gradTo: '#071a46',
  },
  {
    nombre: 'Integración de Sistemas',
    descripcion: 'Conexión de plataformas heterogéneas, servicios externos y sistemas internos mediante APIs, webhooks y colas de mensajes.',
    precio: 900, precioDisplay: '$900', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-sitemap', ingenieros: ['jose'], badge: '',
    gradFrom: '#0B2D72', gradTo: '#0992C2',
  },
  {
    nombre: 'Auditoría de Código',
    descripcion: 'Revisión técnica del código fuente con informe de vulnerabilidades, deuda técnica y mejoras prioritarias con plan de acción.',
    precio: 400, precioDisplay: '$400', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-shield-halved', ingenieros: ['axel', 'jose'], badge: '',
    gradFrom: '#071a46', gradTo: '#0B2D72',
  },
  {
    nombre: 'Consultoría Técnica',
    descripcion: 'Sesiones de asesoría para decisiones tecnológicas, elección de stack, planificación de arquitectura y revisión de proyectos.',
    precio: 150, precioDisplay: '$150', precioPrefix: '', precioSuffix: '/ hora',
    iconClass: 'fa-solid fa-comments', ingenieros: ['axel', 'jose'], badge: 'recomendado',
    gradFrom: '#0992C2', gradTo: '#0AC4E0',
  },
  {
    nombre: 'Migración a la Nube',
    descripcion: 'Transición de infraestructura local a servicios cloud con mínimo tiempo de inactividad y estrategia de rollback definida.',
    precio: 2000, precioDisplay: '$2,000', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-cloud-arrow-up', ingenieros: ['jose'], badge: 'recomendado',
    gradFrom: '#071a46', gradTo: '#0992C2',
  },
  {
    nombre: 'Dashboards & Analítica',
    descripcion: 'Paneles de control interactivos para visualización de datos en tiempo real, métricas clave e inteligencia de negocio.',
    precio: 1000, precioDisplay: '$1,000', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-chart-line', ingenieros: ['axel'], badge: 'popular',
    gradFrom: '#0B2D72', gradTo: '#0AC4E0',
  },
  {
    nombre: 'Seguridad de Aplicaciones',
    descripcion: 'Evaluación y refuerzo de seguridad: autenticación, autorización, cifrado y protección frente a vulnerabilidades OWASP.',
    precio: 850, precioDisplay: '$850', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-lock', ingenieros: ['jose'], badge: '',
    gradFrom: '#0992C2', gradTo: '#071a46',
  },
  {
    nombre: 'Automatización de Procesos',
    descripcion: 'Desarrollo de scripts, pipelines y workflows para eliminar tareas manuales repetitivas y optimizar flujos operativos.',
    precio: 750, precioDisplay: '$750', precioPrefix: 'desde', precioSuffix: '',
    iconClass: 'fa-solid fa-gears', ingenieros: ['jose'], badge: '',
    gradFrom: '#071a46', gradTo: '#0992C2',
  },
  {
    nombre: 'Mantenimiento & Soporte',
    descripcion: 'Plan mensual de soporte técnico activo: monitoreo, actualizaciones, corrección de errores y mejoras incrementales.',
    precio: 300, precioDisplay: '$300', precioPrefix: 'desde', precioSuffix: '/ mes',
    iconClass: 'fa-solid fa-headset', ingenieros: ['axel', 'jose'], badge: 'popular',
    gradFrom: '#0B2D72', gradTo: '#0992C2',
  },
];

// ── TEMAS VISUALES ───────────────────────────────────────────
export const TEMAS = [
  { value: 'navy-ocean', label: 'Navy → Ocean',  gradFrom: '#0B2D72', gradTo: '#0992C2' },
  { value: 'ink-navy',   label: 'Ink → Navy',    gradFrom: '#071a46', gradTo: '#0B2D72' },
  { value: 'ocean-cyan', label: 'Ocean → Cyan',  gradFrom: '#0992C2', gradTo: '#0AC4E0' },
  { value: 'ink-cyan',   label: 'Ink → Cyan',    gradFrom: '#071a46', gradTo: '#0AC4E0' },
  { value: 'navy-cyan',  label: 'Navy → Cyan',   gradFrom: '#0B2D72', gradTo: '#0AC4E0' },
  { value: 'ink-ocean',  label: 'Ink → Ocean',   gradFrom: '#071a46', gradTo: '#0992C2' },
  { value: 'cyan-ocean', label: 'Cyan → Ocean',  gradFrom: '#0AC4E0', gradTo: '#0992C2' },
  { value: 'ocean-navy', label: 'Ocean → Navy',  gradFrom: '#0992C2', gradTo: '#071a46' },
];

// ── ÍCONOS DISPONIBLES ───────────────────────────────────────
export const ICONOS = [
  { value: 'fa-solid fa-code',          label: 'Código'           },
  { value: 'fa-solid fa-plug',           label: 'API / Conectores' },
  { value: 'fa-solid fa-cubes',          label: 'Microservicios'   },
  { value: 'fa-solid fa-cloud',          label: 'Nube'             },
  { value: 'fa-solid fa-database',       label: 'Base de Datos'    },
  { value: 'fa-solid fa-display',        label: 'Interfaz'         },
  { value: 'fa-solid fa-gauge-high',     label: 'Rendimiento'      },
  { value: 'fa-solid fa-sitemap',        label: 'Integración'      },
  { value: 'fa-solid fa-shield-halved',  label: 'Seguridad'        },
  { value: 'fa-solid fa-comments',       label: 'Consultoría'      },
  { value: 'fa-solid fa-cloud-arrow-up', label: 'Migración'        },
  { value: 'fa-solid fa-chart-line',     label: 'Analítica'        },
  { value: 'fa-solid fa-lock',           label: 'Privacidad'       },
  { value: 'fa-solid fa-gears',          label: 'Automatización'   },
  { value: 'fa-solid fa-headset',        label: 'Soporte'          },
  { value: 'fa-solid fa-rocket',         label: 'Lanzamiento'      },
  { value: 'fa-solid fa-layer-group',    label: 'Full Stack'       },
  { value: 'fa-solid fa-mobile-screen',  label: 'Móvil'            },
];

// ── HELPER: generar foto SVG ─────────────────────────────────
export function makeFoto(gradFrom, gradTo) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="120">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${gradFrom}"/>
      <stop offset="100%" stop-color="${gradTo}"/>
    </linearGradient></defs>
    <rect fill="url(#g)" width="320" height="120"/>
    <circle cx="270" cy="-5" r="90" fill="rgba(10,196,224,0.09)"/>
    <circle cx="30" cy="125" r="70" fill="rgba(10,196,224,0.06)"/>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ── LOCALSTORAGE KEY ─────────────────────────────────────────
export const LS_KEY = 'devcore_servicios';
