// Pronalazi element sa klasom "grandparent" i smešta ga u promenljivu
const grandparent = document.querySelector(".grandparent")

// Pronalazi element sa klasom "parent" i smešta ga u promenljivu
const parent = document.querySelector(".parent")

// Pronalazi element sa klasom "child" i smešta ga u promenljivu
const child = document.querySelector(".child")

// Dodaje click event na child element - kada se klikne ispisuje "child" u konzoli
child.addEventListener("click", function(){
    console.log("child")
})

// Dodaje click event na parent element - kada se klikne ispisuje "parent" u konzoli
parent.addEventListener("click", function(){
    console.log("parent")
})

// Dodaje click event na grandparent element - kada se klikne ispisuje "grandparent" u konzoli
grandparent.addEventListener("click", function(){
    console.log("grandparent")
})

// Dodaje click event na ceo dokument - kada bilo gde kliknemo, ispisuje "document"
document.addEventListener("click", function(){
    console.log("document")
})

// Dodaje još jedan click event na child element
// event.target pokazuje koji je tačno element kliknut
// event.currentTarget pokazuje na koji element je event listener vezan
child.addEventListener("click", event => {
    console.log(event.target)
    console.log(event.currentTarget)
})

// Dodaje click event na parent element
// event.stopPropagation() sprečava da se event propagira do nadređenih elemenata
// Samo će se ispisati "kliknuto je parent", a ne i "grandparent" i "document"
parent.addEventListener("click", event => {
    event.stopPropagation();
    console.log("kliknuto je parent")
})


// -----------------------------
// ZADATAK 3
// -----------------------------

// Pronalazi ul listu sa klasom "ul"
const ul = document.querySelector(".ul")

// Dodaje click event samo na ul
// Kada se klikne neki li unutar ul, ispisuje se tekst tog li elementa
ul.addEventListener("click", event => {
    alert(event.target.textContent)
})

// Pronalazi dugme sa ID-jem "btn"
const btn = document.querySelector("#btn")

// Kada se klikne dugme, kreira se novi li element sa tekstom "Stavka"
// i dodaje se kao dete ul liste
btn.addEventListener("click", () => {
    const novo = document.createElement("li")
    novo.textContent = "Stavka"
    ul.appendChild(novo)
})

// Još jedan click event za ul listu (može se koristiti samo jedan, ali i više ako treba)
// Ispisuje tekst koji je kliknut unutar liste
ul.addEventListener("click", event => {
    alert("kliknuto je " + event.target.textContent)
})
