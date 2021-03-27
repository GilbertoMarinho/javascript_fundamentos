//this em funcao normal = objeto que chama a função
let comparaComThis = function(parametro) {
   console.log(this === parametro)
}

//objeto global chama comparaComThis
//logo, nesse contexto, o this interno de comparaComThis vai ser igual ao objeto global
comparaComThis(global)//true


const objetoTeste = {}
//amarrando comparaComThis ao objetoTeste
//objetoTeste se torna o this definitivo de comparaComThis
comparaComThis = comparaComThis.bind(objeto)
comparaComThis(global)//false 


// this em arrow function = associado ao contexto em que a função foi declarada
//THIS INVARIAVEL
let comparaComThisArrow = (parametro) => {
    //nesse contexto o this vai ser associado ao arquivo node corrente
    console.log(this === parametro)
}

//mesmo global chamando this, a função compara não vai mudar o seu this interno
comparaComThisArrow(global)//false

//module.exports = arquivo node corrente
comparaComThisArrow(module.exports)//true

//bind não tem efeito em funções arrow
const objeto = {}
comparaComThisArrow = comparaComThisArrow.bind(objeto)
comparaComThisArrow(objeto)//false







 



