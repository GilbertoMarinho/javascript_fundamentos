const ingredientes = ['tomate', 'cebola', 'arroz', 'carne']

//For each espera receber uma função de callback como argumento, 
//essa função passada para foreach será executada a cada iteração do array, 
//além disso, quando a callback for executada, for each passará o valor e o indice do elemento atual na lista como argumentos da função calback.
ingredientes.forEach(function(valor, indice){
    console.log(`${indice +1} - ${valor}`)
})

//Não é necessário passar todos os parâmetros para a callback
ingredientes.forEach(nome => console.log(nome))


