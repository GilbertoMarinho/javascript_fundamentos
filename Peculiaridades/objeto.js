//forma literal de escrever um objeto
const prod1 = {}
prod1.nome = 'pelé'
prod1.preco =   4000
prod1['Desconto legal'] = 40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'carro',
    preco: 20000,
    pecas: { //objetos podem estar dentro de outros objetos
        motor: 'hyundai',
        pneus: 'gol' 
    }
}
console.log(prod2)