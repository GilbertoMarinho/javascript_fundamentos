function imprimirMultiplicacao(a, b){
    console.log(a * b)
}


imprimirMultiplicacao(2,3)
imprimirMultiplicacao(2) // Os parametros que faltam vão ser considerados undefined
imprimirMultiplicacao(2,10,4,5,6) //A função não considerará os parametros sobressalentes

//valor padrão para parâmetro
function soma(a, b = 0){
    return a + b
}

console.log(soma)