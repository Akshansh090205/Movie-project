const movies = {
    Action: [
        "Mad Max: Fury Road",
        "John Wick",
        "Die Hard",
        "The Dark Knight",
        "Gladiator"
    ],
    Comedy: [
        "Superbad",
        "The Hangover",
        "Step Brothers",
        "Groundhog Day",
        "Bridesmaids"
    ],
    Drama: [
        "The Shawshank Redemption",
        "Forrest Gump",
        "The Godfather",
        "Fight Club",
        "12 Angry Men"
    ],
    Horror: [
        "Get Out",
        "The Conjuring",
        "A Nightmare on Elm Street",
        "It Follows",
        "Hereditary"
    ],
    SciFi: [
        "Inception",
        "The Matrix",
        "Interstellar",
        "Blade Runner 2049",
        "Arrival"
    ]
};

document.getElementById('selectButton').addEventListener('click', function() {
    const genre = document.getElementById('genre').value;
    const resultDiv = document.getElementById('result');

    if (genre) {
        const randomMovie = movies[genre][Math.floor(Math.random() * movies[genre].length)];
        resultDiv.innerHTML = `How about watching: <strong>${randomMovie}</strong>!`;
    } else {
        resultDiv.innerHTML = "Please select a genre.";
    }
});