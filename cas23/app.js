// Objekat sa metodom
const osoba = {
  ime: "dzejlana",
  pozdrav() {
      return `zdravo ja sam ${this.ime}`;
  }
};

console.log(osoba.pozdrav());
// Ispisuje: "zdravo ja sam dzejlana"
// Obicno pozivanje metode – 'this' pokazuje na objekat 'osoba'


// Novi objekat
const osoba1 = {
  ime: "ena"
};

// PRVO KORIŠĆENJE 'call'
//  ŠTA JE call?
// Metoda .call() omogućava da pozovemo funkciju i eksplicitno postavimo šta 'this' treba da bude.
// Sintaksa: funkcija.call(noviThis, arg1, arg2, ...)

console.log(osoba.pozdrav.call(osoba1));
// ➔ Ispisuje: "zdravo ja sam ena"
// 'this' sada pokazuje na 'osoba1', iako pozivamo metod definisan u 'osoba'


// Funkcija izvan objekta
function recenica(rec1, rec2) {
  return `${this.ime} kaze: ${rec1}, ${rec2}`;
}

// PONOVO KORIŠĆENJE 'call'
console.log(recenica.call(osoba1, "voli da", "trci"));
// Ispisuje: "ena kaze: voli da, trci"
// 'call' poziva funkciju i odmah prosleđuje argumente jedan po jedan


//  PRVO KORIŠĆENJE 'apply'
// ŠTA JE apply?
// apply() radi isto kao call(), ali umesto da prosleđuje argumente jedan po jedan, koristi niz.
// Sintaksa: funkcija.apply(noviThis, [arg1, arg2, ...])

console.log(recenica.apply(osoba, ["ide", "na more"]));
// ➔ Ispisuje: "dzejlana kaze: ide, na more"
// 'this' pokazuje na 'osoba', a argumenti dolaze iz niza


//  PRVO KORIŠĆENJE 'bind'
//  ŠTA JE bind?
// bind() ne izvršava odmah funkciju, već vraća novu funkciju sa trajno vezanim 'this' kontekstom i opcionalno argumentima.
// Sintaksa: const novaFunkcija = funkcija.bind(noviThis, arg1, arg2, ...)

const celarecenica = recenica.bind(osoba1, "uci", "programiranje");

console.log(celarecenica());
// Ispisuje: "ena kaze: uci, programiranje"
// 'this' je trajno postavljen na 'osoba1', i argumenti su već prosleđeni


// Funkcija za prikaz informacija
function info() {
  console.log(`${this.ime} ima ${this.godina} godina.`);
}

const ucenici = [
  { ime: "Sara", godina: 17 },
  { ime: "Tarik", godina: 18 }
];

// Koristimo 'call' unutar forEach da pozovemo 'info' za svakog ucenika
ucenici.forEach((ucenik) => info.call(ucenik));
//  Ispisuje:
// "Sara ima 17 godina."
// "Tarik ima 18 godina."


// Funkcija za prijavu
function prijava(skola, smer) {
  console.log(`${this.ime} se prijavio/la za ${smer} u ${skola}.`);
}

const kandidat = { ime: "Imran" };

// Koristimo 'apply' da prosledimo argumente kao niz
console.log(prijava.apply(kandidat, ["gimnazija", "opsti"]));
// ➔ Ispisuje: "Imran se prijavio/la za opsti u gimnazija."


// Ukratko definicije:
// call – Poziva funkciju i postavlja 'this', argumenti se navode jedan po jedan
// apply – Isto što i call, ali se argumenti prosleđuju kao niz
// bind – Ne izvršava odmah funkciju, već vraća novu funkciju sa vezanim 'this' i argumentima
