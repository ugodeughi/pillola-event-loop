
console.log("Inizio");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("Fine");

