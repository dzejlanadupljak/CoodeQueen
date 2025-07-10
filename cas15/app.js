// Deklaracija niza brojeva
// const niz = [2, 3, 4, 6, 7, 5]

// Provera da li postoji bar jedan paran broj u nizu
let parni = niz.some((par) => par % 2 === 0) 
// .some() prolazi kroz sve elemente i vraća true ako bar jedan ispunjava uslov (paran broj)

console.log(parni) 
// Ispis rezultata: true (jer npr. 2 i 4 su parni)


// Provera da li su svi brojevi u nizu parni
let every = niz.every((br) => br % 2 === 0) 
// .every() vraća true samo ako svi elementi zadovoljavaju uslov (ovde: parnost)

console.log(every) 
// Ispis rezultata: false (jer npr. 3 i 5 nisu parni)


// 1. Pomnoži svaki broj u nizu sa dva
const noviniz = niz.map((niz2) => niz2 * 2) 
// .map() prolazi kroz svaki broj i množi ga sa 2, vraća novi niz

console.log(noviniz) 
// Ispis: [4, 6, 8, 12, 14, 10]


// 2. Pretvori sve stringove u velika slova
const imena = ["Ana", "Marko"] 
// Niz stringova (imena)

let VelikaSlova = imena.map((ime) => ime.toUpperCase()) 
// .map() prolazi kroz svaki string i pretvara ga u velika slova

console.log(VelikaSlova) 
// Ispis: ["ANA", "MARKO"]


// 3. Kvadriranje svih brojeva iz niza
let kvadrat = niz.map((br) => Math.pow(br, 2)) 
// .map() za svaki broj računa kvadrat pomoću Math.pow()

console.log(kvadrat) 
// Ispis: [4, 9, 16, 36, 49, 25]


// 4. Izračunavanje godina u 2030. na osnovu godine rođenja
let godine = [2000, 1995] 
// Niz godina rođenja

let zapetgodina = godine.map((brooj) => 2030 - brooj) 
// .map() računa koliko će osoba imati godina 2030. godine

console.log(zapetgodina) 
// Ispis: [30, 35]


// 5. Provera da li postoji broj veći od 100 u nizu
let veciodsto = niz.some((niz3) => niz3 > 100) 
// .some() proverava da li postoji bar jedan broj veći od 100

console.log(veciodsto) 
// Ispis: false (nema broja većeg od 100)


// 6. Da li postoji broj deljiv sa 4 bez ostatka (ostatak 0)
let ostatak = niz.some((br) => br % 4 === 0) 
// .some() proverava da li postoji broj koji kada se podeli sa 4 daje ostatak 0

console.log(ostatak) 
// Ispis: true (jer 4 je deljivo sa 4)




