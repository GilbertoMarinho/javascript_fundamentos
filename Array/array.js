//criando array com new (não recomendado)
let ingredientes = new Array("farinha", "leite")

//criando array de forma literal
ingredientes = ["farinha", "leite"]

//acessando itens
console.log(ingredientes[0])//farinha
console.log(ingredientes[2])//undefined

ingredientes[10] = "açúcar"
console.log(ingredientes) //[ 'farinha', 'leite', <8 empty items>, 'açúcar' ]

delete ingredientes[0]
console.log(ingredientes) //[ <1 empty item>, 'leite', <8 empty items>, 'açúcar' ]