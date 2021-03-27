//forma literal de declarar uma função
let elevarAoQuadrado = function(){
    return Math.pow(numero,2)
}


//função arrow declarada na sua forma completa
elevarAoQuadrado = (numero) => {
    return Math.pow(numero,2)
}


/*caso não conter '{}' no corpo da função, 
o compilador vai entender o código que vem a seguir de '=>' como sendo o retorno da função*/
//caso a função tenha somente um parâmetro os '()' podem ser omitidos*/
elevarAoQuadrado = numero => Math.pow(numero,2) //retorno implicito
//Função de uma linha ;)


//função arrow sem parâmetros
elevarAoQuadrado = () => Math.pow(5,2)







