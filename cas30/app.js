// const el=document.getElementById("div")

// alert("obavestenje " + el.dataset.info)
let broj = 0

const addBtn=document.getElementById("addBtn").addEventListener("click",function(){
    let add=document.getElementById("add").value
    if(add===""){
        alert("unesi naziv")
        return
    }
    console.log("unos je ispravan",add)

    const NovaPica = document.createElement("div")
    NovaPica.innerHTML =add
    const empty = document.getElementById("empty");
    empty.appendChild(NovaPica)
})


