//9. Napravite <div> i <button>. Klikom na dugme menjaš boju <div> (ako je bela ➜ crvena ➜ bela).

const klik=document.getElementById("klik").addEventListener("click",function(){
  
    let promena=document.getElementById("promena").classList.toggle("change")

})

// 10. Kada pređeš mišem preko <div>, neka mu se poveća širina. Kada miš ode, vrati se na staro.

const div=document.getElementById("div")



div.addEventListener("mouseenter",()=>{
    div.style.width="300px"
    div.style.backgroundColor="red"
}
)

div.addEventListener("mouseleave",()=>{
    div.style.width="200px"
})