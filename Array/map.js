const nums = [1, 2, 3]

//Chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, 
//e constrói um novo array com base nos retornos de cada chamada
//Map fornece à calback três argumentos: valor do item atual, índice do item atual e o próprio array original
let resultado = nums.map(function(valor){
    return valor * 2
})
 console.log(resultado) //[ 2, 4, 6]
  
 //Se a calbac não tiver um retorno, o no array terá valores undefined
 resultado = nums.map(function(valor){
     
})
console.log(resultado)//[ undefined, undefined, undefined]


const incrementa = valor => valor + 1
const triplica = valor => valor * 3
//maps encadeados
resultado = nums.map(incrementa).map(triplica)
console.log(resultado)


