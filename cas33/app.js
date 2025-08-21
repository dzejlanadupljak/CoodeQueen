// // Dohvata element sa ID-jem "brojKlikova" iz HTML-a i čuva ga u promenljivoj brojKlikova
// const brojKlikova = document.getElementById("brojKlikova")

// // Dohvata element sa ID-jem "prikaz" gde će se ispisivati broj klikova
// const prikaz = document.getElementById("prikaz")

// // Postavlja brojač na početnu vrednost 0
// let brojac = 0

// // Funkcija koja uvećava brojač i prikazuje novu vrednost u HTML elementu "prikaz"
// function brojacFn(){
//     brojac++  // poveća brojač za 1
//     prikaz.textContent = brojac // upiše novu vrednost u HTML
// }

// // Dodaje event listener na dugme brojKlikova, koji će pokrenuti funkciju brojacFn pri kliku
// brojKlikova.addEventListener("click", brojacFn)

// // Dodaje drugi event listener na isto dugme, ali sa anonimnom funkcijom koja samo ispisuje poruku u konzolu
// brojKlikova.addEventListener("click", () => {
//     console.log("anonimna funkcija")
// })

// // Objašnjenje: setTimeout prima funkciju i vreme u milisekundama kada da se pokrene

// // Posle 5 sekundi uklanja event listener koji je vezan za brojacFn
// setTimeout(() => {
//     brojKlikova.removeEventListener("click", brojacFn)

//     // Ovo ne bi radilo jer removeEventListener ne može ukloniti anonimnu funkciju
//     // brojKlikova.removeEventListener("click", ()=>{
//     //     console.log("CLICK")
//     // })    
// }, 5000)


// // ----------------------- ZADATAK 1 -----------------------
// // Dohvata dugme sa ID-jem "spoji"
// const spoji = document.getElementById("spoji")
// // Dohvata input polje gde korisnik upisuje ime
// const imeInput = document.getElementById("imeInput")
// // Dohvata <p> element gde će se prikazati poruka
// const poruka = document.getElementById("paragraf")

// // Dodaje event listener na dugme spoji
// spoji.addEventListener("click", function(){
//     // Odmah ispisuje poruku da sačekamo 2 sekunde
//     poruka.textContent = "sacekaj 2 sekunde"

//     // Nakon 2 sekunde menja tekst u "zdravo + ime korisnika"
//     setTimeout(() => {
//         poruka.textContent = "zdravo " + imeInput.value
//     }, 2000)
// })


// // ----------------------- ZADATAK 2 -----------------------
// // Dohvata <p> element gde će se prikazivati odbrojavanje
// const porukaa = document.getElementById("poruka")
// // Dohvata dugme koje pokreće odbrojavanje
// const odbrojavanje = document.getElementById("odbrojavanje")

// // Dodaje event listener na dugme odbrojavanje
// odbrojavanje.addEventListener("click", function(){
//     let start = 5 // početna vrednost odbrojavanja

//     // Funkcija koja ispisuje trenutni broj i smanjuje ga za 1
//     function odbr(){
//         porukaa.textContent = start // prikaže trenutni broj
//         start-- // smanji broj za 1

//         // Ako još nismo stigli do 0, ponovo pokrećemo odbr() posle 3 sekunde
//         if (start >= 0){
//             setTimeout(odbr, 1000)
//         } else {
//             poruka.textContent = "kraj" // kada završi, ispiše "kraj"
//         }
//     }

//     // Pokreće odbrojavanje prvi put
//     odbr()
// })


// Ispis u konzolu
// Napiši kod koji ispisuje "Zdravo!" u konzolu nakon 2 sekunde.

setTimeout(()=>{
    console.log("zdravo")
}, 2000)


// Promena teksta u <p>
// Na stranici je <p> sa tekstom "Priprema...". Neka se tekst promeni u "Spremno!" nakon 3 sekunde.

const priprema=document.getElementById("priprema")
setTimeout(()=>{
    priprema.textContent="spremno"
}, 3000)


// 7. Više timeout-a
// Ispiši "Start" nakon 1 sekunde, "Još malo..." nakon 3 sekunde i "Kraj!" nakon 5 sekundi.

setTimeout(()=>{
    console.log("start")
}, 1000)
setTimeout(()=>{
    console.log("jos malo")
}, 3000)
setTimeout(()=>{
    console.log("kraj")
}, 5000)

// Odbrojavanje i unos imena
// Napravi input za ime i dugme. Kad klikneš dugme:
//         ◦ odbrojava se od 5 do 0 (svaka sekunda)
//         ◦ kad odbrojavanje završi, u <p> se ispisuje 
//           "Zdravo, [ime]!".
          

const btn=document.getElementById("btn")
const ime=document.getElementById("ime")
const poruka=document.getElementById("poruka")

btn.addEventListener("click",function(){
    let brojac=5
    function brojacn(){
        brojac--
       poruka.textContent=brojac
       if(brojac>=0){setTimeout(brojacn,1000)}
       else{poruka.textContent="zdravo"+ ime.value}
    }
    brojacn()
})

