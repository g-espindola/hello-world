let amigo = {nome:'jose',
idade:'21',
sexo:'M',
peso: 85,
engordar(n){
    console.log('Engordou')
    this.peso += n
}}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)