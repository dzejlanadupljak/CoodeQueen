// Čuvanje podatka u localStorage (ostaje i kada se zatvori browser)
localStorage.setItem("name", "dzejlana")

// Ispis iz localStorage
console.log(localStorage.getItem("name"))

// Čuvanje podatka u sessionStorage (ostaje dok je otvoren tab)
sessionStorage.setItem("name", "dzejlana")
sessionStorage.setItem("name", "ana") // Prethodno će se pregaziti
console.log(sessionStorage.getItem("name"))

// Brisanje samo jednog podatka iz localStorage
localStorage.removeItem("name")
// Brisanje svih podataka iz localStorage
localStorage.clear()

// Brisanje jednog podatka iz sessionStorage
sessionStorage.removeItem("item1")
// Brisanje svih podataka iz sessionStorage
sessionStorage.clear()


// Funkcija koja čuva korisničko ime i prikazuje poruku
function sacuvajKorisnika(){
    // Uzimamo vrednost iz input polja
    const vrednost=document.querySelector("input").value
    // Čuvamo je u localStorage pod ključem "ime"
    localStorage.setItem("ime", vrednost)
    // Pozivamo funkciju da prikaže poruku
    prikaziPoruku(vrednost)
}

// Funkcija za prikazivanje poruke korisniku
function prikaziPoruku(ime){
    // Uzimamo element sa id "poruka"
    const poruka=document.getElementById("poruka")
    // Menjamo tekst poruke
    poruka.textContent="dobro dosla " + ime 
}

// Ako već postoji ime u localStorage, odmah prikaži poruku
if(localStorage.getItem("ime")){
    prikaziPoruku(localStorage.getItem("ime"))
}


// Funkcija za promenu teme (dark / light)
function promeniTemu(){
    // Ako je trenutno pozadina crna (dark tema)
    if(document.body.style.backgroundColor === "black"){
        // Promeni na belu (light tema)
        document.body.style.backgroundColor = "white"
        const p= document.getElementById("poruka")
        p.style.color="black"
        // Sačuvaj temu kao "light"
        localStorage.setItem("tema", "light")
    }else{
        // Ako nije crna, stavi dark temu
        document.body.style.backgroundColor="black"
        const par=document.getElementById("poruka")
        par.style.color="white"
        // Sačuvaj temu kao "dark"
        localStorage.setItem("tema","dark")
    }
}

// Kada se stranica učita, proveri koja je tema sačuvana
if(localStorage.getItem("tema")=== "dark"){
    document.body.style.backgroundColor="black"
    const par=document.getElementById("poruka")
    par.style.color="white"
}else{
    document.body.style.backgroundColor="white"
}


// Primer niza
let niz=["jabuka","banana","kivi"]

// Pretvaranje niza u tekst (JSON format)
let kaoTekst=JSON.stringify(niz)
console.log(kaoTekst)

// Vraćanje iz teksta u niz (parsiranje)
let vraceno=JSON.parse(kaoTekst)
console.log(vraceno)
