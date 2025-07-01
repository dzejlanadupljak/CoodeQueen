// Objekti u JavaScript-u su strukture koje čuvaju podatke u parovima ključ:vrednost.
// Ovde pravimo objekat "osoba" sa ličnim podacima i ugnježdenim podacima.

const osoba = {
    ime: "dzejlana",             // Ime osobe kao string
    prezime: "dupljak",          // Prezime osobe kao string
    godine: 22,                  // Godine osobe kao broj
    visina: 174,                 // Visina osobe u centimetrima kao broj
    adresa: {                    // Ugnježdeni objekat koji sadrži adresu
        ulica: "jaklja",         // Ulica kao string
        grad: "np"               // Grad kao string
    },
    "user name": "dzejlana.dupljak", // Ključ sa razmakom, pristupa se sa []
    hobiji: ["plivanje", "programiranje", "pevanje"] // Niz hobija kao stringovi
}

// Ispisujemo prezime osobe
console.log(osoba.prezime)  // dupljak

// Ispisujemo ulicu iz objekta adresa
console.log(osoba.adresa.ulica)  // jaklja

// Ispisujemo drugi hobi iz niza hobiji (indeks 1)
console.log(osoba.hobiji[1])  // programiranje

// Ispisujemo vrednost iz ključa koji ima razmak u nazivu
console.log(osoba["user name"])  // dzejlana.dupljak

// Dodajemo novo svojstvo 'zanimanje' u objekat osoba
osoba.zanimanje = "uciteljica";

// Ispisujemo novo svojstvo
console.log(osoba.zanimanje)  // uciteljica

// Brišemo svojstvo 'prezime' iz objekta osoba
delete osoba.prezime

// Pokušavamo da ispišemo obrisano svojstvo (biće undefined)
console.log(osoba.prezime)  // undefined

// Petlja koja prolazi kroz sve hobije i ispisuje ih jedan po jedan
for (let i = 0; i < osoba.hobiji.length; i++) {
    console.log(osoba.hobiji[i])
}

// 1. zadatak: uzimamo sve ključeve objekta osoba u niz
const kljucevi = Object.keys(osoba)

// Ispisujemo ceo niz ključeva
console.log(kljucevi)

// Za svaki ključ u nizu ispisujemo njegov indeks i vrednost
kljucevi.forEach((el, index) => {
    console.log(`${index} ima vrednost ${el}`)
})

// 2. zadatak: sumiramo sve vrednosti koje su tipa broj
let zbir = 0

kljucevi.forEach((el) => {
    if (typeof osoba[el] === "number")
        zbir += osoba[el]
})

// Ispisujemo zbir numeričkih vrednosti u objektu osoba
console.log("zbir numerickih vrednosti je:" + zbir)
