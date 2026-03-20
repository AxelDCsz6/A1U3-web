/* ============================================================
   DEVCORE — servicios.js
   Generación dinámica del catálogo de servicios
   Usa: objetos, bucles, createElement, appendChild, condicionales,
        DOMContentLoaded, localStorage, JSON.parse, JSON.stringify
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    var app = document.getElementById('app');
    if (!app) return;

    // ── DEFINICIÓN DE SERVICIOS (objetos) ──────────────────────
    var SERVICIOS = [
        {
            nombre: 'Desarrollo Web Fullstack',
            descripcion: 'Diseño y desarrollo de aplicaciones web completas, desde el frontend hasta la capa de datos, con foco en rendimiento y escalabilidad.',
            precio: 2500,
            precioDisplay: '$2,500',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-code',
            ingenieros: ['axel'],
            badge: 'popular',
            gradFrom: '#071a46',
            gradTo: '#0B2D72'
        },
        {
            nombre: 'Diseño de API REST',
            descripcion: 'Arquitectura e implementación de APIs RESTful escalables, con documentación completa y pruebas automatizadas.',
            precio: 800,
            precioDisplay: '$800',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-plug',
            ingenieros: ['axel', 'jose'],
            badge: '',
            gradFrom: '#0B2D72',
            gradTo: '#0992C2'
        },
        {
            nombre: 'Arquitectura de Microservicios',
            descripcion: 'Diseño de sistemas distribuidos de alta disponibilidad con desacoplamiento entre servicios y comunicación eficiente.',
            precio: 1800,
            precioDisplay: '$1,800',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-cubes',
            ingenieros: ['jose'],
            badge: 'recomendado',
            gradFrom: '#0992C2',
            gradTo: '#0AC4E0'
        },
        {
            nombre: 'Despliegue en AWS',
            descripcion: 'Configuración y despliegue de infraestructura en Amazon Web Services aplicando mejores prácticas de seguridad y costo.',
            precio: 600,
            precioDisplay: '$600',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-cloud',
            ingenieros: ['jose'],
            badge: '',
            gradFrom: '#071a46',
            gradTo: '#0992C2'
        },
        {
            nombre: 'Modelado de Bases de Datos',
            descripcion: 'Diseño de esquemas relacionales y no relacionales optimizados para rendimiento, integridad y mantenibilidad a largo plazo.',
            precio: 500,
            precioDisplay: '$500',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-database',
            ingenieros: ['axel', 'jose'],
            badge: '',
            gradFrom: '#0B2D72',
            gradTo: '#0AC4E0'
        },
        {
            nombre: 'Interfaces de Usuario',
            descripcion: 'Desarrollo de interfaces modernas, responsivas y accesibles con React y las últimas tendencias de diseño web.',
            precio: 1200,
            precioDisplay: '$1,200',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-display',
            ingenieros: ['axel'],
            badge: 'popular',
            gradFrom: '#071a46',
            gradTo: '#0AC4E0'
        },
        {
            nombre: 'Optimización de Rendimiento',
            descripcion: 'Diagnóstico y mejora de tiempos de respuesta, consultas lentas y cuellos de botella en aplicaciones web existentes.',
            precio: 700,
            precioDisplay: '$700',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-gauge-high',
            ingenieros: ['axel', 'jose'],
            badge: '',
            gradFrom: '#0992C2',
            gradTo: '#071a46'
        },
        {
            nombre: 'Integración de Sistemas',
            descripcion: 'Conexión de plataformas heterogéneas, servicios externos y sistemas internos mediante APIs, webhooks y colas de mensajes.',
            precio: 900,
            precioDisplay: '$900',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-sitemap',
            ingenieros: ['jose'],
            badge: '',
            gradFrom: '#0B2D72',
            gradTo: '#0992C2'
        },
        {
            nombre: 'Auditoría de Código',
            descripcion: 'Revisión técnica del código fuente con informe de vulnerabilidades, deuda técnica y mejoras prioritarias con plan de acción.',
            precio: 400,
            precioDisplay: '$400',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-shield-halved',
            ingenieros: ['axel', 'jose'],
            badge: '',
            gradFrom: '#071a46',
            gradTo: '#0B2D72'
        },
        {
            nombre: 'Consultoría Técnica',
            descripcion: 'Sesiones de asesoría para decisiones tecnológicas, elección de stack, planificación de arquitectura y revisión de proyectos.',
            precio: 150,
            precioDisplay: '$150',
            precioPrefix: '',
            precioSuffix: '/ hora',
            iconClass: 'fa-solid fa-comments',
            ingenieros: ['axel', 'jose'],
            badge: 'recomendado',
            gradFrom: '#0992C2',
            gradTo: '#0AC4E0'
        },
        {
            nombre: 'Migración a la Nube',
            descripcion: 'Transición de infraestructura local a servicios cloud con mínimo tiempo de inactividad y estrategia de rollback definida.',
            precio: 2000,
            precioDisplay: '$2,000',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-cloud-arrow-up',
            ingenieros: ['jose'],
            badge: 'recomendado',
            gradFrom: '#071a46',
            gradTo: '#0992C2'
        },
        {
            nombre: 'Dashboards & Analítica',
            descripcion: 'Paneles de control interactivos para visualización de datos en tiempo real, métricas clave e inteligencia de negocio.',
            precio: 1000,
            precioDisplay: '$1,000',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-chart-line',
            ingenieros: ['axel'],
            badge: 'popular',
            gradFrom: '#0B2D72',
            gradTo: '#0AC4E0'
        },
        {
            nombre: 'Seguridad de Aplicaciones',
            descripcion: 'Evaluación y refuerzo de seguridad: autenticación, autorización, cifrado y protección frente a vulnerabilidades OWASP.',
            precio: 850,
            precioDisplay: '$850',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-lock',
            ingenieros: ['jose'],
            badge: '',
            gradFrom: '#0992C2',
            gradTo: '#071a46'
        },
        {
            nombre: 'Automatización de Procesos',
            descripcion: 'Desarrollo de scripts, pipelines y workflows para eliminar tareas manuales repetitivas y optimizar flujos operativos.',
            precio: 750,
            precioDisplay: '$750',
            precioPrefix: 'desde',
            precioSuffix: '',
            iconClass: 'fa-solid fa-gears',
            ingenieros: ['jose'],
            badge: '',
            gradFrom: '#071a46',
            gradTo: '#0992C2'
        },
        {
            nombre: 'Mantenimiento & Soporte',
            descripcion: 'Plan mensual de soporte técnico activo: monitoreo, actualizaciones de seguridad, corrección de errores y mejoras incrementales.',
            precio: 300,
            precioDisplay: '$300',
            precioPrefix: 'desde',
            precioSuffix: '/ mes',
            iconClass: 'fa-solid fa-headset',
            ingenieros: ['axel', 'jose'],
            badge: 'popular',
            gradFrom: '#0B2D72',
            gradTo: '#0992C2'
        }
    ];

    // ── GENERADOR DE FOTOGRAFÍA (imagen SVG con gradiente) ──────
    function makeFoto(gradFrom, gradTo) {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="120">' +
            '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="' + gradFrom + '"/>' +
            '<stop offset="100%" stop-color="' + gradTo + '"/>' +
            '</linearGradient></defs>' +
            '<rect fill="url(#g)" width="320" height="120"/>' +
            '<circle cx="270" cy="-5" r="90" fill="rgba(10,196,224,0.09)"/>' +
            '<circle cx="30" cy="125" r="70" fill="rgba(10,196,224,0.06)"/>' +
            '</svg>';
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    // ── CREAR TARJETA (createElement + appendChild) ─────────────
    function crearTarjeta(servicio) {
        var article = document.createElement('article');
        article.className = 'servicio-card';
        if (servicio.badge) article.classList.add(servicio.badge);
        article.dataset.engineers = servicio.ingenieros.join(' ');

        // Condicional: precio > $1000 → clase premium
        if (servicio.precio > 1000) {
            article.classList.add('premium');
        }

        // Badge (si aplica)
        if (servicio.badge) {
            var badge = document.createElement('span');
            badge.className = 'servicio-badge badge-' + servicio.badge;
            badge.textContent = servicio.badge === 'popular' ? 'Más contratado' : 'Recomendado';
            article.appendChild(badge);
        }

        // Fotografía (imagen generada con gradiente SVG)
        var foto = document.createElement('img');
        foto.className = 'servicio-foto';
        foto.src = makeFoto(servicio.gradFrom, servicio.gradTo);
        foto.alt = 'Imagen de ' + servicio.nombre;
        article.appendChild(foto);

        // Icono
        var iconDiv = document.createElement('div');
        iconDiv.className = 'servicio-icon';
        var iconEl = document.createElement('i');
        iconEl.className = servicio.iconClass;
        iconDiv.appendChild(iconEl);
        article.appendChild(iconDiv);

        // Encabezado — nombre del servicio
        var h2 = document.createElement('h2');
        h2.className = 'servicio-nombre';
        h2.textContent = servicio.nombre;
        article.appendChild(h2);

        // Separador visual
        var sep = document.createElement('div');
        sep.className = 'servicio-sep';
        article.appendChild(sep);

        // Párrafo — descripción
        var p = document.createElement('p');
        p.className = 'servicio-desc';
        p.textContent = servicio.descripcion;
        article.appendChild(p);

        // Precio
        var divPrecio = document.createElement('div');
        divPrecio.className = 'servicio-precio';

        if (servicio.precioPrefix) {
            var pre = document.createElement('span');
            pre.className = 'precio-label';
            pre.textContent = servicio.precioPrefix;
            divPrecio.appendChild(pre);
        }

        var val = document.createElement('span');
        val.className = 'precio-valor';
        val.textContent = servicio.precioDisplay;
        divPrecio.appendChild(val);

        if (servicio.precioSuffix) {
            var suf = document.createElement('span');
            suf.className = 'precio-label';
            suf.textContent = servicio.precioSuffix;
            divPrecio.appendChild(suf);
        }

        article.appendChild(divPrecio);

        // Ingenieros
        var divEng = document.createElement('div');
        divEng.className = 'ingenieros';

        for (var j = 0; j < servicio.ingenieros.length; j++) {
            var eng = servicio.ingenieros[j];
            var tag = document.createElement('span');
            tag.className = 'ingeniero-tag';
            tag.dataset.eng = eng;

            var tagIcon = document.createElement('i');
            tagIcon.className = 'fa-solid fa-circle-user';
            tag.appendChild(tagIcon);
            tag.appendChild(document.createTextNode(
                ' ' + (eng === 'axel' ? 'Axel Dueñas' : 'José Beltran')
            ));
            divEng.appendChild(tag);
        }

        article.appendChild(divEng);
        return article;
    }

    // ── CONSTRUIR TODA LA PÁGINA ────────────────────────────────
    function construirPagina() {
        var contenido = document.createElement('div');
        contenido.className = 'contenido';

        // --- Hero ---
        var seccion = document.createElement('div');
        seccion.className = 'seccion';

        var h1Hero = document.createElement('h1');
        h1Hero.innerHTML = 'Nuestros<br>servicios';
        seccion.appendChild(h1Hero);

        var pHero = document.createElement('p');
        pHero.textContent = 'Soluciones de ingeniería diseñadas para cada etapa de tu proyecto. ' +
            'Transparencia de precios, tecnología de primer nivel y un equipo comprometido con los resultados.';
        seccion.appendChild(pHero);
        contenido.appendChild(seccion);

        // --- Stats bar ---
        var statsBar = document.createElement('div');
        statsBar.className = 'stats-bar';

        var statsData = [
            { num: '15', label: 'Servicios disponibles' },
            null,
            { num: '2', label: 'Ingenieros especializados' },
            null,
            { num: '100%', label: 'Consulta inicial gratuita' }
        ];

        for (var s = 0; s < statsData.length; s++) {
            if (statsData[s] === null) {
                var statSep = document.createElement('div');
                statSep.className = 'stat-sep';
                statsBar.appendChild(statSep);
            } else {
                var stat = document.createElement('div');
                stat.className = 'stat';

                var numEl = document.createElement('span');
                numEl.className = 'stat-num';
                numEl.textContent = statsData[s].num;

                var labelEl = document.createElement('span');
                labelEl.className = 'stat-label';
                labelEl.textContent = statsData[s].label;

                stat.appendChild(numEl);
                stat.appendChild(labelEl);
                statsBar.appendChild(stat);
            }
        }
        contenido.appendChild(statsBar);

        // --- Sección servicios ---
        var secServicios = document.createElement('section');
        secServicios.className = 'servicios-seccion';

        // Header
        var header = document.createElement('div');
        header.className = 'servicios-header';

        var h1Cat = document.createElement('h1');
        h1Cat.textContent = 'Catálogo completo';
        header.appendChild(h1Cat);

        var subtitle = document.createElement('p');
        subtitle.className = 'subtitle';
        subtitle.textContent = 'Los precios son referenciales y se ajustan al alcance de cada proyecto. Incluye consulta inicial sin costo.';
        header.appendChild(subtitle);
        secServicios.appendChild(header);

        // Filtros
        var filtros = document.createElement('div');
        filtros.className = 'filtros';

        var filterData = [
            { filter: 'all',  text: 'Todos los servicios', activo: true  },
            { filter: 'axel', text: 'Axel Dueñas',         activo: false },
            { filter: 'jose', text: 'José Beltran',         activo: false }
        ];

        for (var f = 0; f < filterData.length; f++) {
            var btn = document.createElement('button');
            btn.className = 'filtro-btn' + (filterData[f].activo ? ' activo' : '');
            btn.dataset.filter = filterData[f].filter;
            btn.textContent = filterData[f].text;
            filtros.appendChild(btn);
        }
        secServicios.appendChild(filtros);

        // Leyenda
        var leyenda = document.createElement('div');
        leyenda.className = 'servicios-leyenda';

        var leyendaData = [
            { dot: 'dot-popular',     text: 'Más contratado' },
            { dot: 'dot-recomendado', text: 'Recomendado'    }
        ];

        for (var l = 0; l < leyendaData.length; l++) {
            var li = document.createElement('div');
            li.className = 'leyenda-item';

            var dot = document.createElement('span');
            dot.className = 'dot ' + leyendaData[l].dot;

            var txt = document.createElement('span');
            txt.textContent = leyendaData[l].text;

            li.appendChild(dot);
            li.appendChild(txt);
            leyenda.appendChild(li);
        }
        secServicios.appendChild(leyenda);

        // Grid — BUCLE principal que crea todas las tarjetas
        var grid = document.createElement('div');
        grid.className = 'servicios-grid';
        grid.id = 'servicios-grid';

        for (var i = 0; i < SERVICIOS.length; i++) {
            grid.appendChild(crearTarjeta(SERVICIOS[i]));
        }

        secServicios.appendChild(grid);
        contenido.appendChild(secServicios);

        // --- CTA ---
        var cta = document.createElement('div');
        cta.className = 'seccion-cta';

        var pCta = document.createElement('p');
        pCta.textContent = '¿Tienes un proyecto en mente?';
        cta.appendChild(pCta);

        var aCta = document.createElement('a');
        aCta.href = 'index.html#integrantes';
        aCta.textContent = 'Habla con el equipo';
        cta.appendChild(aCta);

        contenido.appendChild(cta);

        // --- Botón agregar servicio ---
        var divAgregar = document.createElement('div');
        divAgregar.className = 'seccion-agregar';

        var btnAgregar = document.createElement('a');
        btnAgregar.href = 'alta.html';
        btnAgregar.className = 'btn-agregar-servicio';

        var iconAgregar = document.createElement('i');
        iconAgregar.className = 'fa-solid fa-plus';
        btnAgregar.appendChild(iconAgregar);
        btnAgregar.appendChild(document.createTextNode(' Agregar servicio'));

        divAgregar.appendChild(btnAgregar);
        contenido.appendChild(divAgregar);

        app.appendChild(contenido);
    }

    // ── CARGAR SERVICIOS EXTRA DESDE localStorage ────────────────
    var rawExtra = localStorage.getItem('devcore_servicios');
    if (rawExtra) {
        var extras = JSON.parse(rawExtra);
        for (var e = 0; e < extras.length; e++) {
            SERVICIOS.push(extras[e]);
        }
    }

    // ── INICIALIZAR ─────────────────────────────────────────────
    construirPagina();

    // ── FILTRO POR INGENIERO ────────────────────────────────────
    var filtroBtns    = document.querySelectorAll('.filtro-btn');
    var servicioCards = document.querySelectorAll('.servicio-card');

    for (var b = 0; b < filtroBtns.length; b++) {
        filtroBtns[b].addEventListener('click', function () {
            for (var k = 0; k < filtroBtns.length; k++) {
                filtroBtns[k].classList.remove('activo');
            }
            this.classList.add('activo');

            var filter = this.dataset.filter;

            for (var c = 0; c < servicioCards.length; c++) {
                if (filter === 'all') {
                    servicioCards[c].classList.remove('hidden');
                } else {
                    var engineers = servicioCards[c].dataset.engineers || '';
                    if (engineers.indexOf(filter) !== -1) {
                        servicioCards[c].classList.remove('hidden');
                    } else {
                        servicioCards[c].classList.add('hidden');
                    }
                }
            }
        });
    }

});
