# DevCore — Documentación del Proyecto

Página web estática para un equipo de desarrollo de software. Una sola página (`index.html`) con navbar, sección hero, tarjetas de integrantes con animación hover, CTA y footer.

---

## Estructura de archivos

```
proyecto/
├── index.html      ← Estructura y contenido HTML
├── styles.css      ← Todos los estilos y animaciones
└── scripts.js      ← Lógica de scroll reveal
```

---

## Dependencias externas (CDN)

Cargadas directamente en el `<head>` de `index.html`, no requieren instalación:

| Recurso | URL | Uso |
|---|---|---|
| Google Fonts | fonts.googleapis.com | Tipografías Playfair Display y Syne |
| Font Awesome | kit.fontawesome.com | Ícono `fa-user-circle` en las tarjetas |

---

## Paleta de colores

Definida como variables CSS en `:root` dentro de `styles.css`.

| Variable | Hex | Uso |
|---|---|---|
| `--navy` | `#0B2D72` | Fondo navbar, hero, cara frontal de tarjetas |
| `--ocean` | `#0992C2` | Fondo sección CTA, línea decorativa en slide2 |
| `--cyan` | `#0AC4E0` | Acentos, íconos, líneas decorativas, hover |
| `--cream` | `#F6E7BC` | Fondo general del body, textos sobre fondos oscuros |
| `--cream-dim` | `#e8d89e` | Bordes de tarjetas |
| `--ink` | `#071a46` | Fondo del footer (navy más oscuro) |
| `--white` | `#ffffff` | Fondo cara trasera de tarjetas |

---

## Tipografía

| Fuente | Tipo | Uso |
|---|---|---|
| **Playfair Display** | Serif display | Títulos (`h1`), texto CTA |
| **Syne** | Sans-serif geométrico | Body, navbar, labels, botones |

---

## Secciones y clases principales

### `.navbar`
Barra de navegación fija (`position: sticky`). Contiene el logotipo generado con el pseudo-elemento `::before` (sin HTML extra) y la lista de links `<ul>`.

- `.navbar::before` — genera el texto "DEVCORE" como logotipo con CSS puro
- `.navbar ul li a::after` — línea que crece de izquierda a derecha al hacer hover (animación con `width: 0 → 100%`)

---

### `.seccion` — Hero
Sección de presentación con fondo navy. Usa dos pseudo-elementos:

- `::before` — círculo decorativo en la esquina superior derecha
- `::after` — línea de acento cian en la parte inferior izquierda

El `h1` y el `p` se animan al cargar con `@keyframes heroIn` (fade + translateY).

---

### `#integrantes .content-tag` — Quiénes somos
Sección centrada con fondo cream. Contiene el título con línea decorativa via `h1::after` y el `.contenedor-tarjetas`.

- `.content-tag h1::after` — línea corta de 44px en cyan bajo el título de sección

---

### `.contenedor-tarjetas`
Flex row con wrap. Centra las tarjetas y permite que se acomoden en múltiples filas en pantallas pequeñas.

---

### `.card` — Tarjeta con animación hover

Cada tarjeta tiene dos capas apiladas verticalmente:

#### `.slide.slide1` (cara visible)
- Fondo navy con textura de puntos cian generada con `radial-gradient` en `::before`
- Muestra el ícono Font Awesome y el nombre del integrante

#### `.slide.slide2` (cara oculta)
- Por defecto está desplazada hacia arriba: `transform: translateY(-200px)`
- Al hacer hover en `.card`, se desliza a su posición natural: `transform: translateY(0)`
- Muestra el rol y el stack tecnológico del integrante
- Tiene un borde superior cyan y una línea decorativa en la parte inferior via `::after`

**Importante:** esta animación es 100% CSS, no requiere JavaScript.

---

### `.seccion-cta` — Call to Action
Banda horizontal con fondo ocean (`#0992C2`). Texto en Playfair Display italic a la izquierda, botón a la derecha. El botón invierte sus colores (cream → transparente) al hacer hover.

---

