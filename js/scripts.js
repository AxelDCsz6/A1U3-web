/* ============================================================
   DEVCORE — scripts.js
   Animaciones de entrada por scroll e interacciones UI.
   ============================================================ */

(function () {
    "use strict";

    /* ── 1. TRACKING DE CARD ACTIVA ── */
    const cards = document.querySelectorAll(".card");
    const contenedor = document.querySelector(".contenedor-tarjetas");
    const contentTag = document.querySelector(".content-tag");
    let activeCard = null;

    function openCard(card) {
        var slide2 = card.querySelector(".slide2");
        if (!slide2) return;

        // Calcular posición del acento cian relativa al slide2
        var cardRect = card.getBoundingClientRect();
        var slide2Rect = slide2.getBoundingClientRect();
        var accentLeft = cardRect.left - slide2Rect.left;
        slide2.style.setProperty("--accent-left", accentLeft + "px");
        slide2.style.setProperty("--accent-width", cardRect.width + "px");

        // Medir altura real del contenido antes de animar
        slide2.style.height = "auto";
        var fullH = slide2.scrollHeight + 36; // +36 padding inferior
        slide2.style.height = "0";
        // Forzar reflow para que la transición arranque desde 0
        slide2.getBoundingClientRect();
        slide2.style.height = fullH + "px";
        contenedor.style.marginBottom = fullH + "px";
        contentTag.style.paddingBottom = "0";
    }

    function closeCard(card) {
        var slide2 = card.querySelector(".slide2");
        if (!slide2) return;
        slide2.style.height = "0";
        contenedor.style.marginBottom = "0";
        contentTag.style.paddingBottom = "";
    }

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            if (activeCard && activeCard !== card) {
                activeCard.classList.remove("is-open");
                closeCard(activeCard);
            }
            activeCard = card;
            card.classList.add("is-open");
            openCard(card);
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("is-open");
            closeCard(card);
            if (activeCard === card) activeCard = null;
        });
    });


    /* ── 2. ANIMACIONES DE ENTRADA POR SCROLL ── */
    // Las cards y secciones aparecen suavemente al entrar al viewport.

    const revealTargets = document.querySelectorAll(
        ".card, .seccion-cta, footer"
    );

    // Inyectamos los estilos de reveal directamente desde JS
    // para no contaminar el CSS base.
    const revealStyle = document.createElement("style");
    revealStyle.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(32px);
            transition: opacity 0.65s cubic-bezier(.22,1,.36,1),
                        transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(revealStyle);

    revealTargets.forEach(function (el, i) {
        el.classList.add("reveal");
        // Stagger leve entre elementos hermanos
        el.style.transitionDelay = (i * 0.08) + "s";
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // once
                }
            });
        },
        { threshold: 0.12 }
    );

    revealTargets.forEach(function (el) {
        observer.observe(el);
    });


    /* ── 3. HIGHLIGHT DE SKILL TAGS AL HOVER ── */
    // Al pasar el mouse sobre un tag, resalta los del mismo tipo
    // en la misma card para dar feedback visual de categorías.

    document.querySelectorAll(".tag").forEach(function (tag) {
        tag.addEventListener("mouseenter", function () {
            const cls = Array.from(tag.classList).find(function (c) {
                return c.startsWith("tag-") && c !== "tag";
            });
            if (!cls) return;
            const card = tag.closest(".card");
            card.querySelectorAll("." + cls).forEach(function (t) {
                t.style.outline = "2px solid var(--cyan)";
                t.style.outlineOffset = "2px";
            });
        });

        tag.addEventListener("mouseleave", function () {
            const card = tag.closest(".card");
            card.querySelectorAll(".tag").forEach(function (t) {
                t.style.outline = "";
                t.style.outlineOffset = "";
            });
        });
    });


    /* ── 4. SMOOTH SCROLL PARA EL ANCLA DEL NAVBAR ── */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });


    /* ── 5. INDICADOR ACTIVO EN NAVBAR AL HACER SCROLL ── */
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const sections = document.querySelectorAll("[id]");

    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 80;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.style.color = "";
            const href = link.getAttribute("href");
            if (href && href.includes(current) && current !== "") {
                link.style.color = "var(--cream)";
            }
        });
    }, { passive: true });

})();
