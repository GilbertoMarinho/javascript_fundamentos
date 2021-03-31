const ingredientes = ['farinha', 'acucar', 'ovo', 'leite']

function imprmir(texto, indice){
    console.log(indice, texto)
}

ingredientes.forEach(imprmir) 
/*for each recebe uma função de calback como argumento,
a cada iteração do loop, for each executa a função calback 
passando para a função calback texto e indice da lista como parâmetro*/

