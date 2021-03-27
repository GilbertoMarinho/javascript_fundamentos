//armazenando uma função sem nome em uma variável
const imprimirSoma = function(a,  b){
    console.log(a+b)
}
imprimirSoma(2,5)

//Outro modo de fazer isso com uma função arrow
const imprimirMultiplicacao = (a, b) => {
    console.log(a*b)
}
imprimirMultiplicacao(5,10)

//Encurtando a sintaxe com função arrow
// Após o "=>" temos o retorno da função, função de uma única linha
const imprimirSubtracao = (a,b) => console.log(a-b)
imprimirSubtracao(3,2)