const jogador = {
    nome: 'Ronaldo',
    posicao: 'Atacante',
    time: 'Real Madrid',
    fisico: {
        altura: 1.8,
        peso: 85
    }

}
 
// usansdo destructing para criar duas variáveis do tipo let a partir dos atributos do objeto jogador
let {nome, posicao} = jogador
console.log(nome, posicao)

// é possível dar um nome diferente dos atributos do objeto para as novas variáveis criadas
let {nome: nomeJogador, posicao: posicaoJogador} = jogador

// caso os atributos não existam no objeto, as variáveis criadas vão ter valor undefined
let {sobreNome, gols} = jogador

// acessando atributos filhos de filhos
let {fisico: {altura, peso}} = jogador




/*calculaImc vai utilizar um destructuring para capturar 
atributos especificos de um objeto que vá ser passado como parâmetro*/
function calculaImc({altura, peso}){
    return (peso / altura**2)
} 

pessoa = {
    nome: 'eduardo',
    altura: 1.70,
    peso: 80
}

console.log(calculaImc(pessoa))

