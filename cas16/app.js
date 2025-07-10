// ///1.     Da li postoji bar jedan broj koji je prost?

// const broj=[5,7344234]
// function isprost(broj){
//     for(let i=2; i<broj; i++){
//         if(broj%i===0) return false;
//          }
//     return true 
// }
// const brojevi=broj.some((isprost))
// console.log(brojevi)


// ///2. Da li postoji korisnik mlađi od 18 godina?
// const korisnici = [
//     { ime: "Ana", godine: 21 },
//     { ime: "Lena", godine: 17 },
//     { ime: "Marko", godine: 30 }
//   ];
  
// let godine=korisnici.some((korisnik)=>korisnik.godine<18)
// console.log(godine)

// //3. Da li su svi brojevi parni?

// const niz=[1,2,3,4,5,6]
// const parni=niz.every((par)=>par%2===0)
// console.log(parni)



// ///4.Da li svi studenti imaju više od 5 na ispitu?
// const studenti = [
//     { ime: "Tarik", ocena: 7 },
//     { ime: "Ena", ocena: 8 },
//     { ime: "Luka", ocena: 6 }
//   ];

// let ocene=studenti.every((viseOdpet)=>viseOdpet.ocena>5)
// console.log(ocene)


// ///5.Napraviti novi niz kvadrata svih brojeva
// const nizz=[1,2,3,4,5,6]
// let kvadrat=nizz.map((broj)=>Math.pow(broj,2))
// console.log(kvadrat)




