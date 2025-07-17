// DOM (Document Object Model) je prikaz HTML stranice kao stabla.
// Svaki HTML element (npr. <p>, <div>, <button>) postaje objekat u JavaScriptu.
// DOM nam omogućava da pomoću JavaScripta menjamo sadržaj, stil i reagujemo na događaje na stranici.

// =========================
// 1. Dohvatanje postojećeg paragrafa i promena boje teksta
// =========================

const paragraf = document.getElementById("paragraf");
// getElementById - uzima HTML element po ID-u
paragraf.style.color = "red";
// style.color - postavlja boju teksta

// =========================
// 2. Kreiranje novog paragrafa i dodavanje na stranicu
// =========================

const noviParagraf = document.createElement("p");
// createElement - pravi novi <p> element

noviParagraf.textContent = "novi paragraf";
// textContent - postavlja tekst u paragraf

document.body.appendChild(noviParagraf);
// appendChild - dodaje element u dokument (ovde u <body>)

noviParagraf.style.color = "blue";
// style.color - boja teksta
noviParagraf.style.fontSize = "20px";
// style.fontSize - veličina teksta

// =========================
// 3. Promena boje dugmeta kada se klikne
// =========================

const btnExit = document.getElementById("btnExit").addEventListener("click", function () {
    // addEventListener - pokreće funkciju kada kliknemo
    this.style.backgroundColor = "red";
    this.style.color = "white";
});

// =========================
// 4. Dodavanje paragrafa kada se klikne na dugme
// =========================

const ispis = document.getElementById("ispis").addEventListener("click", function () {
    const p = document.createElement("p");
    p.textContent = "uspesno";
    document.body.appendChild(p);
});

// =========================
// Zadatak 1: Dodavanje više paragrafa sa brojanjem
// =========================

let brojac = 1;
const broji = document.getElementById("broji").addEventListener("click", function () {
    const p = document.createElement("p");
    p.textContent = `klik ${brojac}`;
    document.body.appendChild(p);
    brojac++;
});

// =========================
// Zadatak 2: Menjanje teksta postojećeg paragrafa
// =========================

const text = document.getElementById("ispis").addEventListener("click", function () {
    const p = document.getElementById("text");
    p.textContent = "pozdrav";
    p.style.color = "red";
});

// =========================
// Zadatak 3: Promeni boju teksta klikom
// =========================
// (Zadatak već urađen iznad – paragraf menja boju kad kliknemo)
