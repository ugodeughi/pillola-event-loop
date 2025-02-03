# 📝 JavaScript: Event Loop e la coda dei callback  

## 📌 Introduzione  
L'Event Loop è il meccanismo che permette a JavaScript, un linguaggio **single-threaded**, di gestire operazioni asincrone senza bloccare l’esecuzione del codice.  

## 🔄 Come funziona  
1. Il codice **sincrono** viene eseguito immediatamente.  
2. Le operazioni **asincrone** (come `setTimeout`, `fetch`, e event listener) vengono delegate alle **Web API** del browser o all’ambiente runtime in Node.js.  
3. Una volta completate, queste operazioni finiscono nella **coda dei callback**.  
4. L’**Event Loop** monitora lo **stack di esecuzione** e, quando è vuoto, esegue i callback in attesa.  

## 🔍 Esempio di codice  
Prova a prevedere l'output prima di eseguirlo:  

```javascript
console.log("Inizio");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("Fine");

/*
  Quale sarà l'output?
  Pensa alla priorità delle microtask rispetto alla coda dei callback!
*/
```

## ✅ Soluzione  
```
Inizio  
Fine  
Promise  
Timeout  
```

## ❗ Perché?  
- `"Inizio"` e `"Fine"` sono eseguiti immediatamente (sincroni).  
- La **Promise** viene inserita nella **microtask queue**, che ha priorità sulla coda dei callback.  
- Il **setTimeout** viene eseguito solo dopo che lo stack è vuoto, anche se ha `0ms` di delay.  

