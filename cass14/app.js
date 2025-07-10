/// FILTER – izdvajanje reči dužih od 6 slova
// const reci = ["torba", "kamera", "flasa", "telefon"];
// let rezultat = reci.filter((rec) => rec.length > 6); // zadrži samo reči sa više od 6 slova
// console.log(rezultat);

/// FIND – prvi paran broj u nizu
const brojevi = [7, 4, 3, 2, 9];
let rezultati = brojevi.find((broj) => broj % 2 === 0); // vraća prvi broj koji je paran
console.log(rezultati);

/// MAP – dodaje 5 svakom broju u nizu
// const broj = [7, 4, 3, 2, 9];
// let rezultat = broj.map((br) => br + 5); // napravi novi niz sa brojevima +5
// console.log(rezultat);

/// 1. FILTER – brojevi između 10 i 100
const brr = [103, 53, 33, 5, 2, 22];
let rez = brr.filter((broj) => broj > 10 && broj < 100); // izdvajamo brojeve između 10 i 100
console.log(rez);

/// 2. FILTER – ocene veće od 5
const ocene = [3, 5, 7, 10, 4];
let oceneVeceOdPet = ocene.filter((oc) => oc > 5); // zadržavamo samo ocene veće od 5
console.log(oceneVeceOdPet);

/// 3. FIND – prva reč sa više od 6 slova
const reci = ["automobil", "kamion", "kuca"];
let rezultat = reci.find((rec) => rec.length > 6); // vraća prvu reč dužu od 6 slova
console.log(rezultat);

/// 4. FIND – prvi negativan broj
const neg = [0, -20, 5, -1, 40];
let negativanBroj = neg.find((br) => br < 0); // vraća prvi broj manji od 0
console.log(negativanBroj);

/// 5. FILTER + FIND – prvo svi parni brojevi, pa nađi prvi manji od 10
const lista = [26, 4, 37, 64, 1];
let parni = lista.filter((par) => par % 2 === 0).find((par) => par < 10); 
// prvo filtrira parne brojeve: [26, 4, 64]
// zatim među njima nađe prvi koji je manji od 10 → 4
console.log(parni);

/// 6. FILTER + MAP – učenici koji su položili
const ucenici = [
    { ime: "Ana", poeni: 85 },
    { ime: "Marko", poeni: 40 },
    { ime: "Jovana", poeni: 95 },
    { ime: "Petar", poeni: 65 },
];
// filter – učenici sa više od 60 poena
// map – pravi poruke za svakog od njih
let polozili = ucenici
  .filter((ucenik) => ucenik.poeni > 60)
  .map((ucenik) => `Čestitamo, ${ucenik.ime}, je položila sa ${ucenik.poeni} poena.`);
console.log(polozili);

/// 7. FIND – prvi broj koji ima više od 3 cifre i počinje sa 2
const bro = [34, 129, 245, 456, 2345, 1001];
let rezul = bro.find((broj) => broj > 999 && String(broj)[0] === "2"); 
// traži prvi broj veći od 999 koji počinje cifrom 2
console.log(rezul);


