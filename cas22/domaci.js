//1.Korišćenje hasOwnProperty
//Napravi objekat knjiga sa svojstvima naslov i autor.
//Proveri:
//da li objekat ima svojstvo "naslov"
//da li ima "godinaIzdanja"
//➤ Koristi metodu: knjiga.hasOwnProperty("...")

const knjiga={
    naslov:"Mali Princ",
    autor:"Antoine"
}
console.log(knjiga.hasOwnProperty("naslov"))
console.log(knjiga.hasOwnProperty("godinaIdanja"))


//2.ZADATAK 2 – Korišćenje Object.keys i forEach
//Napravi objekat film sa svojstvima naziv, zanr, trajanje.
//Koristeći Object.keys() i forEach, ispiši svaki ključ posebno.
// Primer ispisa:
// Ključ: naziv
// Ključ: zanr
// Ključ: trajanje


const film={
    naziv:"fana",
    zanr:"triler",
    trajanje:3
}

Object.keys(film).forEach((kljuc)=>console.log(kljuc))


// ZADATAK 3 – Korišćenje Object.entries
// Napravi objekat racunar sa 3 svojstva (npr. procesor, RAM, marka).
// Koristeći Object.entries(), ispiši svaki par u formatu:

// procesor: Intel
// RAM: 16GB

const racunar={
procesor:"i9",
ram:"32gb",
marka:"intel"
}
console.log(Object.entries(racunar))


///ZADATAK 4 – Korišćenje Object.fromEntries
// Zamisli da imaš sledeći niz:

// js
// Copy
// Edit
// const info = [["ime", "Sara"], ["godine", 25], ["grad", "Novi Sad"]];
// Koristi Object.fromEntries() da od ovog niza napraviš objekat i prikaži ga u konzoli.

const info = [["ime", "Sara"], ["godine", 25], ["grad", "Novi Sad"]];

const obj=Object.fromEntries(info)
console.log(obj)


// ZADATAK 5 – Korišćenje Object.assign i Object.create
// Napravi objekat telefon sa svojstvima marka, model, cena.

// Napravi novi objekat kopijaTelefona pomoću Object.assign, ali promeni model u "Galaxy S24".

// Zatim napravi novi objekat naslednik koristeći Object.create(telefon) i prikaži naslednik.marka.

const telefon={
    marka:"Google",
    model:"pixel9a",
    cena:50000
}

const kopijaTelefona=Object.assign({},telefon,{model:"galaxy S24"})
console.log(kopijaTelefona)

const naslednik=Object.create(telefon)

console.log(naslednik.marka)

