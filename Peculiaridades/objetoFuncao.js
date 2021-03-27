//Object por baixo dos panos é uma função
console.log(typeof(Object))
//Porém o instanciamento da função Object com "new" retorna um objeto do tipo Objeto
console.log(typeof(new Object))



//funcao construtora
function Carro(montadora){
    /* o this faz com que quando essa função for instanciada em um objeto, 
    montadora se torne um atributo do objeto instanciado */
    this.montadora = montadora
    /*mostrarMontadora se torna um método do objeto instanciando para essa função*/
    this.mostrarMontadora = function() {
        console.log(this.montadora)
    }
}

//instanciando a função Carro em um objeto
const carro1 = new Carro('gol')
const carro2 = new Carro('ferrari')

carro1.mostrarMontadora()
carro2.mostrarMontadora()



