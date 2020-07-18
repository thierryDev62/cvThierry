$(function () {
    let button = $("button");
    let logo = $("#logo");
    let corps = $("#corps");
    let boutonCompetences = $("#boutonCompetences");
    let boutonExperiencesPro = $("#boutonExperiencesPro");
    let boutonFormation = $("#boutonFormation");
    let boutonRealisations = $("#boutonRealisations");
    let boutonLesPlus = $("#boutonLesPlus");

    corps.load("templates/competences.html");

    // Animation des boutons du menu

    button.on("mouseover", function () {
        $(this).css({
            "transform": "scale(1.1)",
            "transition-property": "transform",
            "transition-duration": "0.2s",
            "border-radius": "25% 10%",
            "box-shadow": "0 2px 8px rgba(0,0,0,0.4), 0 1px 9px rgba(0,0,0,0.2)"
        }).addClass("border border-warning");
    });

    button.on("mouseout", function () {
        $(this).css({
            "transform": "scale(1)",
            "border-radius": "0",
            "box-shadow": "none"
        }).removeClass("border border-warning");
    });

    // La photo de profil
    logo.on("mouseenter", function(){
        $(this).css(
            {
                "transform": "scale(1.1)",
                "transition-property": "transform",
                "transition-duration": "0.2s",
                "opacity": "0.5"
            }
        )
    });
    logo.on("mouseleave", function(){
        $(this).css(
            {
                "transform": "scale(1)",
                "opacity": "1"
            }
        )
    });

    // Partie avec tous les évènements aux clics dans les différentes rubriques

    boutonCompetences.on("click", function () {
        corps.load("templates/competences.html").hide().fadeIn();
    });

    boutonExperiencesPro.on("click", function () {
        corps.load("templates/experiences.html").hide().fadeIn();
    });

    boutonFormation.on("click", function () {
        corps.load("templates/formation.html").hide().fadeIn();
    });

    boutonRealisations.on("click", function () {
        corps.load("templates/realisations.html").hide().fadeIn();
    });

    boutonLesPlus.on("click", function () {
        corps.load("templates/lesplus.html").hide().fadeIn();
    });
});

