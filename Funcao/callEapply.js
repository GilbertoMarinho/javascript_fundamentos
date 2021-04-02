/*Utilizados para executar uma função utilizando o contexto léxico de um objeto expecífico, 
o this interno da função executada irá fazer referência ao objeto passado em call 
para essa execução individual.*/

apresentarPessoa = function(saudacao = 'olá', sobrenome = "Doe"){
    return `${saudacao}, meu nome é ${this.nome} ${sobrenome}`
}

pessoa1 = {
    nome: 'Gilberto'
}

//funcao.call(THIS, paramFuncao1, paramFuncao2...)
console.log(apresentarPessoa.call(pessoa1,'bom dia', 'Marinho')) //bom dia, meu nome é Gilberto Marinho

//funcao.apply(THIS, [paramFuncao1, paramFuncao2...])
console.log(apresentarPessoa.apply(pessoa1, ['boa noite', 'Silva'])) //boa noite, meu  nome é Gilberto Silva

global.nome = 'objGlobal'
console.log(apresentarPessoa.call(global))//olá, meu nome é objGlobal Doe