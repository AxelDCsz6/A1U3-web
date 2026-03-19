/* ============================================================
   DEVCORE — components.js
   Inyección dinámica de navbar y footer
   ============================================================ */

var pageId = (document.querySelector('meta[name="page-id"]') || {}).content || '';

function renderNavbar() {
    var nav = document.createElement('div');

    if (pageId === 'axel' || pageId === 'jose') {
        nav.className = 'navbar cv-navbar';

        var brand = document.createElement('a');
        brand.href = 'index.html';
        brand.className = 'cv-brand';
        brand.textContent = 'DEVCORE';

        var back = document.createElement('a');
        back.href = 'index.html#integrantes';
        back.className = 'cv-back';
        back.textContent = '\u2190 Equipo';

        nav.appendChild(brand);
        nav.appendChild(back);

        document.body.insertBefore(nav, document.body.firstChild);
    } else {
        nav.className = 'navbar';

        var ul = document.createElement('ul');

        var navLinks = [
            { href: pageId === 'index' ? '#ancla' : 'index.html', text: '\u00bfQui\u00e9nes somos?', id: 'index' },
            { href: 'servicios.html', text: 'Servicios', id: 'servicios' }
        ];

        navLinks.forEach(function(link) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            if (link.id === pageId) {
                a.className = 'nav-active';
            }
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);

        var hr = document.createElement('hr');
        document.body.insertBefore(hr, document.body.firstChild);
        document.body.insertBefore(nav, document.body.firstChild);
    }
}

function renderFooter() {
    var footer = document.createElement('footer');

    var mark = document.createElement('span');
    mark.className = 'footer-mark';
    mark.textContent = 'DEVCORE';

    var p = document.createElement('p');
    p.textContent = '\u00a9 2025 \u2014 Todos los derechos reservados.';

    footer.appendChild(mark);
    footer.appendChild(p);

    document.body.appendChild(footer);
}

renderNavbar();
if (pageId !== 'axel' && pageId !== 'jose') {
    renderFooter();
}
