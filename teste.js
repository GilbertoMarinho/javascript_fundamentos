const pessoa = {
    nome: 'Gilberto',
    idade: 22
}

Object.defineProperty(pessoa, 'dataNascimento', {  
    enumerable: true,
    writable: false, //propriedade não poderá ter seu valor alterado
    value: '13/08/1999'
 })