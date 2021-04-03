//_ antes do nome do atributo = convenção para dizer que o membro não deve ser acessado diretamente pelo obj
const pessoa = {
    nome: 'Gilberto',
    _idade: 22, //convencionado para ser um membro privado, mas não é visto como privado pelo js
    
    get idade(){return this._idade+" anos"}, //palavra reservada get
    
    set idade(idade) { //palavra reservada set
        if(idade >= 0) {
            this._idade = idade
        }
    }
}

console.log(pessoa.idade) //acessando membro encapsulado a partir do get
pessoa.idade = 25 //modificando membro encapsulado a partir do set
console.log(pessoa.idade) 
