// ZADATAK 1 – Prikaz parova [ključ, vrednost] velikim slovima
// Napravi funkciju koja koristi Object.entries() da ispiše svaki par [ključ, vrednost], pri čemu se oba ispisuju velikim slovima.

const osoba={
    ime:"Ana",
    grad:"Beograd"
}
Object.entries(osoba).forEach(([kljuc,vrednost])=> {console.log(kljuc.toUpperCase()+":"+ vrednost.toUpperCase())})



// ZADATAK 2 – Saberi sve numeričke vrednosti u objektu
// Napiši funkciju koja prima objekat i koristi Object.values() da sabere sve vrednosti koje su brojevi.

const number={
    a:5,
    b:"nesto",
    c:10
}
let suma=0
Object.values(number).forEach((vrednost)=>{
    if(typeof vrednost==="number"){
        suma+=vrednost
    }
})
console.log(suma)


// ZADATAK 4 – Konstruktor sa metodom i proverom godine
// Napraviti konstruktor Osoba sa svojstvima ime, godine. Dodaj metodu punoletan() koja vraća true ako osoba ima ≥18 godina.

function Osoba(ime,godine){
    this.ime=ime
    this.godine=godine
}
const o2=new Osoba("ajsa",19)
Osoba.prototype.punoletan=function()
{
    if(this.godine>18)console.log(true)
}
o2.punoletan()


// ZADATAK 5 
// Broj string vrednosti u objektu
// Napiši funkciju koja koristi Object.values() da prebroji koliko svojstava objekta ima vrednost tipa string.

const obj={
    starost:20,
    visina:100,
    ime:"statua",
    grad:"bern"
}

let zbir=0

Object.values(obj).forEach((v)=>{
    if(typeof v==="string"){
        zbir++
    }
})

console.log(zbir)

