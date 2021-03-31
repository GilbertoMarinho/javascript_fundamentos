function Conta(limiteSaque = 1000){
    //criando atributo privado
    let saldo = 0
    
    //criando método publico com this
    this.sacar = function(valor){
        if(valor < limiteSaque && valor < saldo){
            saldo -= valor
        }
    }

    this.depositar = function(valor){
        saldo += valor
    }

    this.mostrarSaldo = () => saldo  

}

//this da função construtora fará referencia ao objeto criado com new
let conta1 = new Conta
conta1.depositar(2000)
console.log(conta1.saldo) //undefined, tentando acessar um atributo privado
console.log(conta1.mostrarSaldo())

let conta2 = new Conta(200)//chamando função construtora com parâmetros
conta2.depositar(400)
conta2.sacar(50)
console.log(conta2.mostrarSaldo())//350