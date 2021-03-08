// Palidroma
// chiedo all'utente di inserire una parola
var parola = prompt('Inserisci una parola: ');

// CONTROLLO
// se la parola inserita è un numero
if (!isNaN(parola)) {
  // stampo messaggio di errore
  console.log('Attenzione! Non hai inserito una parola!');
  // altrimenti
} else {
  // stampo la parola inserita
  console.log(parola);
}

// creo funzione per controllare se la parola è palindroma
function checkPalindroma (str) {
  // divido ogni lettera della parola in sottostringhe
  // inverto l'ordine delle lettere
  // ricompongo la parola unendo le singole lettere.
  return str == str.split('').reverse().join('');
}
// stampo e verifico il risultato
console.log(checkPalindroma(parola));





// Pari e Dispari
// creo variabile vera per il ciclo
var pariDispari = true;

// finché pariDispari sarà vera
while (pariDispari) {
  // chiedo all'utente di scegliere tra pari e dispari
  var scelta = prompt("Scegli tra pari o dispari: ");
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
        console.log('Pari');
        break;
      case "dispari":
        pariDispari = false;
        console.log('Dispari');
        break;
    }
  }
}
