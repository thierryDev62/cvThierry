// Partie JQuery avec tous les évènements aux clics dans les différentes rubriques

$(function () {
    $("body").css("font-family", "'Roboto', Arial, sans-serif");

    $("#corps").load("templates/competences.html");

    $("#boutonCompetences").on("click", function () {
        $("#corps").load("templates/competences.html").hide().fadeIn();
    });

    $("#boutonExperiencesPro").on("click", function() {
        $("#corps").load("templates/experiences.html")
    });

    $("#boutonFormation").on("click", function() {
        $("#corps").load("templates/formation.html")
    });

    $("#boutonRealisations").on("click", function() {
        $("#corps").load("templates/realisations.html")
    });

    $("#boutonLesPlus").on("click", function() {
        $("#corps").load("templates/lesplus.html")
    });

})

