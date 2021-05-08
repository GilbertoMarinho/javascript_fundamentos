const compras = ["farinha", "ovos", "sal", "leite"]

compras.pop() //remove o último item
console.log(compras) //[ 'farinha', 'ovos', 'sal' ]

compras.push("açúcar")//adciona na última posição
console.log(compras) //[ 'farinha', 'ovos', 'sal', 'açúcar' ]



compras.shift()//remove o primeiro
console.log(compras) //[ 'ovos', 'sal', 'açúcar' ]

compras.unshift("maçã")//adciona na primeira posição
console.log(compras)//[ 'maçã', 'ovos', 'sal', 'açúcar' ]


//SPLICE
/*Remove elementos de um array e, se necessário, insere novos elementos em seus lugares
retornando os elementos deletados*/

/*   @param1 start O indice no array a partir do qual iniciar a remoção de elementos.
     @param2 deleteCount O número de elementos a serem removidos.
     @param3 items Elementos a serem inseridos no array no lugar dos elementos excluídos.
     @returns Uma matriz contendo os elementos que foram excluídos*/
compras.splice(1, 0, "tomate", "alface")
console.log(compras) //[ 'maçã', 'tomate', 'alface', 'ovos', 'sal', 'açúcar' ]

compras.splice(1, 2, "arroz" )
console.log(compras) //[ 'maçã', 'arroz', 'ovos', 'sal', 'açúcar' ]


novasCompras = compras.slice(0, 3) //devolve um pedaço de um array
console.log(novasCompras) //[ 'maçã', 'arroz', 'ovos' ]