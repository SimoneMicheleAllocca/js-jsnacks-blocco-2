// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// // Ogni volta che ne crei uno, stampalo a schermo.


let array= [];
for (let i = 0; i< 10; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
} 
    



const userNumber = parseInt(prompt("Inserisci un numero"));
for (let i = 0; i < userNumber; i++)

