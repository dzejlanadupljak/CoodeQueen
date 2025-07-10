<<<<<<< Updated upstream
// Pravimo objekat osoba sa imenom, godinama i 3 metode (funkcije)
const osoba = {
  ime: "dzejlana",
  godine: 22,

  // Obična funkcija — this pokazuje na objekat osoba
  pozdrav: function () {
    return `moje ime je ${this.ime}`
  },

  // Skraćeni zapis funkcije — isto kao gore
  pozdrav1() {
    return `moje ime jeeeee ${this.ime}`
  },

  // Arrow funkcija — this NE pokazuje na objekat osoba, pa ne radi kako treba
  pozdrav2: () => {
    return `moje imeeee jeee ${this.ime}`  // this.ime ovde vraća undefined
  }
}

// hasOwnProperty(key)
// Proverava da li objekat ima baš svoje (ne nasleđeno) svojstvo sa imenom 'key'
// Vraća true ili false
console.log(osoba.hasOwnProperty("ime"))      // true, jer osoba ima svojstvo ime
console.log(osoba.hasOwnProperty("prezime"))  // false, nema svojstvo prezime

// Pozivanje metoda
console.log(osoba.pozdrav())    // "moje ime je dzejlana"
console.log(osoba.pozdrav1())   // "moje ime jeeeee dzejlana"
console.log(osoba.pozdrav2())   // "moje imeeee jeee undefined"

// Object.entries(obj)
// Vraća niz parova [ključ, vrednost] za svojstva objekta
console.log(Object.entries(osoba))
// Primer izlaza: [["ime", "dzejlana"], ["godine", 22], ["pozdrav", f], ["pozdrav1", f], ["pozdrav2", f]]

// Object.fromEntries(array)
// Pravi objekat od niza parova [ključ, vrednost]
const names = [["ime", "ajla"], ["godine", 21]]
const noviObj = Object.fromEntries(names)
console.log(noviObj)  // { ime: "ajla", godine: 21 }

// Object.keys(obj)
// Vraća niz svih ključeva (imena svojstava) objekta
console.log(Object.keys(osoba))    // ["ime", "godine", "pozdrav", "pozdrav1", "pozdrav2"]

// Object.values(obj)
// Vraća niz svih vrednosti svojstava objekta
console.log(Object.values(osoba))  // ["dzejlana", 22, f, f, f]

// Ispisujemo sve ključeve objekta (koristeći forEach)
Object.keys(osoba).forEach((kljuc) => console.log(kljuc))

// Ispisujemo sve vrednosti objekta (koristeći forEach)
Object.values(osoba).forEach((vrednost) => console.log(vrednost))

// Prototipsko nasleđivanje:
// Kreiramo objekat auto sa nekim svojstvima
const auto = {
  marka: "audi",
  model: "Q5",
  godiste: 2017
}

// Kreiramo novi objekat koji nasleđuje svojstva od objekta auto
// To znači da auto3 nema svoje svojstva, ali "gleda" u auto za njih
const auto3 = Object.create(auto)
console.log(auto3.model)  // "Q5" — vrednost dolazi iz objekta auto

// Object.assign(target, ...sources)
// Pravi kopiju objekta (target je prazan objekat {}) i spaja svojstva iz izvora
// Ovde pravimo kopiju objekta auto, ali menjamo svojstvo model u "q7"
const auto2 = Object.assign({}, auto, { model: "q7" })

// Ispisujemo vrednosti objekta auto2 (kopija sa izmenjenim modelom)
console.log(Object.values(auto2))  // ["audi", "q7", 2017]

// Ispisujemo vrednosti originalnog objekta auto (ostao nepromenjen)
console.log(Object.values(auto))   // ["audi", "Q5", 2017]
=======
// // // Pravimo objekat osoba sa imenom, godinama i 3 metode (funkcije)
// // const osoba = {
// //     ime: "dzejlana",
// //     godine: 22,
  
