const pessoa = {
    nome: 'Gilberto',
    idade: 22
}

//retorna um array com as chaves do objeto
console.log(Object.keys(pessoa)) //[ 'nome', 'idade' ]

//retorna um array com os valores do objeto
 console.log(Object.values(pessoa)) //[ 'Gilberto', 22 ]

 // retorna um array contendo subarrays para cada par chave valor
 console.log(Object.entries(pessoa)) //[ [ 'nome', 'Gilberto' ], [ 'idade', 22 ] ]

 // define uma propriedade nova ou existente de um objeto e suas caracteristicas
 Object.defineProperty(pessoa, 'dataNascimento', {  
    enumerable: true,
    writable: false, //propriedade não poderá ter seu valor alterado
    value: '13/08/1999'
 }) //(objeto alvo, nome da propriedade, objeto com as caracteristicas da propriedade)

pessoa.dataNascimento = '01/01/2000' //não terá efeito

// copia as propriedade de um ou mais objetos em um unico objeto de destino
const objAlvo = {prop1: '1'}
const objFonte1 = { prop2: '2'}
const objFonte2 = { prop3: '3'}
const objFonte3 = { prop4: '4', prop1:'5'}//prop1 de objAlvo será sobrescrevido

const objResultado = Object.assign(objAlvo, objFonte1, objFonte2, objFonte3)
console.log(objResultado) //{ prop1: '5', prop2: '2', prop3: '3', prop4: '4' }

//impede que novas propriedades sejam adcionadas a um objeto, assim como impede que as propridades existentes sejam alteradas
Object.freeze(pessoa)
