// Pronalazi element sa ID-jem "paragraf" i čuva ga u promenljivu
const paragraf = document.getElementById("paragraf")

// Menja ID pronađenog elementa u "par"
paragraf.id = "par"

// Ispisuje trenutnu vrednost atributa "id" u konzolu
console.log(paragraf.getAttribute("id"))

// Postavlja novi atribut "title" sa vrednošću "novi title"
paragraf.setAttribute("title", "novi title")

// Menja direktno title property na elementu – sada je "skroz novi title"
paragraf.title = "skroz novi title"

// Uklanja atribut "title" sa elementa
paragraf.removeAttribute("title")

// Ovo neće raditi jer "class" nije validno svojstvo u JS (koristi se className ili classList)
paragraf.class = "prva"  /////nece da radi

// Postavlja klasu na element tako da bude "prva"
paragraf.className = "prva"

// Dodaje novu klasu "druga" na već postojeću klasu "prva"
// Rezultat: class="prvadruga" (nema razmaka) – treba dodati razmak ručno
paragraf.className += "druga"

// Ispravna metoda – postavlja kompletan string klasa: "prva druga treca"
paragraf.setAttribute("class", "prva druga treca")

// Dodaje još jednu klasu "treca" (ako već ne postoji)
paragraf.classList.add("treca")

// Uklanja klasu "prva" ako postoji
paragraf.classList.remove("prva")

// Proverava da li element sadrži klasu "prva", vraća true ili false
console.log(paragraf.classList.contains("prva"))

// Ako klasa "druga" postoji – uklanja je; ako ne postoji – dodaje je
paragraf.classList.toggle("druga")

///////////////////////////////////////////////
// Zadaci
/////////////////////

// 1. Dohvata <a> element sa ID-jem "href" i ispisuje njegov href atribut u konzolu
const link = document.getElementById("href")
console.log(link.href)

// 2. Dohvata <img> element sa ID-jem "slika" i postavlja njegov src atribut
const slik = document.getElementById("slika")
slik.src = "https://i.pinimg.com/736x/e5/24/78/e524781933ba5745fc0f6e9d1d29e86c.jpg"

// 3. Kada se klikne na dugme sa ID-jem "home", omogućava (uklanja disabled) dugme "disabledBtn"
const dugme = document.getElementById("home").addEventListener("click", function () {
    document.getElementById("disabledBtn").disabled = false
})

// 4. Dodaje klasu "highlight" na paragraf sa ID-jem "paragrafff"
const ime = document.getElementById("paragrafff").classList.add("highlight")

// 6. Kada se klikne na dugme sa ID-jem "aktivan", uklanja se klasa "active" sa tog dugmeta
document.getElementById("aktivan").addEventListener("click", function () {
    this.classList.remove("active")
})
