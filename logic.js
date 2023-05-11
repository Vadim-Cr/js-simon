// todo dichiarare le variabili
    const myContainer = document.querySelector(".container");
    // console.log(myContainer);


// Visualizzare in pagina 5 numeri casuali.
// creo un array per i 5 numeri
const myArr = [];
const userArr = [];
    // creare 5 numeri casuali da 1 a 100
    // usare un ciclo for
     for (let i = 0; i < 5; i++ ) {
        let randomNum = getRandomInt(1, 100);
        console.log(randomNum);
        myArr.push(randomNum);
        let rememberNum = document.createElement("p");
        rememberNum.innerText = randomNum;
        myContainer.append(rememberNum);
    }
    console.log(myArr);

    // Da lì parte un timer di 30 secondi.
let timer = setTimeout(rememberMe, 30000);

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // creamo un prompt dove l'utente inserisce i numeri 5 volte
    for (let i=0; i < 5; i++) {
        let userTimer = setTimeout(userInput, 31000);
    };


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
setTimeout(() => {
    compareArrays(myArr, userArr);
  }, 3100 * 10);
  

// ! FUNCTIONS

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// Devo creare una funzione con dentro un elemento p che dica "Spero tu abbia una buona" e sostituisca attrqverso innerHTML quello che c'era prima
function rememberMe () {
    myContainer.innerHTML = "<p>Spero tu abbia una buona memoria, hai 30 secondi per inserire i numeri</p>";
}


function userInput () {
    let userNumbInput = parseInt(prompt("inserisci il tuo numero, hai solo 30 secondi!"));
    userArr.push(userNumbInput);
}

function compareArrays(myArr, userArr) {
    let userMemNumbers = 0;
    for (let i = 0; i < myArr.length; i++) {
      if (userArr.includes(myArr[i])) {
        userMemNumbers++;
        myContainer.innerHTML = `Hai memorizzato corettamente ${userMemNumbers} numeri`;
        console.log(userMemNumbers);
        console.log(`Value ${myArr[i]} is included in the second array.`);
      } else {
        console.log(`Value ${myArr[i]} is not included in the second array.`);
      }
    }
  }

