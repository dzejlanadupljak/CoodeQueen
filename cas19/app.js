// STRING METODE – osnovne operacije sa tekstom

let str = "dzejlana je student";

console.log(str.length); // dužina stringa (broj karaktera)
console.log(str[0]); // prvi karakter stringa
console.log(str.charAt(5)); // karakter na poziciji 5

console.log(str.toUpperCase()); // pretvara u velika slova
console.log(str.toLowerCase()); // pretvara u mala slova

console.log(str.includes("ana")); // proverava da li string sadrži "ana"

console.log(str.indexOf("d")); // pozicija prvog "d"
console.log(str.lastIndexOf("a")); // pozicija poslednjeg "a"

// trim uklanja razmake s početka i kraja, pa onda pretvara u velika slova
console.log(str.trim().toUpperCase()); 

// split deli string na delove po zarezu i pretvara u niz
let st1 = "banana,jabuka,jagoda";
console.log(st1.split(",")); // ["banana", "jabuka", "jagoda"]

// repeat ponavlja string više puta
let str2 = "ha";
console.log(str2.repeat(6)); // "hahahahaha"

// startsWith i endsWith proveravaju početak i kraj stringa
console.log(str.startsWith("v")); // false
console.log(str.endsWith("t"));   // true

// replace menja deo stringa (samo prvi koji pronađe)
console.log(st1.replace("banana", "tresnja")); // "tresnja,jabuka,jagoda"

// \n prelazak u novi red, \t tab
console.log("banana,\njabuka,\njagoda");
console.log("ime:\tdzejlana");


// RAD SA IMENOM I PREZIMENOM

let ime = "Ajsa Bihorac";

// funkcija vraća broj slova u imenu i prezimenu
function ImeIPrezime() {
  console.log(ime.length);
}
ImeIPrezime();

// pretvara ime i prezime u velika slova
function velikSlova() {
  console.log(ime.toUpperCase());
}
velikSlova();

// pravi inicijale, npr. A.B. (p
