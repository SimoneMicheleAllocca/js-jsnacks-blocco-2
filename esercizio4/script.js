// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

let array = [1, 2, 3, 4, 5];

let elemento = parseInt(prompt("Inserisci l'elemento da cercare:"));

let indice = trovaIndice(array, elemento);

if (indice !== -1){
    console.log(elemento, "si trova all'indice", indice);
} else{
    console.log(elemento, "non è presente nell'array e l'indice è -1");
}