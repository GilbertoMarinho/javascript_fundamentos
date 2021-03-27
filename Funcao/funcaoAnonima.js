//Função com nome
function imprimirCalculo(a, b, operacao){
    console.log(operacao(a,b))
}

//função anônima armazenada na constante soma
soma = function(a, b){
    return a + b
}

//passando uma constante que armazena uma função anônima como parâmetro
imprimirCalculo(2, 4, soma)

//passando uma função anônima diretamente como parâmetro
imprimirCalculo(3,5, function(a , b){ 
    return a * b 
})

//passando uma função arrow como parâmetro
imprimirCalculo(3,5, (a , b) => a * b)

//atributo de um objeto armazenado uma função anônima (método)
pessoa = {
    nome: "Gilberto",
    saudar: function(){
        return "olá"
    }
}

