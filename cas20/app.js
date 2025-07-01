const osoba={
ime:"dzejlana",
prezime:"dupljak",
godine:22,
visina:174,
adresa:{
    ulica:"jaklja",
    grad:"np"
},
"user name":"dzejlana.dupljak",
hobiji:["plivanje","programiranje","pevanje"]
}

console.log(osoba.prezime)

console.log(osoba.adresa.ulica)

console.log(osoba.hobiji[1])
console.log(osoba["user name"])


osoba.zanimanje="uciteljica";

console.log(osoba.zanimanje)

delete osoba.prezime
console.log(osoba.prezime)


for(let i=0;i<osoba.hobiji.length;i++){
    console.log(osoba.hobiji[i])

}

///1.zadatak

const kljucevi=Object.keys(osoba)

console.log(kljucevi)
kljucevi.forEach((el, index)=>{
    console.log(`${index} ima vrednost ${el}`)

}
)
//2.zadatak
let zbir = 0

kljucevi.forEach((el)=>{
    if( typeof osoba[el] === "number")
        zbir += osoba[el]
    
}
)
console.log("zbir numerickih vrednosti je:" +zbir)