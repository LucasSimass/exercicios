

function confirmar(){
    let email =document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (email == "123" && senha == "123"){
        alert("Email e senha corretos")
    }else{
        alert("Email ou senha incorretos")
    }
}