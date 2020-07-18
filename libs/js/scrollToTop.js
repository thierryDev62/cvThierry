// Un scroll to top en Vanilla JS

(function() {
    'use strict';

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = 100; // Coordonnées en pixel de l'affichage de la flêche

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show'); // Montre la flêche
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show'); // fait disparaître la flêche
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80); // Vitesse du scroll
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
