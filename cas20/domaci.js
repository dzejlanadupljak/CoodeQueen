// ///1.Napravi objekat `auto` koji ima sledeća svojstva: marka, model, godina, boje (niz boja).
//  //- Dodaj svojstvo `vlasnik`
//  //- Izmeni godinu
//  ///- Izbriši boju
// //- Ispisi samo marku i model

// const auto={
//     marka:"mercedes",
//     model:"B class",
//     godina:2010,
//     boje:["crna","plava", "crvena"]
// }
// auto.vlasnik="Dzejlana"
// auto.godina=2022,
// delete auto.boje[0]
// console.log(auto.marka,auto.model)



// ///2.   Napravi novi niz imena svih korisnika (`map`).
//   // Filtriraj korisnike starije od 18 godina (`filter`).
//   /// Ispiši korisnike čije ime ima 4 ili više slova 
// //   const korisnici = [
// //     { ime: "Ema", godine: 18 },
// //     { ime: "Hana", godine: 21 },
// //   {ime:"Edaa",godine:20}
// //   ];

// //   let niz=korisnici.map((k)=>k.ime)
// //   console.log(niz)
// const korisnici = [
//     { ime: "Ema", godine: 18 },
//     { ime: "Hana", godine: 21 },
//   {ime:"Edaa",godine:20}
//   ];

// //   let niz2=korisnici.filter((k)=>k.godine>=18)
// //   console.log(niz2)

// let niz=korisnici.filter((k)=>k.ime.length>=4)
// console.log(niz)

// //3. Filtriraj proizvode čija je cena manja od 3000
//  //Iz rezultata napravi niz samo njihovih naziva (koristi `map`)
//  const proizvodi = [
//     { naziv: "Majica", cena: 1200 },
//     { naziv: "Patike", cena: 6000 },
//     { naziv: "Kačket", cena: 800 },
//     { naziv: "Trenerka", cena: 3000 },
//   ];

//  console.log(proizvodi.filter((proizvod)=> proizvod.cena < 3000))
//  console.log(proizvodi.map((proizvod)=> proizvod.naziv))



// ///4.   Dodaj još jednog studenta u niz
//    //Izbriši studenta sa prosekom manjim od 9
//    //Ispisi imena svih preostalih studenata
// let studenti = [
//   { ime: "Ana", prosek: 9.1 },
//   { ime: "Mitar", prosek: 8.3 },
//   {ime:"Maja",prosek:10}
// ];

// studenti.push({ime:"sara",prosek:8.9})
// console.log(studenti)


// let stud=studenti.filter((student)=>student.prosek<9)
// console.log(stud)

// let stude=studenti.filter((stud)=>stud.prosek>9)

// // studenti.forEach((stud )=>stud.ime)

// console.log(stude)

// ///5.Izračunaj ukupan iznos svih računa pomoću reduce

// const racuni = [
//     { naziv: "Struja", iznos: 3200 },
//     { naziv: "Voda", iznos: 800 },
//     { naziv: "Internet", iznos: 1500 },
//   ];
// const ukupno = racuni.reduce((suma,r)=> suma+r.iznos,0)  
// console.log(ukupno)


