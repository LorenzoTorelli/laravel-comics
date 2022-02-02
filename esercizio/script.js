// let primo = parseInt( prompt("inserisci numero"));
// let secondo = parseInt (prompt("inserisci numero"));

// if (primo > secondo) {
//     console.log(primo);
// }

// else if (secondo > primo) {
//     console.log(secondo);
// }

// else { 
//     console.log("sono uguali")
// }


// let somma = 0;
// for ( i = 0; i < 10; i++) {
//     let num = parseInt(prompt("inserisci numero"));
//     somma += num;
// }

// console.log(somma);

// let lista = [];

// for (i = 0; i<6; i++) {
//     let num = parseInt(prompt("inserisci numero"));
//     if (num %2 != 0) {
//         lista.push(num);
//     } 
// }

// console.log(lista)


// let n = parseInt(prompt("inserisci numero"));
// let lista = [];
// for (i= 1; i <= n; i++) {
//     lista.push(i*i*i);
// }   
// console.log(lista);


// let sentinella = false;


// for ( let i = 0; i < mail.length; i++) {
//   const mailutente = prompt("inserisci un email");
//   if (mailutente === mail[i]) {
//     console.log(mail[i]);
//     sentinella = true;
//   }
// }

// if (sentinella) {
//   console.log("trovato");
// }
// else {
//   console.log("nontrovato");
// }

// let sentinella = false;

// while (i < mail.length) {
//     const mailutente = prompt("inserisci un email");
//     if (mailutente === mail[i]) {
//         console.log(mail[i]);
//         sentinella = true;
//     }
//     i++;
// }
// if (sentinella) {
//   console.log("trovato");
// }
// else {
//   console.log("nontrovato");
// }


// const numeri = [1,2,3,6,74,87,5,12];
// let pari = document.getElementById("pari");
// let dispari = document.getElementById("dispari");

// let testoPari = '';
// let testoDispari = '';
// for (let i = 0; i<numeri.length; i++) {
//     if (numeri[i] % 2 == 0) {
//         testoPari += numeri[i] + ' ';
//     }
//     else {
//         testoDispari += numeri[i] + ' ';
//     }
// }

// pari.innerHTML = "Numeri Pari: " + testoPari;
// pari.style.color = "green";
// dispari.innerHTML = "numeri Dispari: " + testoDispari;
// dispari.style.color = "red";


// Esercizio 1
// let somma = 0;
// for(let i = 0; i<5; i++) {
//     somma += parseInt(prompt("inserisci numero"));
// }
// console.log(somma)

// let i= 0;

// while (i<5) {
//     somma += parseInt(prompt("inserisci numero"));
//     i++;
// }

// console.log(somma)


// let n = parseInt(prompt("inserisci numero Array"));

// for (let i = 0; i<n; i++) {
//     let array = [];
//     for (let k = 0; k<10; k++) {
//         let z = Math.floor(Math.random() * 100) + 1;
//         array.push(z);
//     }
//     console.log(array);
// }


// const zucchine = [
//     {
//     "peso":10,
//     "lunghezza":20,
//     },
//     {
//     "peso":10,
//     "lunghezza":20,
//     },
//     {
//     "peso":6,
//     "lunghezza":20,
//     },
//     {
//     "peso":5,
//     "lunghezza":20,
//     },
//     {
//     "peso":19,
//     "lunghezza":20,
//     },
//     {
//     "peso":11,
//     "lunghezza":20,
//     },
//     {
//     "peso":13,
//     "lunghezza":20,
//     },
//     {
//     "peso":15,
//     "lunghezza":20,
//     },
//     {
//     "peso":8,
//     "lunghezza":20,
//     },
//     {
//     "peso":12,
//     "lunghezza":20,
//     },     
// ]
// let pesoTot = 0
// for (let k in zucchine ) {
//     pesoTot += zucchine[k].peso;
// }

// console.log(pesoTot);




// const bici = [
//     {
//         nome:"bici-1",
//         peso:20,
//     },
//     {
//         nome:"bici-2",
//         peso:22,
//     },
//     {
//         nome:"bici-3",
//         peso:23,
//     },
//     {
//         nome:"bici-4",
//         peso:25,
//     },
//     {
//         nome:"bici-5",
//         peso:30,
//     },
//     {
//         nome:"bici-6",
//         peso:26,
//     },
// ]

// const {nome,peso} = bici;

// console.log(nome[0],peso)
// p = 50;
// per ='';
// for (let i in bici ) {
//     const {nome,peso} = bici[i];
//     if (peso < p) {
//         p = peso;
//         per = nome;
//         // console.log(nome,peso)

//     }
//     // console.log(nome,peso)
// }
// console.log(p,per);


const automobili = [
    {
        marca: "Bmw",
        modello:"a",
        alimentazione:"benzina"
    },
    {
        marca: "Bmw",
        modello:"a",
        alimentazione:"benzina"
    },
    {
        marca: "Fiat",
        modello:"panda",
        alimentazione:"benzina"
    },
    {
        marca: "Mercedes",
        modello:"b",
        alimentazione:"metano"
    },
    {
        marca: "Lotus",
        modello:"c",
        alimentazione:"gpl"
    },
    {
        marca: "Bmw",
        modello:"k",
        alimentazione:"benzina"
    },
    {
        marca: "Opel",
        modello:"a",
        alimentazione:"benzina"
    },
    {
        marca: "Citroen",
        modello:"l",
        alimentazione:"diesel"
    },
    {
        marca: "Ferrari",
        modello:"f",
        alimentazione:"diesel"
    },
    {
        marca: "Tesla",
        modello:"x",
        alimentazione:"elettrico"
    },
]

const benzina = automobili.filter(car => car.alimentazione =="benzina");
console.log(benzina)