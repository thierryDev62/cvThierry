$(function () {
    $("body").css("font-family", "'Roboto', Arial, sans-serif");

    $("#corps").load("templates/competences.html");

    $("#boutonCompetences").on("click", function () {
        $("#corps").load("templates/competences.html");
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

})

