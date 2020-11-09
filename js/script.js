//  ESERCIZIO N°1

/*Creare un oggetto che descriva uno studente
con le seguenti proprietà:
 nome, cognome e età. Stampare a schermo attraverso
 il for in tutte le proprietà.
*/

// genero un oggetto il quale conterrà i miei dati.
var studente = {
  'nome': 'Nicola',
  'cognome': 'Melito',
  'età': 24,
};
var txt = '';

/* faccio un ciclo 'for in' dove stamperò sia alla console che
nella pagina HTML quello che contiene studente;*/

for(var chiave in studente) {
  txt += studente[chiave] + ', ';
  console.log(studente[chiave]);
  //stampo in HTML
  document.getElementById('outputUno').innerHTML = txt;
}

//  ESERCIZIO N°2

/*Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti
e stampare per ognuno nome e cognome.
*/

// genero un array contenente oggetto bi-dimensionale, con i dati studenti

var studenti = [
  {
    'nome': 'Mery',
    'cognome': 'Mallardo',
  },
  {
    'nome': 'Giuseppe',
    'cognome': 'Naso',
  },
  {
    'nome': 'Antonio',
    'cognome': 'Spaziale',
  },
  {
    'nome': 'Francesco',
    'cognome': 'Simioli',
  },
];

/* faccio un ciclo 'for' dove stamperò sia alla console che
nella pagina HTML quello che contiene studenti;*/

for(var i = 0; i < studenti.length; i++) {

  console.log(studenti[i].nome);
  console.log(studenti[i].cognome);
//stampo in HTML
  document.getElementById('outputDue').innerHTML += studenti[i].nome + ', ' + studenti[i].cognome + '; <br>' ;
}


// Esercizio n°3;

/*Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
inserendo nell’ordine: nome, cognome e età.*/

// definisco l'oggetto, come variabile e array
var student = [];
var nuovoStudente = {
  'nome': undefined,
  'cognome': undefined,
  'eta': undefined
};


// genero i prompt per far inserire i dati richiesti.

nuovoStudente.nome = prompt('Inserisci il tuo nome:');
nuovoStudente.cognome = prompt('Inserisci anche il tuo cognome:');
nuovoStudente.eta = parseInt(prompt('Inserisci infine la tua età:'));

console.log(nuovoStudente);
student.push(nuovoStudente);
//stampo in HTML
document.getElementById('outputTre').innerHTML = nuovoStudente.nome + ', ' + nuovoStudente.cognome + ', ' + nuovoStudente.eta + ';';