### `footer`
Fondo ink (navy oscuro). Flex row con `justify-content: space-between`. Contiene el logotipo `.footer-mark` y el texto de copyright.

---

## Clases de utilidad

| Clase | Descripción |
|---|---|
| `.reveal` | Estado inicial oculto (`opacity: 0`, `translateY(22px)`). Aplicada a `.card` |
| `.reveal.in` | Estado visible. La agrega JavaScript cuando el elemento entra al viewport |
| `.subtitle` | Párrafo de descripción bajo el título de sección, color navy al 52% de opacidad |
| `.footer-mark` | Logotipo del footer en cyan con letter-spacing amplio |

---

## Animaciones

### `@keyframes heroIn`
Definida en `styles.css`. Fade-in con desplazamiento vertical (de `translateY(26px)` a `0`). Se aplica al `h1` y al `p` del hero con un delay de `0.12s` entre ellos para efecto escalonado.

```css
animation: heroIn 0.85s cubic-bezier(.22,1,.36,1) both;
```

### Scroll Reveal (`.reveal` + `.reveal.in`)
Controlada en conjunto entre CSS y JS:

- **CSS** define el estado inicial (`opacity: 0`, desplazado) y la transición
- **JS** agrega la clase `.in` cuando el elemento entra al viewport

### Hover navbar links
Línea que crece de `width: 0` a `width: 100%` via `::after`. Transición de `0.25s ease`.

### Hover tarjetas (card flip)
El `.slide2` pasa de `translateY(-200px)` a `translateY(0)` en `0.8s`. Es la animación central del diseño.

### Hover botón CTA
Invierte colores con `transition` de `0.22s` sobre background, color y border-color. Sube `2px` con `translateY(-2px)`.

---

## JavaScript — `scripts.js`

Contiene una sola función: **Scroll Reveal**.

```js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
        }
    });
}, { threshold: 0.12 });
```

- Selecciona todos los `.reveal` del DOM
- Crea un `IntersectionObserver` con umbral de `0.12` (el elemento debe estar 12% visible)
- Cuando un elemento entra al viewport, le agrega la clase `.in` que activa la transición CSS

---

## Hipervínculos

| Elemento | Destino | Tipo |
|---|---|---|
| Nav → "¿Quiénes somos?" | `#integrantes` | Ancla interna (scroll suave) |
| Nav → "Servicios" | `servicios.html` | Página externa |
| Botón CTA "Contáctanos" | `servicios.html` | Página externa |

El scroll suave está habilitado con `scroll-behavior: smooth` en el selector `html`.

---

## Cambios respecto al original

| Aspecto | Original | Versión actual |
|---|---|---|
| Estilos | `background-color: whitesmoke` en `*`, sin colores | Paleta completa con variables CSS |
| Tipografía | Fuente del sistema por defecto | Playfair Display + Syne (Google Fonts) |
| Navbar | Solo `<ul>` alineada a la derecha | Sticky, con logotipo CSS, con animación en links |
| Hero | `<div class="seccion">` sin estilos visuales | Fondo navy, tipografía display, pseudo-elementos decorativos |
| Tarjetas | `slide1` con `background-color: black` | Fondo navy con textura de puntos, ícono en cyan |
| `slide2` | Borde `wheat` | Borde cream-dim, borde superior cyan |
| Integrantes | 2 tarjetas duplicadas de "Axel Dueñas / Fullstack developer" | 4 integrantes con roles y stack diferenciado |
| Subtítulo en `#integrantes` | Ausente | Párrafo `.subtitle` con descripción del equipo |
| CTA | `<div class="seccion">` con `<p>` y `<a>` sin estilos | Banda `.seccion-cta` con fondo ocean, layout flex, botón estilizado |
| Footer | `margin-top: 150px`, texto "mmdas xd" | Pegado al CTA, logotipo + copyright, fondo ink |
| JavaScript | Archivo vacío | Scroll reveal con `IntersectionObserver` |
| Archivos | Todo en `index.html` con estilos inline en el mismo archivo | Separados en `index.html`, `styles.css`, `scripts.js` |
