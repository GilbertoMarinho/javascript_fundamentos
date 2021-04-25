class Animal{
    //construtor
    constructor(nome, qtdPatas, alimentacao){
        this.nome = nome
        this.qtdPatas = qtdPatas
        this.alimentacao = alimentacao
    }

    //metodo
    respirar(){
        console.log('respirando...')
    }

    falar(){
        console.log('barulho')
    }
    
}

//criando relacao de hetança entres animal e leao com extends
class Leao extends Animal{
    constructor(nome){
        //utilizando o construtor da classe pai
        super(nome, 4, 'carnivoro')
    }

    //sobreescrevendo método da classe pai
    falar(){
        console.log(this.nome + ' Rugiu')
    }
}


leao1 = new Leao('LEO')
console.log(leao1) //Leao { nome: 'LEO', qtdPatas: 4, alimentacao: 'carnivoro' }
leao1.falar() //LEO Rugiu
leao1.respirar() //respirando...
