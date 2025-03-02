
console.log("1 Inizio caricamento...");

setTimeout(() => {
  console.log("2 Mostra animazione di caricamento...");
}, 0);

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("3 Dati caricati:", data));

console.log("4 UI aggiornata");


/* SBAGLIATO */
/*
1️⃣ Inizio caricamento...
2️⃣ Mostra animazione di caricamento...
3️⃣ Dati caricati: { ... }
4️⃣ UI aggiornata
*/

/* GIUSTO */
/*
1️⃣ Inizio caricamento...
4️⃣ UI aggiornata
2️⃣ Mostra animazione di caricamento...
3️⃣ Dati caricati: { ... }
*/