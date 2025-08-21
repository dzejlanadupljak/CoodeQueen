// Kreiramo novi Date objekat koji sadrži trenutno vreme i datum
const trenutnoVreme = new Date();

// Ispisujemo trenutno vreme i datum u konzoli
console.log(trenutnoVreme);

// Ispisujemo dan u nedelji (0-6, gde je 0 nedelja, 1 ponedeljak...)
console.log("dani u nedelji (0-6)", trenutnoVreme.getDay());

// Ispisujemo mesec (0-11, gde je 0 januar, 1 februar...)
console.log("mesec (0-11)", trenutnoVreme.getMonth());

// Ispisujemo celu godinu (npr. 2025)
console.log("godina", trenutnoVreme.getFullYear());

// Kreiramo specifičan datum i vreme.
// Slovo "T" u stringu "2025-06-11T14:00:03" je separator između dela za datum (2025-06-11)
// i dela za vreme (14:00:03).
const specificni = new Date("2025-06-11T14:00:03");

// Ispisujemo datum u čitljivom obliku (npr. "Wed Jun 11 2025")
console.log(specificni.toDateString());

// Ispisujemo samo vreme u čitljivom obliku (npr. "14:00:03 GMT+0200...")
console.log(specificni.toTimeString());

// Dodajemo event listener na element sa ID "search" koji reaguje NA SVAKU PROMENU DOK KORISNIK KUCA.
// `input` događaj znači: svaki put kad korisnik pritisne taster, obriše ili doda slovo,
// funkcija se pokreće odmah, bez čekanja da polje izgubi fokus.
document.getElementById("search").addEventListener("input", function () {
    console.log("uneto je", this.value);
});

// Dodajemo event listener na element sa ID "pretraga" koji reaguje kada korisnik ZAVRŠI unos.
// `change` događaj znači: funkcija se pokreće TEK kada korisnik završi unos i napusti polje
// (klikne van njega ili pritisne Enter).
document.getElementById("pretraga").addEventListener("change", function () {
    console.log("promenjeno je:", this.value);
});

// Dodajemo event listener za unos email adrese.
// Kada se koristi `change`, funkcija se pokreće tek nakon što korisnik završi unos i napusti polje.
document.getElementById("email").addEventListener("change", function () {
    const email = this.value;
    if (!email.includes("@")) { // Proverava da li email sadrži znak "@"
        alert("unesite ispravan email");
    }
});

////////// Zadaci

// Zadatak 3: Unos datuma rođenja – prikaži poruku kada korisnik završi unos (change)
document.getElementById("date").addEventListener("change", function () {
    console.log("unet je datum " + this.value);
});

// Zadatak 5: Unos godine rođenja – izračunaj starost (change)
document.getElementById("years").addEventListener("change", function () {
    const godinaRodjenja = this.value; // godina iz inputa
    const trenutnaGodina = new Date().getFullYear(); // trenutna godina
    const starost = trenutnaGodina - godinaRodjenja; // računanje starosti
    console.log(starost);
});

// Zadatak 6: Unos imena i prezimena – prikaži puno ime (klik na dugme)
document.getElementById("prikazi").addEventListener("click", function () {
    const ime = document.getElementById("ime").value;
    const prezime = document.getElementById("prezime").value;
    console.log(ime + " " + prezime);
});

// Zadatak 7: Input za pretragu – reaguje DOK korisnik kuca (input)
document.getElementById("pretrazivanje").addEventListener("input", function () {
    console.log("pretrazujete", this.value);
});


///Napiši kod koji proverava da li je danas vikend (subota ili nedelja) i ispisuje odgovarajuću poruku.

const btn=document.getElementById("btn").addEventListener("click", function(){
    const vreme=new Date();
    if(!vreme.getDate()=== 6,0){
        console.log("danas je vikend")
    }else{
        console.log("nije vikend")
    }
})
