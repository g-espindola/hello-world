//if else
var idade = Math.random()*75

console.log(idade)

if (idade < 16){
    console.log('Voto Restrito')
} else if (idade < 18) {
    console.log('Voto Opicional')
} else if (idade < 65){
    console.log('Voto Obrigatorio')
} else {
    console.log('Voto Opicional')
}