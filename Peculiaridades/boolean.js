let isAtivo = true
console.log(isAtivo)

isAtivo = 1
//! é um operador de negação; !! é uma negação de uma negação
console.log(!!isAtivo)

console.log('Os verdadeiros:')
console.log(!!1)
console.log(!!-1)
console.log(!!10)
console.log(!!' ')
console.log(!!'texto')
console.log(!!{})


console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

// O 'ou' lógico faz com que o primeiro valor verdadeiro encontrado na expressão lógica seja atribuído
let nome = '' || 'ronaldo' || 0
console.log(nome)


