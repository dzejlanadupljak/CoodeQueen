// dataset je specijalan objekat pomoću kojeg pristupamo data- atributima HTML elemenata u JavaScript-u. 
//     Na primer, ako element ima data-id="5", možemo mu pristupiti u JS-u kao element.dataset.id.
// const el=document.getElementById("div")

// alert("obavestenje " + el.dataset.info)
// Inicijalizacija brojača, trenutno nije u upotrebi
let broj = 0

// Dodajemo event listener na dugme sa ID-jem "addBtn"
const addBtn = document.getElementById("addBtn").addEventListener("click", function() {

    // Uzimamo vrednost iz input polja sa ID-jem "add"
    let add = document.getElementById("add").value

    // Ako korisnik nije uneo ništa, prikazujemo upozorenje i prekidamo izvršavanje
    if (add === "") {
        alert("unesi naziv")
        return
    }

    // Ako je unos ispravan, prikazujemo ga u konzoli
    console.log("unos je ispravan", add)

    // Pravimo novi <div> element koji će prikazivati uneti tekst
    const NovaPica = document.createElement("div")
    NovaPica.innerHTML = add

    // Dodajemo novi <div> u postojeći element sa ID-jem "empty"
    const empty = document.getElementById("empty")
    empty.appendChild(NovaPica)
})


// Dodeli mu:

// Atribut data-id – broj koji se automatski povećava za svaku novu picu (npr. pomoću brojača let id = 1;).

// Atribut title – isti kao naziv pice (prikazuje se kada se pređe mišem).

// U taj isti div dodaj dva dugmeta:

// "Dostavljeno":

// Kada se klikne:

// Dodaje se klasa .delivered tom divu.

// Uklanja se title atribut.

// Ažurira se brojač dostavljenih pica.
