//coleção dinâmica(não fixo) de pares chave/valor

// notação literal
const obj1 = {nome:'objeto  1'}

// a partir da função predefinida Object como construtor
const obj2 = new Object
console.log(typeof Object)//function
console.log(typeof new Object)//object

// função construtora
function Paralelepipedo( altura, largura, comprimento){
    this.altura = altura
    this.largura = largura
    this.comprimento = comprimento

    this.calcularArea = function(){
        return this.altura * this.largura * this.comprimento
    }
}
const par1 = new Paralelepipedo(20,10,15)


// função Factory
function criarAluno(nome, curso, semestre){
    return {
        nome: nome,
        curso, // js atribui o valor do atributo como sendo o parametro passado pela função de mesmo nome do atributo
        semestre  
    }
}

aluno1 = criarAluno('Gilberto', 'Ciências da computação', 6)

// Object.create
const carro = Object.create(null)
carro.montadora = 'volkswagen'


// Função que retrona um objeto a partir de um json string
const jsonObj = JSON.parse(' {"pessoa":{ "nome": "Gilberto", "sexo": "M"}} ')
console.log(jsonObj)







