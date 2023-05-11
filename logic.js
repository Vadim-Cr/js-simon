// todo dichiarare le variabili
    const myContainer = document.querySelector(".container");
    // console.log(myContainer);


// Visualizzare in pagina 5 numeri casuali.
    // creare 5 numeri casuali da 1 a 100
    // usare un ciclo for
     for (let i = 0; i < 5; i++ ) {
        let randomNum = getRandomInt(1, 100);
        console.log(randomNum);
        let rememberNum = document.createElement("p");
        rememberNum.innerText = randomNum;
        myContainer.append(rememberNum);
    }

    // Devo creare una funzione con dentro un elemento p che dica "Spero tu abbia una buona" e sostituisca attrqverso innerHTML quello che c'era prima


    // Da lì parte un timer di 30 secondi.
let timer = setTimeout(rememberMe, 3000);

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // creamo un prompt dove l'utente inserisce i numeri 5 volte
    for (let i=0; i < 5; i++) {
        let userTimer = setTimeout(userInput, 3100);
        let 
        console.log();
    }


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ! FUNCTIONS

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function rememberMe () {
    myContainer.innerHTML = "<p>Spero tu abbia una buona memoria</p>";
}

function userInput () {
    let userInput = prompt("inserisci il tuo numero");
    userInput =
}