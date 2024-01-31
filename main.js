const open = document.getElementById("menu_open1")
const close = document.getElementById("menu_close2")

const inicio = document.getElementById("btninicio")
const cartas = document.getElementById("btncartas")
const cursos = document.getElementById("btncursos")
const soy = document.getElementById("btnsoy")
const blog = document.getElementById("btnblog")
const contacto = document.getElementById("btncontacto")

let menues = [inicio, cartas, cursos, soy, blog, contacto];

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

