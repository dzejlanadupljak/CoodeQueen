////Nestovane petlje(ugnjezdene)

// for(let i=1;i<5;i++){
//     console.log("spoljasnja petlja")
//     for(let j=1;j<=10;j++){
//         console.log("unutrasnja petlja")
//     }
// }


// for(let i=1;i<4;i++){
//     for(let j=1;j<=6;j++){

//          console.log(`${i}*${j}=${i*j}`)
      
//     }
// }




for(let i=1;i<10;i++){
    if(i===7)continue
    console.log(i)
}

let e=22;

function test(){
    let r=11;
    console.log(r);
}

console.log(e);
test()

{
    let d=33;
    console.log(d)
}

//zadatak 1 do while petlja
// let sifra="Selda123";
// do{
//     unos=prompt("Unesi sifru");
    
// }while(unos !== sifra);
// console.log("Pogodili ste sifru");

//zadatak 2
for(let i=1; i<=3; i++){
    let red=""
    for(let j=1; j<=5; j++){
        red+="*";
    }
    console.log(red,i)
}

//zadatak3

for(let i=1;i<=5;i++)
    {
    let redd=""

    for(let j=1;j<=i;j++){
    redd+="*"
}
console.log(redd,i)
}

//zadatak4

for(let i=1;i<=5;i++){
    let red=" ";

for(let j=1;j<=5-i;j++){
red+=" ";

}
for(let k=1;k<=i;k++){
    red+="* "
}
console.log(red)
}