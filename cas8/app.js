// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)



// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// for(let i=1; i<=10; i++ ){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// for(let i=2;i<=10; i+=2){
//     console.log(i)
// }
// i=i+2
let rec = prompt("Unesi reč:");
let jestePalindrom = true;

for (let i = 0; i < rec.length / 2; i++) {
    if (rec[i] !== rec[rec.length - 1 - i]) {
        jestePalindrom = false;
        break;
    }
}

if (jestePalindrom) {
    console.log("Reč je palindrom.");
} else {
    console.log("Reč nije palindrom.");
}
