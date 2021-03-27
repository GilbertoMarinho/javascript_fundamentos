console.log('--------------Teste escopo var--------------')
var variavelVar = 'Fora'
{
    //Escopo de bloco é ignorado por var, temos uma variável só para os dois escopos
    //Var pode ser declarada mais de uma vez
    var variavelVar = 'Dentro' 
    console.log(variavelVar)
}
console.log(variavelVar)


console.log('--------------Teste escopo let--------------')
let variavelLet = 'Fora'
let letFora = 'Fora'
{
    //Let considera o escopo de bloco, temos uma variável 'variavelLet' para cada escopo
    //Uma variável let pode ser declarada mais de uma vez com o mesmo nome somente em escopos diferentes
    let variavelLet = 'Dentro'
    console.log(variavelLet)

    // Caso uma variável não exista no escopo local, o js vai procurar por essa variável em um escopo superior
    console.log(letFora)
} 
console.log(variavelLet)


console.log('--------------Teste loop var--------------')
for(var i=0; i<3; i++){
    console.log('i dentro do for ='+i)
}
//var ignora o escopo de loop, a variavel i existe globalmente e seu valor foi alterado globalmente no loop
//Com let, a expressão abaixo retornaria erro, pois i não existiria globalmente
console.log('i Fora do for ='+i)