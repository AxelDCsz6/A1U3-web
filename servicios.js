/* ============================================================
   DEVCORE — servicios.js
   Scroll reveal escalonado + filtro por ingeniero
   ============================================================ */

// ── SCROLL REVEAL ──
const allReveal = [...document.querySelectorAll('.reveal')];

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const idx = allReveal.indexOf(entry.target);
            const col  = idx % 3;
            entry.target.style.transitionDelay = `${col * 0.09}s`;
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

allReveal.forEach(el => revealObserver.observe(el));

// ── FILTRO POR INGENIERO ──
const filtroBtns    = document.querySelectorAll('.filtro-btn');
const servicioCards = document.querySelectorAll('.servicio-card');

filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filtroBtns.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');

        const filter = btn.dataset.filter;

        servicioCards.forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else {
                const engineers = card.dataset.engineers || '';
                if (engineers.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});
