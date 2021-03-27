let arrayExemplo = ['um', 'dois', 'tres', 'quatro']
//for que percorre o array arrayExemplo, armazenando o índice de cada iteração em indice
for(let indice in arrayExemplo){
    console.log(indice, arrayExemplo[indice])
}//importante declarar indice como let para que essa variável exista apenas no escopo do for in


endereco = {
    bairro: 'pindamonhagao',
    rua: 'pindamonhagaba',
    numero: 30
}

//atributo vai receber uma string com o nome da chave do objeto a cada iteração
for(let atributo in endereco){
    console.log(`${atributo} = ${endereco[atributo]}`)
}