let amigo = {nome: 'Jose',
sexo: 'M',
peso: 85.3,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)