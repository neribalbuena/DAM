const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", async () => {
    jokeText.textContent = "Cargando...";

    try {
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" }
        });

        const data = await res.json();
        jokeText.textContent = data.joke;

    } catch (error) {
        jokeText.textContent = "Error al obtener el chiste";
    }
});