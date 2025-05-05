aggiunta funzione js per dark mode con relativo pulsante per cambiare il tema della pagina da chiaro a scuro e salvare la preferenza

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    // Cambia icona e testo
    modeIcon.textContent = isDark ? "🌞" : "🌙";
    modeText.textContent = isDark ? "Light Mode" : "Dark Mode";

    // Salva preferenza
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}
// Applica la preferenza salvata al caricamento
window.onload = function () {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        modeIcon.textContent = "🌞";
        modeText.textContent = "Light Mode";
    }
};

aggiunta funzione per l'orologio con i due punti che lampeggiano e orario che sia aggiorna 

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

aggiunta funzione api per prendere meteo e temperatura 

function fetchWeather() {
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=44.6478&longitude=10.9254&current_weather=true";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current_weather.temperature;
            const weatherCode = data.current_weather.weathercode;
            const weatherDescription = mapWeatherCodeToDescription(weatherCode);
            document.getElementById("weather-description").textContent = weatherDescription;
            document.getElementById("temperature").textContent = `${temperature}°C`;
        })
        .catch(error => {
            console.error('Errore nel recuperare il meteo:', error);
            document.getElementById('weather-description').textContent = "Meteo non disponibile.";
        });
}
function mapWeatherCodeToDescription(code) {
    const descriptions = {
        0: "Soleggiato",
        1: "Prevalentemente sereno",
        2: "Parzialmente nuvoloso",
        3: "Coperto",
        45: "Nebbia",
        48: "Nebbia gelata",
        51: "Pioviggine leggera",
        53: "Pioviggine moderata",
        55: "Pioviggine intensa",
        61: "Pioggia leggera",
        63: "Pioggia moderata",
        65: "Pioggia intensa",
        71: "Neve leggera",
        73: "Neve moderata",
        75: "Neve intensa",
        80: "Rovesci leggeri",
        81: "Rovesci moderati",
        82: "Rovesci forti",
        95: "Temporale",
        96: "Temporale con grandine",
        99: "Temporale intenso"
    };

    return descriptions[code] || "Condizioni sconosciute";
}
