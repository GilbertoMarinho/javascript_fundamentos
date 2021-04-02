//criando objeto de forma literal
const carro = {
    modelo: 'kwid',
    valor: 45000.00,
    proprietario: { //objeto dentro de outro objeto
        nome: 'Gilberto',
        idade: 22
    },
    condutores:[
        {nome: 'André', idade:30},
        {nome: 'Lucas', idade:42},
    ], //array como atributo de um objeto

    calcularValorSeguro: function(){ //métodos em objetos

    }
}

console.log(carro.proprietario.nome) //acessando pelo path
console.log(carro['proprietario']['nome']) //acessando pelo path com strings
console.log(carro.condutores[0].nome) //acessando atributos dados dentro de um array
console.log(carro.calcularValorSeguro()) //executando métodos
delete carro.modelo //deletenado um atributo