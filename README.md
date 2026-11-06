# Bloom — Studio di Design

Landing page responsive per un ipotetico studio creativo, sviluppata come **Week Project 5 di EPICODE**.

Il progetto presenta i servizi dello studio, i lavori realizzati, il team e le testimonianze dei clienti attraverso un'interfaccia moderna e interattiva.

## Tecnologie utilizzate

- **HTML5** — Struttura semantica della pagina
- **CSS3** — Mobile-first, Flexbox, CSS Nesting, media query e animazioni
- **JavaScript** — Gestione delle interazioni e degli eventi DOM
- **Font Awesome** — Icone dell'interfaccia

## Funzionalità

- Header sticky con cambiamento di colore e dimensioni durante lo scroll
- Navigazione interna tra le sezioni
- Hero con animazioni di ingresso e pulsante per il preventivo
- Griglia di sei lavori con effetti hover
- Sezioni Servizi e Team con card animate in sequenza
- Carosello testimonial a scorrimento continuo, con pausa al passaggio del mouse
- Modalità chiara e scura tramite toggle
- Modale di richiesta preventivo con validazione dei campi, messaggio di conferma e chiusura automatica
- Blocco dello scorrimento della pagina durante l'apertura della modale
- Supporto a `prefers-reduced-motion` per ridurre le animazioni

## Responsive Design

Il progetto segue un approccio **mobile-first**, con layout adattivo e verifiche alle principali larghezze:

- **576px** — Layout mobile a colonna singola
- **768px** — Layout tablet con griglie a due colonne
- **992px e oltre** — Layout desktop con griglie a tre colonne
- **1200px** — Contenuti centrati con larghezza massima di 980px

## Struttura del progetto

```text
Progetto-Settimana-5/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── img/
        └── works.png
```

## Avvio

Aprire `index.html` nel browser oppure utilizzare **Live Server** tramite Visual Studio Code.

Il progetto è una demo frontend: il modulo di preventivo simula l'invio e non trasmette dati a un server.

## Autore

**Emanuel Esposito** — EPICODE, Full Stack AI Developer.