//if else + date
var hoje = new Date()
var hora = hoje.getHours()

console.log(`Now is exactly ${hora} hours!`)

if(hora < 12){
    console.log('Bom dia raio de sol.')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}