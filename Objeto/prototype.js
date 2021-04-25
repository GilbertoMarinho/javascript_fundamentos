function MeuObjeto(){}
console.log(MeuObjeto.prototype) //{}
//o atributo prototype de uma função construtora é um objeto que define o modelo dos objetos que serão criados com new

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()
// todos os objetos criados a partir de uma mesma função constutora apontam para o mesmo prototype a partir do atributo __proto__
console.log(obj1.__proto__  === obj2.__proto__ ) 

//prototipo de obj1 apontara para o prototype de sua função construtora
console.log(obj1.__proto__ === MeuObjeto.prototype) //true
console.log(obj1.__proto__ === Object.prototype) //false


//Alterando o prototype de uma função construtora
MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}
console.log(MeuObjeto.prototype)//{ nome: 'Anonimo', falar: [Function (anonymous)] }

obj1.falar()//Meu nome é Anonimo
obj2.nome = 'obj2'
obj2.falar()//Meu nome é James