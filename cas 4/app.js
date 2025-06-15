let person={
    ime:"Dzejlana",
    prezime:"Dupljak",
    godine:22,
    student:true
}
// console.log(person.godine);
person.grad="NP"
// console.log(person.grad);

person.godine=21
//console.log(person.godine)

delete person.prezime
console.log(person)

let car={
    model:"BMW",
    godiste:2005,

vlasnik:{
    ime:"Selda", 
    godine:21 ,
    
}
}
console.log(car.vlasnik.ime)

let pets=[
    {
        ime:"Pingvin", rasa:"Ptica"
    },
    {
        ime:"Tom", rasa:"Macka"
    }
]

console.log(pets[0])

let laptop={
    marka:"hp",
    model:"pavilion",
 specifikacije:{
    ram:"8GB",
    harddisk:"512GB",

 }   
}
console.log(laptop.specifikacije.ram)

let books=[
{
    naslov:"Vrli novi svet",
    autor:"Oldous Haksli",
},

{
    naslov:"Na Drini cuprija",
    autor:"Ivo Andric"
},
{
    naslov:"Alhemicar",
    autor:"Paulo Koeljo",
},
{
    naslov:"Mali princ",
    autor:"Antoan de Sent Egziperi"
}
]

console.log(books[1].autor)

let users=[
    {
        username:"Amra",
        email:"berrina7@live.com",
        profile:{
        age:25,
        country:"Serbia"

        }

    },
    {
        username:"Sara",
        email:"sara11@.live.com",
        profile:{
        age:22,
        country:"Norway"

        }
        
    }
]
console.log(users[1].profile.country)

let product={
    name:'voda',
    price: 120,
    valuable:true,
detalji:{
    color:['prozirna', 'plava', 'roze'],
    taste:'kisela'
}
}

console.log(product.valuable)
console.log(product.detalji.color[2])

let sistem={
    users:['ema','dzejlana','ajsa'],
    id:4,
    active:true
}

sistem.email="ajsa1@fmail.com"

console.log(sistem);




