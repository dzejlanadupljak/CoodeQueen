// let tekst=prompt("Unesi tekst");
// let samoglasnici="A, a, E, e, I, i, O, o, U, u";
// let broj=0;

// for(let i=0;i<tekst.length;i++){
//     if(samoglasnici.includes(tekst[i])){
//         broj++
//     }

// }
// console.log("Broj samoglasnika je "+ broj) 



// let broj=parseInt(prompt("Unesi neki broj n: "))
// let prost=true
// if(broj<=1){
//     prost=false
// }else{
//     for(let i=2; i<Math.sqrt(broj); i++){
//         if(broj%i===0){
//             prost=false
//             break;
//         }
//     }
// }

// if(prost){
//     console.log("Broj " + broj + " je prost broj")
// }else{
//     console.log("Broj " + broj + " nije prost broj")
// }


// let broj = prompt("Unesi broj"); // ostaje string
// let zbir = 0;

// for (let i = 0; i < broj.length; i++) {
//   zbir += parseInt(broj[i]);
// }

// console.log("Zbir unetog broja je " + zbir);




// let i=1;
// while(i<=5){
//   console.log(i);
//  i++;
// }
//  let i=0;
//   while(i<20){
//     i+=2;
//   console.log(i)

//   }
// let broj=parseInt(prompt("unesi broj"))

// while(broj<=0 || isNaN(broj)){
//   broj=parseInt(prompt("unesi pozitivan broj"))
// }
// alert("hvala")

// let n=parseInt(prompt("unesi brojeve"));

// let suma=0;
// let i=1;

// while(i<=n){
//   suma+=i;
//   i++
// }
// alert("suma brojeva"+ n + "je" +suma)

let cilj=Math.floor((Math.random()*10)+1)
let unos;

while(unos!==cilj){
  unos=parseInt(prompt("progodi broj"))
}
alert("broj je pogodjen" +cilj)