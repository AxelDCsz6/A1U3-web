# DevCore — Documentación Técnica
**Unidad 3 · Práctica Integradora**
Programación Web · 6.º semestre

---

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Actividad 1 — Estructura base (HTML/CSS/JS)](#2-actividad-1--estructura-base)
3. [Actividad 2 — Generación dinámica del DOM](#3-actividad-2--generación-dinámica-del-dom)
4. [Actividad 3 — Refactorización con React](#4-actividad-3--refactorización-con-react)
   - [Componentes creados](#componentes-creados)
   - [Funcionalidad replicada](#funcionalidad-replicada)
5. [Comparación de líneas de código](#5-comparación-de-líneas-de-código)
6. [Ventajas y desventajas](#6-ventajas-y-desventajas)
7. [Referencias](#7-referencias)

---

## 1. Descripción del proyecto

**DevCore** es un sitio web de portafolio y catálogo de servicios para un equipo de dos ingenieros de software. Cuenta con cinco vistas:

| Vista | Descripción |
|---|---|
| Inicio (index) | Presentación del equipo con tarjetas expandibles al hover |
| Servicios | Catálogo de 15 servicios con filtros por ingeniero |
| CV — Axel | Curriculum vitae completo de Axel Dueñas |
| CV — José | Curriculum vitae completo de José Beltran |
| Alta de servicio | Formulario de alta para agregar servicios al catálogo |

---

## 2. Actividad 1 — Estructura base

La primera actividad consistió en construir la estructura visual del sitio usando únicamente HTML semántico y CSS.
Se estableció el sistema de diseño completo:

- **Paleta de colores** como variables CSS (`--navy`, `--ocean`, `--cyan`, `--cream`, `--ink`)
- **Tipografía**: Playfair Display (títulos) + Syne (cuerpo/UI) vía Google Fonts
- **Iconos**: FontAwesome 6 Kit
- **Layouts**: navbar sticky, hero, grid de tarjetas, grid de servicios 3 columnas, layout CV sidebar + grid 2×2

---

## 3. Actividad 2 — Generación dinámica del DOM

La segunda actividad extendió el proyecto con JavaScript vanilla para generar contenido dinámicamente y añadir interactividad.

### Archivos JS creados

| Archivo | Responsabilidad |
|---|---|
| `components.js` | Inyecta el navbar y el footer dinámicamente según el `page-id` de la página actual |
| `scripts.js` | Animaciones scroll-reveal, expansión hover de tarjetas CV, highlight de skill-tags, smooth scroll |
| `servicios.js` | Genera el catálogo completo desde un array de objetos, sistema de filtros, guarda/lee servicios extra en `localStorage` |
| `alta.js` | Formulario de alta con validación en tiempo real, contador de caracteres, persistencia en `localStorage` |

### Técnicas de programación utilizadas

- **Objetos y arrays**: definición de los 15 servicios como array de objetos literales
- **Bucles `for`**: iteración para renderizar tarjetas y opciones de filtro
- **`createElement` / `appendChild`**: construcción imperativa del DOM
- **`localStorage` + `JSON.parse` / `JSON.stringify`**: persistencia de servicios extras
- **`IntersectionObserver`**: animaciones de entrada por scroll
- **`DOMContentLoaded`**: punto de entrada seguro

---

## 4. Actividad 3 — Refactorización con React

La tercera actividad migró todo el proyecto a **React 19** + **Vite 8** + **React Router DOM v7**, manteniendo la misma apariencia visual y funcionalidad.

### Componentes creados

#### Componentes compartidos (`src/components/`)

| Componente | Archivo | Descripción |
|---|---|---|
| `Navbar` | `Navbar.jsx` | Barra de navegación sticky con brand "DEVCORE" y links "¿Quiénes somos?" / "Servicios". Usa `useLocation` para marcar el link activo con la clase `nav-active`. |
| `Footer` | `Footer.jsx` | Pie de página con copyright y marca DEVCORE en cyan. |
| `ServiceCard` | `ServiceCard.jsx` | Tarjeta individual de servicio. Recibe un objeto `servicio` como prop y renderiza: imagen SVG generada con gradiente, ícono FontAwesome, nombre, separador, descripción, precio y etiquetas de ingenieros. Aplica clases `popular`, `recomendado` y `premium` condicionalmente. |

#### Páginas (`src/pages/`)

| Componente | Archivo | Descripción |
|---|---|---|
| `HomePage` | `HomePage.jsx` | Página principal. Contiene el hero, la sección "¿Quiénes somos?" y el CTA. Incluye el sub-componente `TeamCard` que implementa la lógica de expansión hover: mide la altura real del `slide2`, calcula la posición del acento cian y gestiona `marginBottom` del contenedor y `paddingBottom` de la sección padre para que no quede espacio en blanco al expandir. |
| `ServiciosPage` | `ServiciosPage.jsx` | Página de servicios. Muestra el hero, la barra de stats, el header del catálogo, los botones de filtro, la leyenda y el grid de `ServiceCard`. Lee servicios extra de `localStorage` con `useEffect`. El filtro usa `useState` para mostrar solo las cards del ingeniero seleccionado. |
| `AltaPage` | `AltaPage.jsx` | Formulario de alta de servicio. Gestiona estado con `useState`, valida cada campo con funciones puras, muestra errores en tiempo real al `onBlur`, y persiste el nuevo servicio en `localStorage` al enviar. Redirige a `/servicios` tras guardar. |
| `AxelPage` | `AxelPage.jsx` | CV de Axel Dueñas. Layout de pantalla completa: navbar propio (`cv-navbar`) con botón "← Equipo", sidebar navy con inicial decorativa "A", y cuerpo en grid 2×2 con Stack Técnico, Experiencia, Formación y Proyectos. |
| `JosePage` | `JosePage.jsx` | CV de José Beltran. Misma estructura que `AxelPage` con datos e inicial "J". |

#### Datos (`src/data/`)

| Archivo | Exportaciones | Descripción |
|---|---|---|
| `servicios.js` | `SERVICIOS`, `TEMAS`, `ICONOS`, `makeFoto`, `LS_KEY` | Catálogo base de 15 servicios, 8 temas visuales para el formulario de alta, 18 íconos disponibles, helper para generar imágenes SVG con gradiente y la clave de `localStorage`. |

#### App y estilos

| Archivo | Descripción |
|---|---|
| `App.jsx` | Define el router con `HashRouter`. Usa un `MainLayout` (con `<Outlet>`) para las rutas `/`, `/servicios` y `/alta`. Las rutas `/axel` y `/jose` están fuera del layout para no mostrar navbar/footer global. |
| `index.css` | Hoja de estilos global que porta exactamente todos los estilos de `styles.css` y `servicios.css` de la Actividad 2. Variables CSS, reset, navbar, hero, tarjetas expandibles, overlay full-width, CV layout, grid de servicios, animaciones y media queries. |

### Funcionalidad replicada

| Funcionalidad (Actividad 2) | Implementación en React (Actividad 3) |
|---|---|
| Navbar dinámico según `page-id` | `Navbar.jsx` con `useLocation()` — detecta ruta activa |
| Expansión hover de tarjetas con overlay full-width | `TeamCard` en `HomePage.jsx` — `useRef` + `onMouseEnter/Leave` + `useEffect` |
| Cálculo de posición del acento cian | `getBoundingClientRect()` dentro del handler, igual que en `scripts.js` |
| Colapso de `paddingBottom` al expandir | `contentTagRef.current.style.paddingBottom` gestionado en `useEffect` |
| Scroll reveal con `IntersectionObserver` | `useEffect` en `HomePage.jsx` |
| Grid de servicios generado dinámicamente | `.map()` sobre `SERVICIOS` en `ServiciosPage.jsx` |
| Filtro por ingeniero | `useState(filtro)` + `.filter()` en `ServiciosPage.jsx` |
| Imágenes SVG con gradiente | `makeFoto()` exportada desde `data/servicios.js` |
| Formulario de alta con validación | `useState` + funciones de validación + `onBlur` en `AltaPage.jsx` |
| Persistencia en `localStorage` | `localStorage.getItem/setItem` + `JSON.parse/stringify` en ambas páginas |
| Contador de caracteres en textarea | `{campos.descripcion.length} / 300` en JSX |
| Imágenes SVG con gradiente en tarjetas | `makeFoto(gradFrom, gradTo)` — misma función portada desde `servicios.js` |

---

## 5. Comparación de líneas de código

### Actividad 2 — Vanilla HTML/CSS/JS

| Archivo | Líneas |
|---|---|
| `index.html` | 262 |
| `servicios.html` | 19 |
| `axel.html` | 345 |
| `jose.html` | 336 |
| `alta.html` | 157 |
| `styles.css` | 714 |
| `servicios.css` | 501 |
| `alta.css` | 308 |
| `scripts.js` | 172 |
| `servicios.js` | 529 |
| `components.js` | 77 |
| `alta.js` | 256 |
| **Total** | **3 676** |

### Actividad 3 — React + Vite

| Archivo | Líneas |
|---|---|
| `App.jsx` | 35 |
| `main.jsx` | 9 |
| `index.css` | 852 |
| `components/Navbar.jsx` | 23 |
| `components/Footer.jsx` | 8 |
| `components/ServiceCard.jsx` | 51 |
| `data/servicios.js` | 159 |
| `pages/HomePage.jsx` | 258 |
| `pages/ServiciosPage.jsx` | 119 |
| `pages/AltaPage.jsx` | 266 |
| `pages/AxelPage.jsx` | 101 |
| `pages/JosePage.jsx` | 101 |
| **Total** | **1 983** |

### Resumen

| Métrica | Actividad 2 | Actividad 3 | Diferencia |
|---|---|---|---|
| Total de líneas | 3 676 | 1 983 | **−1 693 (−46 %)** |
| Archivos fuente | 12 | 13 | +1 |
| Archivos HTML | 5 | 1 (`index.html` de Vite) | −4 |
| Archivos CSS | 3 | 1 (`index.css`) | −2 |
| Archivos JS/JSX | 4 | 11 | +7 |

La reducción de ~46 % se explica principalmente por:
- Eliminación de HTML duplicado (navbar, footer, estructura base repetida en cada página)
- El CSS creció ligeramente porque se unificó todo en un solo archivo
- Los archivos JS/JSX aumentaron en cantidad pero son más cortos individualmente gracias a la separación de responsabilidades

---

## 6. Ventajas y desventajas

### Actividad 2 — HTML/CSS/JS Vanilla

| Ventajas | Desventajas |
|---|---|
| Sin dependencias ni proceso de build | HTML duplicado en cada página (navbar, footer, `<head>`) |
| Funciona directamente en cualquier servidor estático o `file://` | El DOM se construye de forma imperativa con `createElement` — difícil de leer y mantener |
| Carga inicial más rápida (sin JS de framework) | Sin sistema de componentes: un cambio en el navbar requiere editar todos los archivos HTML |
| Más fácil de depurar con las DevTools sin capas de abstracción | Estado de la aplicación disperso en variables globales y `dataset` del DOM |
| Ideal para proyectos pequeños o estáticos | Escala mal: añadir una nueva página replica código |
| No requiere conocer ningún framework | Las interacciones complejas (tarjetas expandibles, filtros) requieren mucho código imperativo |

### Actividad 3 — React + Vite

| Ventajas | Desventajas |
|---|---|
| Componentes reutilizables: navbar y footer escritos una sola vez | Requiere Node.js, npm y un proceso de build |
| JSX unifica estructura y lógica en un solo lugar | Curva de aprendizaje inicial (JSX, hooks, React Router) |
| `useState` y `useEffect` reemplazan manipulación directa del DOM | El bundle final incluye el runtime de React (~268 KB) |
| React Router permite navegación SPA sin recargar la página | Herramientas de depuración más complejas (React DevTools) |
| `-46 %` de líneas totales gracias a la eliminación de duplicación | El proyecto no funciona sin `npm run build` o `npm run dev` |
| Separación clara de datos (`data/servicios.js`) y vista | `HashRouter` requiere el `#` en las URLs |
| Fácil de extender: nueva página = nuevo archivo `.jsx` | Para un proyecto tan pequeño, React puede ser sobredimensionado |

### Conclusión

Para un proyecto del tamaño de DevCore, **ambos enfoques son válidos**. La versión vanilla es más directa para entregar y no necesita infraestructura adicional. La versión React demuestra cómo los frameworks eliminan la duplicación de código y escalan mejor a medida que el proyecto crece — a costa de añadir un proceso de build y dependencias.

---

## 7. Referencias

### Documentación oficial

- React — Documentación oficial: https://react.dev
- React Router DOM v7: https://reactrouter.com/home
- Vite — Herramienta de build: https://vite.dev
- MDN Web Docs — JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript
- MDN Web Docs — CSS Custom Properties: https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties
- MDN Web Docs — IntersectionObserver: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
- MDN Web Docs — localStorage: https://developer.mozilla.org/es/docs/Web/API/Window/localStorage

### Recursos de diseño y tipografía

- Google Fonts — Playfair Display + Syne: https://fonts.google.com
- FontAwesome 6 Icons: https://fontawesome.com/icons

### Actividades del proyecto (repositorio)

- **Actividad 1** — Estructura HTML/CSS base: rama `main` (commits `f5aa304` → `e39fdc0`)
- **Actividad 2** — Interactividad con JavaScript vanilla: rama `main` (commits `054efc3` → `2688bf8`)
- **Actividad 3** — Refactorización con React: rama `react` (commit `2ff51c9` y siguientes)
