const notas = [5, 7, 9] 



const total = notas.reduce(function(acumulador, atual){
    return acumulador + atual
})

console.log(total)//21


