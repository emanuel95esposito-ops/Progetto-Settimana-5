// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

const header = document.getElementById("site-header");
const track = document.querySelector(".testimonials-track");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const overlay = document.querySelector("#preventivo-overlay");
const apriPreventivo = document.querySelector(".cta-button");
const chiudiPreventivo = document.querySelector(".preventivo-close");
const formPreventivo = document.querySelector("#preventivo-form");
const messaggioSuccesso = document.querySelector(".preventivo-success");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 100);
});


[...track.children].forEach((card) => {   // Crea una copia dell'elenco delle card e le scorre una alla volta
    const copia = card.cloneNode(true);   // Duplica la card, compresi tutti gli elementi al suo interno
    track.appendChild(copia);             // Aggiunge la card duplicata alla fine del contenitore  
});                                       // Questa funzione è "semplice" ma davvero bella ! 
                                          // mi ha risolto il problema della ripetizione delle card in tutte le visuali!


themeToggle.addEventListener("click", () => {
    const darkMode = document.body.classList.toggle("dark");

    if (darkMode) {
        themeIcon.className = "fa-solid fa-sun";
    } else {
        themeIcon.className = "fa-solid fa-moon";
    }
});

// Apertura della modale
apriPreventivo.addEventListener("click", () => {
    messaggioSuccesso.classList.remove("visible");
    formPreventivo.reset();
    overlay.classList.add("is-open");
    document.body.classList.add("modal-open");
});

// Funzione per chiudere la modale con animazione
function chiudiModale() {
    if (!overlay.classList.contains("is-open") ||
        overlay.classList.contains("is-closing")) {
        return;
    }

    overlay.classList.add("is-closing");

    setTimeout(() => {
        overlay.classList.remove("is-open", "is-closing");
        document.body.classList.remove("modal-open");
    }, 300);
}

// Chiusura tramite X
chiudiPreventivo.addEventListener("click", () => {
    chiudiModale();
});

// Chiusura cliccando fuori dalla modale
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        chiudiModale();
    }
});

// Chiusura con ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        chiudiModale();
    }
});

// Simulazione invio del modulo
formPreventivo.addEventListener("submit", (e) => {
    e.preventDefault();

    messaggioSuccesso.classList.add("visible");

    // Chiusura automatica dopo 2,5 secondi
    setTimeout(() => {
        chiudiModale();
    }, 2000);
});