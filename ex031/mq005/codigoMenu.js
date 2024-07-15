// Coletando os dados do HTML
const burgerButtom = document.getElementById("burgerButtom");
const menu = document.getElementById("menu");

// Criando um menu interativo
burgerButtom.addEventListener('click', () => {
    if (menu.style.display == 'none'){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})

