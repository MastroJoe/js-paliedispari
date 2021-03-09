// Palidroma
// chiedo all'utente di inserire una parola
var parolaUtente = prompt('Inserisci una parola: ');

// CONTROLLO
// se la parola inserita è un numero
if (!isNaN(parolaUtente)) {
  // stampo messaggio di errore
  console.log('Attenzione! Non hai inserito una parola!');
  // altrimenti
} else {
  // stampo la parola inserita
  console.log(parolaUtente);
}

// creo funzione per controllare se la parola è palindroma
function checkPalindrome (parola) {
  // divido ogni lettera della parola (in sottostringhe)
  // inverto l'ordine delle lettere
  // ricompongo la parola unendo le singole lettere.
  return parola == parola.split('').reverse().join('');
}

// stampo e verifico il risultato
console.log("La parola è palindroma? " + checkPalindrome(parolaUtente));




// Pari e Dispari
// creo variabile vera per il ciclo
var pariDispari = true;

// finché pariDispari sarà vera
while (pariDispari) {
  // chiedo all'utente di scegliere tra pari e dispari
  var scelta = prompt("Scegli tra pari e dispari: ");
  // se la parola inserita è un numero
  if (!isNaN(scelta)) {
    // stampo messaggio di errore
    console.log('Attenzione! Non hai inserito una parola!');
    // altrimenti
  } else {
    // controllo la scelta e stampo il risultato
    switch (scelta) {
      case "pari":
        pariDispari = false;
        console.log('Hai scelto: Pari');
        break;
      case "dispari":
        pariDispari = false;
        console.log('Hai scelto: Dispari');
        break;
    }
  }
}

// chiedo all'utente di inserire un numero tra 1 e 5 (compresi)
do {
  var numeroUtente = parseInt(prompt("Scegli e inserisci un numero da 1 a 5: "));
} while (!(numeroUtente >= 1 && numeroUtente <= 5)) {
  console.log("Il tuo numero è: " + numeroUtente);
}

// creo una funzione che generi un numero random da 1 a 5 per il computer
function randomNumberPc (min, max) {
  return Math.floor(Math.random() * (max) + min);
}

// e stampo il risultato
var randomNumberPc = randomNumberPc(1, 5);
console.log("Il numero del pc è: " + randomNumberPc);

// sommo i due numeri ottenuti e stampo il risultato
var somma = numeroUtente + randomNumberPc;
console.log("La somma dei due numeri è: " + somma);

// creo una funzione che stabilisca se la somma è pari o dispari
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function checkNumber (risultatoSomma) {
  // se la somma è pari, stampo
  if (somma%2 == 0) {
    console.log('La somma è pari.');
    // altrimenti
  } else {
    console.log('La somma è dispari.');
  }
}

// dichiaro il vincitore
if (scelta == "pari" && somma%2 == 0) {
  console.log("Il vincitore sei tu! :) ");
} else if (scelta == "pari" && somma%2 == 1){
  console.log("Vince il computer :( ");
} else if(scelta == "dispari" && somma%2 == 0){
  console.log("Vince il computer :( ");
} else {
  console.log("Il vincitore sei tu! :) ");
}
