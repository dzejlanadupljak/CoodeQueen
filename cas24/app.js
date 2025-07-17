// ------------------------------
// DEFINICIJA KONSTRUKTORSKE FUNKCIJE
// Konstruktorska funkcija je šablon za pravljenje više sličnih objekata.
// Koristi se sa ključnom reči `new`, i koristi `this` da postavi osobine.
// ------------------------------


// PRIMER 1 – Konstruktor Osoba
function Osoba(ime, prezime) {
    // `this` je objekat koji se pravi pomoću `new`
    this.ime = ime;
    this.prezime = prezime;
  }
  
  // Pravljenje dva objekta pomoću konstruktora
  const o3 = new Osoba("dzejlana", "dupljak");
  const o4 = new Osoba("dzejla", "dupljak");
  
  console.log(o3); // Osoba { ime: 'dzejlana', prezime: 'dupljak' }
  console.log(o4); // Osoba { ime: 'dzejla', prezime: 'dupljak' }
  
  // Dodajemo metodu preko prototype da je ne kopiramo svaki put
  Osoba.prototype.pozdrav = function () {
    console.log(`hello ja ssam ${this.ime} ${this.prezime}`);
  };
  
  // Poziv metode
  o3.pozdrav();
  o4.pozdrav()
  
  
  // PRIMER 2 – Vozilo i Auto (nasleđivanje preko call)
  function Vozilo(tip, godina) {
    this.tip = tip;
    this.godina = godina;
  }
  
  function Auto(model, marka) {
    // Nasleđujemo osobine iz Vozilo – pozivamo konstruktor u kontekstu `this`
    Vozilo.call(this, "auto", 2020);
  
    // Dodajemo dodatna svojstva
    this.model = model;
    this.marka = marka;
  }
  
  // Dodajemo metodu pomoću prototype
  Auto.prototype.mojAuto = function () {
    console.log(`moj auto je ${this.model} i godiste je ${this.godina}`);
  };
  
  const a1 = new Auto("audi", "tt");
  a1.mojAuto();   // moj auto je audi i godiste je 2020
  console.log(a1); // prikazuje ceo objekat
  
  
  // ZADATAK 1 – Konstruktor za knjige
  function Knjiga(naslov, autor, godinaIzdanja) {
    this.naslov = naslov;
    this.autor = autor;
    this.godinaIzdanja = godinaIzdanja;
  }
  
  const k1 = new Knjiga("Harry Potter", "J.K. Rowling", 2001);
  const k2 = new Knjiga("Mali princ", "Antoan de Sent-Egziperi", 1999);
  
  console.log(k1);
  console.log(k2);
  
  
  // ZADATAK 2 – Dodaj metodu preko prototype
  Knjiga.prototype.info = function () {
    console.log(`Knjiga "${this.naslov}" autora "${this.autor}", izdata godine ${this.godinaIzdanja}.`);
  };
  
  k1.info();
  k2.info();
  
  
  // ZADATAK 3 – Konstruktor sa call (Zivotinja → Pas)
  function Zivotinja(vrsta, brojNogu) {
    this.vrsta = vrsta;
    this.brojNogu = brojNogu;
  }
  
  function Pas(ime) {
    // Nasleđujemo osobine iz Zivotinja
    Zivotinja.call(this, "čivava", 4);
  
    // Dodajemo sopstvenu osobinu
    this.ime = ime;
  }
  
  const z = new Pas("Zizi");
  console.log(z); // Pas { vrsta: 'čivava', brojNogu: 4, ime: 'Zizi' }
  