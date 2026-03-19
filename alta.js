/* ============================================================
   DEVCORE — alta.js
   Formulario de alta de nuevo servicio
   Usa: DOMContentLoaded, JSON.parse, JSON.stringify,
        localStorage.getItem, localStorage.setItem
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ── DATOS DE ÍCONOS Y TEMAS ─────────────────────────────────
    var ICONOS = [
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
        { value: 'fa-solid fa-mobile-screen',  label: 'Móvil'            }
    ];

    var TEMAS = [
        { value: 'navy-ocean',  label: 'Navy → Ocean',  gradFrom: '#0B2D72', gradTo: '#0992C2' },
        { value: 'ink-navy',    label: 'Ink → Navy',    gradFrom: '#071a46', gradTo: '#0B2D72' },
        { value: 'ocean-cyan',  label: 'Ocean → Cyan',  gradFrom: '#0992C2', gradTo: '#0AC4E0' },
        { value: 'ink-cyan',    label: 'Ink → Cyan',    gradFrom: '#071a46', gradTo: '#0AC4E0' },
        { value: 'navy-cyan',   label: 'Navy → Cyan',   gradFrom: '#0B2D72', gradTo: '#0AC4E0' },
        { value: 'ink-ocean',   label: 'Ink → Ocean',   gradFrom: '#071a46', gradTo: '#0992C2' },
        { value: 'cyan-ocean',  label: 'Cyan → Ocean',  gradFrom: '#0AC4E0', gradTo: '#0992C2' },
        { value: 'ocean-navy',  label: 'Ocean → Navy',  gradFrom: '#0992C2', gradTo: '#071a46' }
    ];

    // ── ELEMENTOS DEL DOM ────────────────────────────────────────
    var form        = document.getElementById('alta-form');
    var msgExito    = document.getElementById('msg-exito');
    var charCount   = document.getElementById('char-count');
    var temaPreview = document.getElementById('tema-preview');
    var selectIcono = document.getElementById('icono');
    var selectTema  = document.getElementById('tema');
    var txtDescr    = document.getElementById('descripcion');

    // ── POBLAR SELECT DE ÍCONOS ──────────────────────────────────
    for (var ic = 0; ic < ICONOS.length; ic++) {
        var optIco = document.createElement('option');
        optIco.value = ICONOS[ic].value;
        optIco.textContent = ICONOS[ic].label;
        selectIcono.appendChild(optIco);
    }

    // ── POBLAR SELECT DE TEMAS ───────────────────────────────────
    for (var t = 0; t < TEMAS.length; t++) {
        var optTema = document.createElement('option');
        optTema.value = TEMAS[t].value;
        optTema.textContent = TEMAS[t].label;
        selectTema.appendChild(optTema);
    }

    // ── HELPERS ─────────────────────────────────────────────────
    function mostrarError(id, msg) {
        var el = document.getElementById('error-' + id);
        if (el) el.textContent = msg;
    }

    function limpiarError(id) {
        var el = document.getElementById('error-' + id);
        if (el) el.textContent = '';
    }

    function getTema(valor) {
        for (var i = 0; i < TEMAS.length; i++) {
            if (TEMAS[i].value === valor) return TEMAS[i];
        }
        return null;
    }

    function actualizarPreviewTema() {
        var tema = getTema(selectTema.value);
        if (tema) {
            temaPreview.style.background = 'linear-gradient(135deg, ' + tema.gradFrom + ' 0%, ' + tema.gradTo + ' 100%)';
        } else {
            temaPreview.style.background = '';
        }
    }

    // ── CONTADOR DE CARACTERES ───────────────────────────────────
    txtDescr.addEventListener('input', function () {
        charCount.textContent = this.value.length + ' / 300';
    });

    // ── PREVIEW DE TEMA ──────────────────────────────────────────
    selectTema.addEventListener('change', actualizarPreviewTema);

    // ── VALIDACIONES INDIVIDUALES ────────────────────────────────
    function validarNombre() {
        var val = document.getElementById('nombre').value.trim();
        if (val.length === 0) {
            mostrarError('nombre', 'El nombre del servicio es obligatorio.');
            return false;
        }
        if (val.length < 3) {
            mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres.');
            return false;
        }
        limpiarError('nombre');
        return true;
    }

    function validarDescripcion() {
        var val = txtDescr.value.trim();
        if (val.length === 0) {
            mostrarError('descripcion', 'La descripción es obligatoria.');
            return false;
        }
        if (val.length < 10) {
            mostrarError('descripcion', 'La descripción debe tener al menos 10 caracteres.');
            return false;
        }
        limpiarError('descripcion');
        return true;
    }

    function validarPrecio() {
        var val = document.getElementById('precio').value;
        if (val === '' || val === null) {
            mostrarError('precio', 'El precio es obligatorio.');
            return false;
        }
        var num = Number(val);
        if (isNaN(num) || num < 1) {
            mostrarError('precio', 'El precio debe ser mayor a $0.');
            return false;
        }
        if (num > 99999) {
            mostrarError('precio', 'El precio no puede superar $99,999.');
            return false;
        }
        limpiarError('precio');
        return true;
    }

    function validarIngenieros() {
        var checks = document.querySelectorAll('input[name="ingenieros"]:checked');
        if (checks.length === 0) {
            mostrarError('ingenieros', 'Selecciona al menos un ingeniero responsable.');
            return false;
        }
        limpiarError('ingenieros');
        return true;
    }

    function validarTema() {
        if (!selectTema.value) {
            mostrarError('tema', 'Selecciona un tema visual para la tarjeta.');
            return false;
        }
        limpiarError('tema');
        return true;
    }

    // ── VALIDACIÓN EN TIEMPO REAL (blur) ─────────────────────────
    document.getElementById('nombre').addEventListener('blur', validarNombre);
    txtDescr.addEventListener('blur', validarDescripcion);
    document.getElementById('precio').addEventListener('blur', validarPrecio);
    document.getElementById('precio').addEventListener('input', function () {
        if (document.getElementById('precio').value !== '') validarPrecio();
    });
    selectTema.addEventListener('change', validarTema);

    var checkboxes = document.querySelectorAll('input[name="ingenieros"]');
    for (var ch = 0; ch < checkboxes.length; ch++) {
        checkboxes[ch].addEventListener('change', validarIngenieros);
    }

    // ── ENVÍO DEL FORMULARIO ─────────────────────────────────────
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validar todos los campos
        var ok = true;
        if (!validarNombre())      ok = false;
        if (!validarDescripcion()) ok = false;
        if (!validarPrecio())      ok = false;
        if (!validarIngenieros())  ok = false;
        if (!validarTema())        ok = false;

        if (!ok) {
            var primerError = form.querySelector('.campo-error:not(:empty)');
            if (primerError) primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Recopilar valores
        var nombre      = document.getElementById('nombre').value.trim();
        var descripcion = txtDescr.value.trim();
        var precio      = Number(document.getElementById('precio').value);
        var tipoPrecio  = document.getElementById('tipo_precio').value;
        var badge       = document.getElementById('badge').value;
        var iconClass   = selectIcono.value;
        var temaVal     = selectTema.value;
        var tema        = getTema(temaVal);

        var ingenierosSeleccionados = [];
        var checked = document.querySelectorAll('input[name="ingenieros"]:checked');
        for (var ci = 0; ci < checked.length; ci++) {
            ingenierosSeleccionados.push(checked[ci].value);
        }

        // Formatear precio para mostrar
        var precioDisplay = '$' + precio.toLocaleString('es-MX');
        var precioPrefix  = tipoPrecio === 'fijo' ? 'desde' : '';
        var precioSuffix  = tipoPrecio === 'hora' ? '/ hora' : tipoPrecio === 'mes' ? '/ mes' : '';

        // Construir objeto del servicio
        var nuevoServicio = {
            nombre:       nombre,
            descripcion:  descripcion,
            precio:       precio,
            precioDisplay: precioDisplay,
            precioPrefix:  precioPrefix,
            precioSuffix:  precioSuffix,
            iconClass:    iconClass,
            ingenieros:   ingenierosSeleccionados,
            badge:        badge,
            gradFrom:     tema.gradFrom,
            gradTo:       tema.gradTo
        };

        // Leer servicios existentes en localStorage (JSON.parse + JSON.stringify)
        var raw      = localStorage.getItem('devcore_servicios');
        var lista    = raw ? JSON.parse(raw) : [];
        lista.push(nuevoServicio);
        localStorage.setItem('devcore_servicios', JSON.stringify(lista));

        // Mostrar mensaje de éxito y redirigir
        msgExito.textContent = '¡Servicio "' + nombre + '" guardado correctamente! Redirigiendo al catálogo...';
        msgExito.classList.add('visible');
        form.reset();
        charCount.textContent = '0 / 300';
        temaPreview.style.background = '';

        setTimeout(function () {
            window.location.href = 'servicios.html';
        }, 2000);
    });

});
