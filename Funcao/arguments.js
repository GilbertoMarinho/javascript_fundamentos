//arguments é um array interno de uma função que armazena todos os parâmetros passados
function soma(){
    let soma = 0
    for(let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //0
console.log(soma(3,4)) //7
console.log(soma(10, 20, 'trinta')) //30trinta

