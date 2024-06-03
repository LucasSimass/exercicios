let bloco = document.querySelector(".bloco")
let p = document.createElement("p")

function clicou(){
    bloco.style.backgroundColor = "blue"
    p.textContent="Olá,mundo!"
    bloco.appendChild(p)
}