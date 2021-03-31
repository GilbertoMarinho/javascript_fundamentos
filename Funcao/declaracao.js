//HOISTING
//o compilador do js resolve primeiro as declarações(funções nomeadas, variaveis...) 
//para depois resolver o resto do código(atribuições, calculos, processamento...)

console.log(soma(2,5))// function declaration pode ser chamado antes da declaração da função no código
console.log(sub(3,5))// vai retornar erro, function expression não sofre hoisting


//function declaration
function soma(a,b){
    return a+b
}

//function expression
const sub = function(a,b){ //uma atribuição não sofre hoisting do compilador
    return a-b
}

//named function expression
const div = function div(a,b){
    return a/b
}