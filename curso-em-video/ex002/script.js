function Verificar(){

    var agora = new Date()
    var ano_atual = agora.getFullYear()


    var element_textbox = document.getElementById('caixa')
    var ano_nascimento = Number(element_textbox.value)

    if (ano_nascimento == 0 || ano_nascimento > ano_atual){
        alert("[ERRO] Revise as informações e tente novamente!")
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var results = document.querySelector('div#res')

        var idade = ano_atual - ano_nascimento

        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 5){
                //crianca
                img.setAttribute('src', 'bebe_homem.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescente_homem.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'bebe_mulher.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescente_mulher.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto_mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_mulher.png')
            }
        }
        
    results.innerHTML = `Voce é ${genero} e tem ${idade} anos!`
    results.style.textAlign = 'center'
    results.appendChild(img) 



    }
    



 



}