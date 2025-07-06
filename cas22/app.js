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
  
  // Provera da li objekat osoba ima ključeve "ime" i "prezime"
  console.log(osoba.hasOwnProperty("ime"))      // true
  console.log(osoba.hasOwnProperty("prezime"))  // false
  
  // Pozivanje metoda
  console.log(osoba.pozdrav())    // "moje ime je dzejlana"
  console.log(osoba.pozdrav1())   // "moje ime jeeeee dzejlana"
  console.log(osoba.pozdrav2())   // "moje imeeee jeee undefined"
  
  // Object.entries vraća niz [ključ, vrednost] parova iz objekta
  console.log(Object.entries(osoba))
  // -> [ ["ime", "dzejlana"], ["godine", 22], ["pozdrav", f], ["pozdrav1", f], ["pozdrav2", f] ]
  
  // Pravimo objekat od niza parova koristeći fromEntries
  const names = [["ime", "ajla"], ["godine", 21]]
  const noviObj = Object.fromEntries(names)
  console.log(noviObj)  // { ime: "ajla", godine: 21 }
  
  // Object.keys vraća sve ključeve objekta kao niz
  // Object.values vraća sve vrednosti objekta kao niz
  console.log(Object.keys(osoba))    // ["ime", "godine", "pozdrav", "pozdrav1", "pozdrav2"]
  console.log(Object.values(osoba))  // ["dzejlana", 22, f, f, f]
  
  // Ispisujemo sve ključeve
  Object.keys(osoba).forEach((kljuc) => console.log(kljuc))
  // Ispisujemo sve vrednosti
  Object.values(osoba).forEach((vrednost) => console.log(vrednost))
  
  // Objekat auto
  const auto = {
    marka: "audi",
    model: "Q5",
    godiste: 2017
  }
  
  // Kreiramo novi objekat koji nasleđuje auto
  const auto3 = Object.create(auto)
  console.log(auto3.model)  // "Q5" — dolazi iz "auto", jer auto3 ga nasleđuje
  
  // Pravimo kopiju auto i menjamo model
  const auto2 = Object.assign({}, auto, { model: "q7" })
  console.log(Object.values(auto2))  // ["audi", "q7", 2017] — model je zamenjen
  console.log(Object.values(auto))   // ["audi", "Q5", 2017] — originalni auto ostaje isti
  