const open = document.getElementById("menu_open1")
const close = document.getElementById("menu_close2")

let nav = document.getElementById("nav")
 
open.addEventListener("click",() =>{
    console.log("funciona")
    nav.style.display = "block";
    document.getElementById("menu_open1").style.display = "none";
    document.getElementById("menu_close2").style.display = "block";

    
})
close.addEventListener("click",() =>{
    console.log("funciona")
    nav.style.display = "none";
    document.getElementById("menu_open1").style.display = "block";
    document.getElementById("menu_close2").style.display = "none";

    
})

