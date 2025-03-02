# 📌 map() vs flatMap() in JavaScript

Quando lavoriamo con array in JavaScript, `map()` e `flatMap()` sono due metodi simili, ma con una differenza fondamentale. Vediamo come funzionano!

## 🔹 map()
Il metodo `map()` trasforma ogni elemento di un array e restituisce un nuovo array.

```javascript
const numeri = [1, 2, 3];

const raddoppiati = numeri.map(n => [n * 2]);

console.log(raddoppiati);
// Output: [[2], [4], [6]]
```

👀 Il risultato è un array **annidato**.

## 🔹 flatMap()
Il metodo `flatMap()` combina l'azione di `map()` con un `flat(1)`, "appiattendo" il risultato di un livello.

```javascript
const numeri = [1, 2, 3];

const raddoppiati = numeri.flatMap(n => [n * 2]);

console.log(raddoppiati);
// Output: [2, 4, 6]
```

🔥 **Differenza chiave:** `flatMap()` rimuove automaticamente un livello di annidamento.

## 📍 Quando usare flatMap()?
Se il `map()` genera array annidati e vuoi evitarlo, usa `flatMap()`. Ad esempio, per dividere una stringa in parole:

```javascript
const frasi = ["Ciao mondo", "JavaScript è fantastico"];

const parole = frasi.flatMap(frase => frase.split(" "));

console.log(parole);
// Output: ["Ciao", "mondo", "JavaScript", "è", "fantastico"]
```

Con `map()`, avremmo ottenuto `[["Ciao", "mondo"], ["JavaScript", "è", "fantastico"]]`.

## 🚀 In sintesi:

| Metodo       | Cosa fa?                                      | Output |
|-------------|---------------------------------|-----------------|
| `map()`      | Trasforma gli elementi, ma può creare array annidati | `[ [2], [4], [6] ]` |
| `flatMap()`  | Trasforma e appiattisce di un livello | `[2, 4, 6]` |

⚡ **Ricorda:** `flatMap()` è utile quando l'operazione produce array annidati che vuoi appiattire direttamente.

