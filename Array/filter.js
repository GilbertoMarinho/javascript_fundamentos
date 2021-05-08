const produtos = [
    {nome: 'Vassoura', peso: 1.2, fragil: false},
    {nome: 'Fone', peso: 0.8, fragil: true},
    {nome: 'notebook', peso: 2, fragil: true},
    {nome: 'piano', peso:200, fragil: false}
]

//chama a função callback fornecida, uma vez para cada elemento do array, 
//e constrói um novo array com todos os valores para os quais o callback retornou o valor true
const resultado = produtos.filter(function(){
    return false
})
console.log(resultado) //[]


const pesados = produtos.filter(function(prod){ //[ { nome: 'piano', peso: 200, fragil: false } ]
    return prod.peso > 30
})
console.log(pesados)


const frageis = produtos.filter(function(prod){
    return prod.fragil
})
console.log(frageis) 
/*[
  { nome: 'Fone', peso: 0.8, fragil: true },
  { nome: 'notebook', peso: 2, fragil: true }
]*/
