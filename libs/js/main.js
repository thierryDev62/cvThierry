$(function () {
    $("body").css("font-family", "'Sriracha', cursive, Arial, sans-serif");

    $("#corps").load("templates/competences.html");

    // Animation des boutons du menu

    $("button").on("mouseover", function () {
        $(this).css({
            "transform": "scale(1.2)",
            "transition-property": "transform",
            "transition-duration": "0.3s",
            "box-shadow": "0 2px 8px rgba(0,0,0,0.4), 0 1px 9px rgba(0,0,0,0.2)"
        });
    });
    $("button").on("mouseout", function () {
        $(this).css({
            "transform": "scale(1)",
            "box-shadow": "none"
        });
    });

    // Partie JQuery avec tous les évènements aux clics dans les différentes rubriques

    $("#boutonCompetences").on("click", function () {
        $("#corps").load("templates/competences.html").hide().fadeIn();
    });

    $("#boutonExperiencesPro").on("click", function () {
        $("#corps").load("templates/experiences.html").hide().fadeIn();
    });

    $("#boutonFormation").on("click", function () {
        $("#corps").load("templates/formation.html").hide().fadeIn();
    });

    $("#boutonRealisations").on("click", function () {
        $("#corps").load("templates/realisations.html").hide().fadeIn();
    });

    $("#boutonLesPlus").on("click", function () {
        $("#corps").load("templates/lesplus.html").hide().fadeIn();
    });

})

