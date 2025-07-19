// ----------------------------
// 1) Selektovanje elemenata
// ----------------------------

const div = document.getElementsByClassName("prvi")
// Selektuje sve elemente sa klasom "prvi"
// Vraća HTMLCollection (lista elemenata)

document.getElementsByTagName(div)


document.querySelector(".prvi")
// Selektuje PRVI element sa klasom "prvi"

document.querySelectorAll(".prvi")
// Selektuje SVE elemente sa klasom "prvi"
// Vraća NodeList (može da se koristi sa forEach)

// ----------------------------
// 2) ZADATAK 1: Povećaj veličinu fonta
// ----------------------------

const klik = document.getElementById("klik").addEventListener("click", function() {
    // Selektuje dugme sa ID-jem "klik" i dodaje mu događaj klik

    const p = document.getElementById("paragraf")
    // Selektuje paragraf sa ID-jem "paragraf"

    p.style.fontSize = "30px"
    // Postavlja veličinu fonta na 30px
})

// ----------------------------
// 3) ZADATAK 1: Promena teksta pomoću querySelector
// ----------------------------

document.querySelector("#klik").addEventListener("click", function() {
    // Selektuje dugme sa ID-jem "klik" i dodaje mu klik događaj

    const paragraf = document.querySelector("#paragraf")
    // Selektuje paragraf sa ID-jem "paragraf"

    paragraf.textContent = "dobro dosli"
    // Menja tekst paragrafa
})

// ----------------------------
// 4) ZADATAK 2: Dodavanje novog dugmeta koje menja pozadinu
// ----------------------------

const klik1 = document.getElementById("klik").addEventListener("click", function() {
    // Kada kliknemo na dugme sa ID-jem "klik", izvršava se ova funkcija

    const klik2 = document.createElement("button")
    // Pravimo novo dugme pomoću createElement

    klik2.textContent = "klik2"
    // Postavljamo tekst na novo dugme

    document.body.appendChild(klik2)
    // Dodajemo novo dugme na kraj stranice (body)

    klik2.addEventListener("click", function() {
        // Dodajemo klik događaj za to novo dugme

        // const klik2 = document.getElementById("klik2")
        // Ova linija nije potrebna jer klik2 već imamo kao promenljivu (i nije dodeljen ID)

        document.body.style.backgroundColor = "red"
        // Menja se boja pozadine cele stranice u crvenu
    })
})

// ----------------------------
// 5) ZADATAK 2: Promena boje više elemenata (querySelectorAll)
// ----------------------------

const naslov = document.querySelectorAll("#naslov")
// Selektuje sve elemente sa ID-jem "naslov"
// ID treba da bude jedinstven! Preporuka je da ovde bude klasa umesto ID

document.querySelector("#klik").addEventListener("click", function() {
    // Kada kliknemo na dugme sa ID-jem "klik"...

    naslov.forEach(p => {
        p.style.color = "blue"
        // Svim pronađenim elementima postavljamo plavu boju teksta
    })
})
