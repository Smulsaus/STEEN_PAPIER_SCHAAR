document.addEventListener("DOMContentLoaded", function () {
    // Definieer de feestdagen
    var feestdagen = [
        { datum: "2024-01-01", naam: "Nieuwjaarsdag" },
        { datum: "2024-04-01", naam: "Tweede Paasdag" },
        { datum: "2024-04-27", naam: "Koningsdag" },
        { datum: "2024-05-05", naam: "Bevrijdingsdag" },
        { datum: "2024-05-26", naam: "Hemelvaartsdag" },
        { datum: "2024-06-06", naam: "Eerste Pinksterdag" },
        { datum: "2024-06-07", naam: "Tweede Pinksterdag" },
        { datum: "2024-12-25", naam: "Eerste Kerstdag" },
        { datum: "2024-12-26", naam: "Tweede Kerstdag" }
    ];
    

    // Sorteer de feestdagen op datum
    feestdagen.sort(function (a, b) {
        return new Date(a.datum) - new Date(b.datum);
    });

    var huidigeDatum = new Date();
    var huidigeTijd = huidigeDatum.getTime();

    // Zoek de eerstvolgende feestdag
    var eerstvolgendeFeestdag = feestdagen.find(function (feestdag) {
        return new Date(feestdag.datum).getTime() >= huidigeTijd;
    });

    if (eerstvolgendeFeestdag) {
        document.getElementById('feestdag').innerHTML = "<h2>" + eerstvolgendeFeestdag.naam + " op " + eerstvolgendeFeestdag.datum + "</h2>";
    } else {
        document.getElementById('feestdag').innerHTML = "<h2>Er zijn geen aankomende feestdagen</h2>";
    }

    // Toon alle feestdagen wanneer de gebruiker op de knop klikt
    document.getElementById('toggle').addEventListener('click', function () {
        var alleFeestdagen = feestdagen.map(function (feestdag) {
            return "<p>" + feestdag.naam + " op " + feestdag.datum + "</p>";
        }).join('');

        document.getElementById('alleFeestdagen').innerHTML = alleFeestdagen;
        document.getElementById('alleFeestdagen').style.display = 'block';
        document.getElementById('title').innerHTML = 'Alle Nederlandse Feestdagen';
    });
});
