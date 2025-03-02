
// const numeri = [1, 2, 3];
// const raddoppiati = numeri.map(n => [n * 2]);
// console.log(raddoppiati);
// Output: [[2], [4], [6]]

const numeri = [1, 2, 3];
const raddoppiati = numeri.flatMap(n => [n * 2]);
console.log(raddoppiati);
// Output: [2, 4, 6]

const frasi = ["Ciao mondo", "JavaScript è fantastico"];
const parole = frasi.flatMap(frase => frase.split(" "));
console.log(parole);
// Output: ["Ciao", "mondo", "JavaScript", "è", "fantastico"]