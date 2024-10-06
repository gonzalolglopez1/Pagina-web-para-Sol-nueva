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
let navabierto = document.getElementById("navabierto")

function showModalFirstTime() {
    if (!localStorage.getItem('modalShown')) {
      var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
      localStorage.setItem('modalShown', 'true');
    }
  }
  
  window.onload = showModalFirstTime;
 
open.addEventListener("click",() =>{
    console.log("funciona")
    navabierto.style.display = "block";
    document.getElementById("menu_open1").style.display = "none";
    document.getElementById("menu_close2").style.display = "block";

    
})
close.addEventListener("click",() =>{
    console.log("funciona")
    navabierto.style.display = "none";
    document.getElementById("menu_open1").style.display = "block";
    document.getElementById("menu_close2").style.display = "none";
    
    
})

menues.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
      navabierto.style.display = "none";
      open.style.display = "block";
      close.style.display = "none";
    });
  });
  

