// ----------------------------
// forEach je metoda koja prolazi kroz svaki element niza
// i izvršava zadatu funkciju za svaki element.
// Koristi se kada želimo da nešto uradimo sa svakim elementom niza,
// ali ne vraća novi niz kao map, već samo izvršava radnju (npr. ispis).

// Sintaksa:
// niz.forEach((element, index, ceoNiz) => {
//     // ovde ide kod koji se izvršava za svaki element
// });

// ----------------------------
// PRIMERI SA OBJAŠNJENJIMA
// ----------------------------

// Kreiramo niz sa dva imena
const imena = ["ema", "sara"]

// forEach prolazi kroz svaki element niza i izvršava funkciju
imena.forEach((el) =>
  // Ispisuje "zdravo" + ime
  console.log(`zdravo ${el}`)
)


// Niz brojeva
const brojevi = [1, 2, 3, 4]

// map pravi novi niz tako što svaki broj množi sa 2
let parni = brojevi.map((broj) => broj * 2)

// Ispisujemo novi niz [2, 4, 6, 8]
console.log(parni)


// Novi niz brojeva
const niz = [1, 2, 3, 4]

// forEach koristi sve 3 vrednosti: element, indeks, ceo niz
niz.forEach((el, i, array) =>
  console.log(`elementi ${el} pod indexom ${i} kada se pomnozi sa dva je ${el*2} a ovo je ceo niz ${array}`)
)


// Novi niz za dalje primere
const noviniz = [3, 5, 7, 8]

// Ispisujemo svaki broj
noviniz.forEach((el) => console.log(`u nizu se nalazi element ${el}`))


// Ispis kvadrata svakog broja
noviniz.forEach((el) => console.log(`Kvadrat broja je ${Math.pow(el, 2)}`))


// Ispisujemo da li je broj paran ili neparan
noviniz.forEach((el) => {
  if (el % 2 === 0) {
    console.log(`${el} je paran`)
  } else {
    console.log(`${el} je neparan`)
  }
})


// Sabiramo sve brojeve
let suma = 0 // inicijalna suma

noviniz.forEach((br) => {
  suma += br // dodaj svaki broj u sumu
})

// Ispisujemo zbir svih brojeva
console.log(suma)


// Niz sa većim brojevima
const array = [2, 3, 10, 12, 32, 43]

// Brojač za brojeve veće od 10
let brojac = 0;

array.forEach((el) => {
  if (el > 10)
    brojac++
})

// Ispis broja elemenata većih od 10
console.log(`u nizu ima ${brojac} broja veca od 10`)


// Ispis indeks + vrednost svakog broja
array.forEach((el, index) =>
  console.log(`Redni broj elementa ${index} ima vrednost ${el}`)
)


// Ispis dvostruke vrednosti samo parnih brojeva
array.forEach((el) => {
  if (el % 2 === 0)
    console.log(`dvostruka vrednost parnih brojeva je ${el * 2}`)
})
