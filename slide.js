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
}

// Esegui l'update dell'orologio ogni secondo
setInterval(updateClock, 1000);
updateClock(); // Chiama subito all’avvio







