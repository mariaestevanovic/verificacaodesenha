let btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    let password = window.document.getElementById('senha')

    if(password.type == "password"){
        password.type = "text"
        this.style.opacity = "1"
    }else{
        password.type = "password"
        this.style.opacity = ".4"
    }


})

function verificaSenha() {

    let senha = window.document.getElementById('senha')
    let car = window.document.getElementById('car')
    let mai = window.document.getElementById('mai')
    let min = window.document.getElementById('min')
    let num = window.document.getElementById('num')
    let acent = document.getElementById('acent')
    let resul = document.getElementById('res')

    let resultado = senha.value.split("")
    let minuscula = false
    let maiuscula = false
    let numero = false
    let acento = false

    for (let caractere = 0; caractere < senha.value.length; caractere++) {

        let teste = resultado[caractere].charCodeAt(0)

        if (teste >= 64 && teste <= 90)
            maiuscula = true
        else if (teste >= 97 && teste <= 122)
            minuscula = true
        else if (teste >= 48 && teste <= 57)
            numero = true
        else if (teste >= 32 && teste <= 47 || teste >= 58 && teste <= 64 || teste >= 123 && teste <= 255)
            acento = true

    }

    if (senha.value.length < 8)
        car.innerHTML = "❌ Falta Caracteres Em Sua Senha! No Mínimo 8 Caracteres"
    else if (senha.value.length > 32)
        car.innerHTML = "❌ Muitos Caracteres Em Sua Senha! No Máximo 32 Caracteres"
    else
        car.innerHTML = "✔️ Caracteres Suficientes Em Sua Senha!"


    if (maiuscula == true)
        mai.innerHTML = "✔️ Tem Letra Maiúscula Na Senha!"
    else
        mai.innerHTML = "❌ Não Tem Letra Maiúscula Na Senha! (Mínimo 1)"

    if (minuscula == true)
        min.innerHTML = "✔️ Tem Letra Minúscula Na Senha!"
    else
        min.innerHTML = "❌ Não Tem Letra Minúscula Na Senha! (Mínimo 1)"

    if (numero == true)
        num.innerHTML = "✔️ Tem Número Na Senha!"
    else
        num.innerHTML = "❌ Não Tem Número Na Senha! (Mínimo 1)"

    if (acento == true)
        acent.innerHTML = "❌ <strong>Não pode conter caractere especial em sua senha</strong> ❌"
    else
        acent.innerHTML = ''

    if (senha.value.length >= 8 && senha.value.length <=32 && maiuscula == true && minuscula == true && numero == true && acento == false)
        resul.innerHTML = "<strong>Sua senha está OK!</strong>"
    else
        resul.innerHTML = "<strong>Melhore sua senha!</strong>"


}