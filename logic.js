// todo dichiarare le variabili
    const myContainer = document.querySelector(".container");


// Visualizzare in pagina 5 numeri casuali.
    // creare 5 numeri casuali da 1 a 100
    // usare un ciclo for
        for (let i = 0; i < 5; i++ ) {
            let randomNum = getRandomInt(1, 100);
            console.log(randomNum);
            let rememberNum = document.createElement("p");
            rememberNum.textContent = randomNum;
            myContainer.append(rememberNum);
        }
        
// console.log(myContainer);


// Da lì parte un timer di 30 secondi.


// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ! FUNCTIONS

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  