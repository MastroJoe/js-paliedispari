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
function parolaPalindroma (str) {
  // divido ogni lettera della parola in sottostringhe
  // inverto l'ordine delle lettere
  // ricompongo la parola unendo le singole lettere.
  return str == str.split('').reverse().join('');
}
