// Primer sa nizovima
const array1 = [1, 2, 3, 4];
const array2 = array1; // array2 pokazuje na isti niz kao array1

array2.push(5); // dodajemo broj 5 u array2 (što menja i array1 jer su povezani)

console.log(array2); // [1, 2, 3, 4, 5]
console.log(array1); // [1, 2, 3, 4, 5] - jer su array1 i array2 isti objekat

// Ternarni operator - kraći način za if/else
const broj = 3;
broj > 5 ? console.log("broj je veći od 5") : console.log("broj nije veći od 5");
// Ako je broj veći od 5, piše prvu poruku, inače drugu

// Primer sa reduce - sabira sve brojeve u nizu
const array = [43, 54, 2, 6];
let rezultat = array.reduce((acc, el) => acc + el, 0); // sabiranje svih brojeva
console.log(rezultat); // ispisuje zbir: 105

// Spajanje slova u reč
const rec = ["h", "e", "l", "l", "o"];
let spojene = rec.reduce((acc, el) => acc + el, ""); // spaja slova jedno po jedno
console.log(spojene); // ispisuje "hello"

// Izračunaj proizvod svih brojeva
let rez = array.reduce((acc, el) => acc * el);
console.log(rez); // ispisuje proizvod svih brojeva

// Zbir svih parnih brojeva
let parni = array.reduce((acc, el) => {
    return el % 2 === 0 ? acc + el : acc; // ako je broj paran, dodaj ga u zbir
}, 0);
console.log(parni); // ispisuje zbir parnih

// Zbir kvadrata svih brojeva
let kvadrat = array.reduce((acc, el) => acc + el * el, 0); // kvadrat svakog broja
console.log(kvadrat); // ispisuje zbir kvadrata

// Nađi najmanji broj u nizu (ovde je zapravo najmanji, ne najveći)
let najmanji = array.reduce((acc, el) => (acc < el ? acc : el));
console.log(najmanji); // ispisuje najmanji broj

// Ternarni operator – proveri da li je broj paran ili neparan
const nekibr = 4;
nekibr % 2 === 0 ? console.log("broj je paran") : console.log("broj je neparan");

// Ternarni operator – nađi veći od dva broja
let prvi = 3;
let drugi = 5;
prvi > drugi ? console.log(prvi) : console.log(drugi); // ispisuje veći broj

// Ugnježdeni ternarni operator – pozitivan, negativan ili nula
let br = -3;
br > 0
  ? console.log("broj je pozitivan")
  : br < 0
  ? console.log("broj je negativan")
  : console.log("broj je nula");
