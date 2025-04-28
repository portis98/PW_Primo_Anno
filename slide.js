var myCarousel = document.querySelector('#carouselExample')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,  // Cambia l'immagine ogni 3 secondi
    ride: 'carousel'
})

// Funzione per l'orologio
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;

    // Lampeggio dei due punti
    const dots = document.getElementById('dots');
    dots.style.visibility = dots.style.visibility === 'hidden' ? 'visible' : 'hidden';
    dots.style.color = dots.style.color === 'white' ? 'red' : 'white';
}

// Esegui l'update dell'orologio ogni secondo
setInterval(updateClock, 1000);
updateClock(); // Chiama subito all’avvio


const modeIcon = document.getElementById("mode-icon");
const modeText = document.getElementById("mode-text");

// Applica la preferenza salvata al caricamento
window.onload = function () {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        modeIcon.textContent = "🌞";
        modeText.textContent = "Light Mode";
    }
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    // Cambia icona e testo
    modeIcon.textContent = isDark ? "🌞" : "🌙";
    modeText.textContent = isDark ? "Light Mode" : "Dark Mode";

    // Salva preferenza
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

function fetchWeather() {
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=44.6478&longitude=10.9254&current_weather=true";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current_weather.temperature;
            document.getElementById("weather-description").textContent = "Temperatura attuale:";
            document.getElementById("temperature").textContent = `${temperature}°C`;
        })
        .catch(error => {
            console.error('Errore nel recuperare il meteo:', error);
            document.getElementById('weather-description').textContent = "Meteo non disponibile.";
        });
}






