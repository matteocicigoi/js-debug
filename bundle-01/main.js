/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
/*
for (let i = 0; i > 5; i++) {
    console.log(i);
}
*/
// 1 - un ciclo che stampa i se i è > di 5
// 2 - no
// 3 - si, i non verrà mai stampata
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
/*
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
*/
// 1 - restituisce il numero + 5 se è divisibile per 2
// 2 - si, mancano due uguali nella condizione
// 3 - no
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3
/*
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
*/
// 1 - un ciclo che stampa per 5 volte i
// 2 - si, gli elementi sono separati dalle virogle
// 3 - no
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
/*
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
*/
// 1 - una funzione che dovrebbe resituire un array con solo valori pari
// 2 - si, il punto e virgola dentro il for, solo un uguale nella condizione, il punto e virgola primma delle graffe
// 3 - si, numbers.length - 1 , numbers nella condizione, evenNumbers push aggiunge il valore del ciclo invece che il contenuto dell'array, il return dentro il for
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();