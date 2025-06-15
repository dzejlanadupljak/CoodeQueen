//// Nestovane petlje (ugnjezdene)

// spoljašnja petlja: i ide od 1 do 4 (uključujući 1, a isključujući 5)
// znači izvodi se 4 puta
for(let i=1; i<5; i++){
    console.log("spoljasnja petlja")  // ispisuje se svaki put kada krene spoljašnja petlja

    // unutrašnja petlja se izvršava 10 puta za svaki prolaz spoljašnje petlje
    for(let j=1; j<=10; j++){
        console.log("unutrasnja petlja")  // svaki put kad unutrašnja petlja radi
    }
}
// Znači, ukupno će "unutrasnja petlja" biti ispisano 4 * 10 = 40 puta,
// a "spoljasnja petlja" 4 puta.


// Primer množenja brojeva, ispisuje tablicu množenja za i od 1 do 3 i j od 1 do 6
for(let i=1; i<4; i++){  // i = 1, 2, 3
    for(let j=1; j<=6; j++){  // j = 1, 2, 3, 4, 5, 6
        // ispisuje rezultat množenja brojeva i i j u formatu "i*j=rezultat"
        console.log(`${i}*${j}=${i*j}`)  
    }
}
// Ovo pravi tabelu množenja za brojeve 1, 2 i 3.


// Petlja koja ide od 1 do 9
for(let i=1; i<10; i++){
    if(i === 7) continue   // ako je i = 7, preskoči tu iteraciju i nastavi sa sledećom
    console.log(i)  // ispisuje trenutnu vrednost i osim kada je i = 7
}
// Rezultat je da se ispišu svi brojevi osim 7.


// Definisanje promenljive e na globalnom nivou
// let e = 22;  

// Definisanje funkcije test koja ima svoju lokalnu promenljivu r
function test(){
    let r = 11;  // lokalna promenljiva unutar funkcije
    console.log(r);  // ispisuje vrednost r, tj. 11
}

console.log(e);  // ispisuje globalnu promenljivu e (22)
test();          // poziva funkciju test koja ispisuje 11


// Blok koda u kojem postoji lokalna promenljiva d
{
    let d = 33;  // promenljiva d postoji samo unutar ovog bloka
    console.log(d)  // ispisuje 33
}

// Zadatak 1 - do-while petlja koja traži unos šifre (komentarisano)
// let sifra = "Selda123";
// do {
//     unos = prompt("Unesi sifru");  // traži unos od korisnika
// } while(unos !== sifra);  // ponavlja unos dok korisnik ne unese tačnu šifru
// console.log("Pogodili ste sifru");  // ispisuje poruku kada je šifra tačna


// Zadatak 2 - pravljenje 3 reda sa po 5 zvezdica
for(let i=1; i<=3; i++){
    let red = "";  // svaki put kreira prazan string za novi red
    for(let j=1; j<=5; j++){
        red += "*";  // dodaje po jednu zvezdicu u string
    }
    console.log(red, i)  // ispisuje ceo red sa zvezdicama i broj reda
}
// Ispis:
// ***** 1
// ***** 2
// ***** 3


// Zadatak 3 - pravi trougao od zvezdica, gde broj zvezdica raste po redu
for(let i=1; i<=5; i++) {
    let redd = "";  // prazan string za svaki red
    for(let j=1; j<=i; j++){
        redd += "*";  // dodaje onoliko zvezdica koliko je vrednost i
    }
    console.log(redd, i)  // ispisuje red i njegov broj
}
// Ispis:
// * 1
// ** 2
// *** 3
// **** 4
// ***** 5


// Zadatak 4 - pravi desno poravnatu piramidu sa zvezdicama
for(let i=1; i<=5; i++){
    let red = " ";  // počinje sa jednim praznim mestom (može biti i prazan string)
    
    // dodaje razmake pre zvezdica da bi se pravilo poravnanje sa desne strane
    for(let j=1; j<=5-i; j++){
        red += " ";  // svaki put dodaje jedan razmak
    }
    // dodaje zvezdice sa razmakom posle svake da bi izgledalo kao piramida
    for(let k=1; k<=i; k++){
        red += "* "  // zvezdica + razmak
    }
    console.log(red)  // ispisuje svaki red
}
// Primer ispisa:
//      * 
//     * * 
//    * * * //// Nestovane petlje (ugnjezdene)

// spoljašnja petlja: i ide od 1 do 4 (uključujući 1, a isključujući 5)
// znači izvodi se 4 puta
for(let i=1; i<5; i++){
    console.log("spoljasnja petlja" ,i)  // ispisuje se svaki put kada krene spoljašnja petlja

    // unutrašnja petlja se izvršava 10 puta za svaki prolaz spoljašnje petlje
    for(let j=1; j<=10; j++){
        console.log("unutrasnja petlja",j)  // svaki put kad unutrašnja petlja radi
    }
}
// Znači, ukupno će "unutrasnja petlja" biti ispisano 4 * 10 = 40 puta,
// a "spoljasnja petlja" 4 puta.


// Primer množenja brojeva, ispisuje tablicu množenja za i od 1 do 3 i j od 1 do 6
for(let i=1; i<4; i++){  // i = 1, 2, 3
    for(let j=1; j<=6; j++){  // j = 1, 2, 3, 4, 5, 6
        // ispisuje rezultat množenja brojeva i i j u formatu "i*j=rezultat"
        console.log(`${i}*${j}=${i*j}`)  
    }
}
// Ovo pravi tabelu množenja za brojeve 1, 2 i 3.


// Petlja koja ide od 1 do 9
for(let i=1; i<10; i++){
    if(i === 7) continue  // ako je i = 7, preskoči tu iteraciju i nastavi sa sledećom
    console.log(i)  // ispisuje trenutnu vrednost i osim kada je i = 7
}
// Rezultat je da se ispišu svi brojevi osim 7.


// Definisanje promenljive e na globalnom nivou
let e = 22;  

// Definisanje funkcije test koja ima svoju lokalnu promenljivu r
function test(){
    let r = 11;  // lokalna promenljiva unutar funkcije
    console.log(r);  // ispisuje vrednost r, tj. 11
}

console.log(e);  // ispisuje globalnu promenljivu e (22)
test();          // poziva funkciju test koja ispisuje 11


// Blok koda u kojem postoji lokalna promenljiva d
{
    let d = 33;  // promenljiva d postoji samo unutar ovog bloka
    console.log(d)  // ispisuje 33
}