// //     // Obična funkcija — this pokazuje na objekat osoba
// //     pozdrav: function () {
// //       return `moje ime je ${this.ime}`
// //     },
  
// //     // Skraćeni zapis funkcije — isto kao gore
// //     pozdrav1() {
// //       return `moje ime jeeeee ${this.ime}`
// //     },
  
// //     // Arrow funkcija — this NE pokazuje na objekat osoba, pa ne radi kako treba
// //     pozdrav2: () => {
// //       return `moje imeeee jeee ${this.ime}`  // this.ime ovde vraća undefined
// //     }
// //   }
  
// //   // hasOwnProperty(key)
// //   // Proverava da li objekat ima baš svoje (ne nasleđeno) svojstvo sa imenom 'key'
// //   // Vraća true ili false
// //   console.log(osoba.hasOwnProperty("ime"))      // true, jer osoba ima svojstvo ime
// //   console.log(osoba.hasOwnProperty("prezime"))  // false, nema svojstvo prezime
  
// //   // Pozivanje metoda
// //   console.log(osoba.pozdrav())    // "moje ime je dzejlana"
// //   console.log(osoba.pozdrav1())   // "moje ime jeeeee dzejlana"
// //   console.log(osoba.pozdrav2())   // "moje imeeee jeee undefined"
  
// //   // Object.entries(obj)
// //   // Vraća niz parova [ključ, vrednost] za svojstva objekta
// //   console.log(Object.entries(osoba))
// //   // Primer izlaza: [["ime", "dzejlana"], ["godine", 22], ["pozdrav", f], ["pozdrav1", f], ["pozdrav2", f]]
  
// //   // Object.fromEntries(array)
// //   // Pravi objekat od niza parova [ključ, vrednost]
// //   const names = [["ime", "ajla"], ["godine", 21]]
// //   const noviObj = Object.fromEntries(names)
// //   console.log(noviObj)  // { ime: "ajla", godine: 21 }
  
// //   // Object.keys(obj)
// //   // Vraća niz svih ključeva (imena svojstava) objekta
// //   console.log(Object.keys(osoba))    // ["ime", "godine", "pozdrav", "pozdrav1", "pozdrav2"]
  
// //   // Object.values(obj)
// //   // Vraća niz svih vrednosti svojstava objekta
// //   console.log(Object.values(osoba))  // ["dzejlana", 22, f, f, f]
  
// //   // Ispisujemo sve ključeve objekta (koristeći forEach)
// //   Object.keys(osoba).forEach((kljuc) => console.log(kljuc))
  
// //   // Ispisujemo sve vrednosti objekta (koristeći forEach)
// //   Object.values(osoba).forEach((vrednost) => console.log(vrednost))
  
// //   // Prototipsko nasleđivanje:
// //   // Kreiramo objekat auto sa nekim svojstvima
// //   const auto = {
// //     marka: "audi",
// //     model: "Q5",
// //     godiste: 2017
// //   }
  
// //   // Kreiramo novi objekat koji nasleđuje svojstva od objekta auto
// //   // To znači da auto3 nema svoje svojstva, ali "gleda" u auto za njih
// //   const auto3 = Object.create(auto)
// //   console.log(auto3.model)  // "Q5" — vrednost dolazi iz objekta auto
  
// //   // Object.assign(target, ...sources)
// //   // Pravi kopiju objekta (target je prazan objekat {}) i spaja svojstva iz izvora
// //   // Ovde pravimo kopiju objekta auto, ali menjamo svojstvo model u "q7"
// //   const auto2 = Object.assign({}, auto, { model: "q7" })
  
// //   // Ispisujemo vrednosti objekta auto2 (kopija sa izmenjenim modelom)
// //   console.log(Object.values(auto2))  // ["audi", "q7", 2017]
  
// //   // Ispisujemo vrednosti originalnog objekta auto (ostao nepromenjen)
// //   console.log(Object.values(auto))   // ["audi", "Q5", 2017]
  
>>>>>>> Stashed changes
