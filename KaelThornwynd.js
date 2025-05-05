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