const objetoTeste = {
    atr1: 1, 
    atr2: 2,
    atr3: 3
    }

//Object.prentExtensions() = impede adição de novos atributos em um objeto
Object.preventExtensions(objetoTeste)
objetoTeste.atr4 = 4 //Não pode
objetoTeste.atr1 = "novo 1"
delete objetoTeste.atr3
console.log(objetoTeste)//{ atr1: 'novo 1', atr2: 2 }
console.log(Object.isExtensible(objetoTeste)) //false


//Object.seal() = impede adição E exclusão de atributos em um objeto
Object.seal(objetoTeste)
delete objetoTeste.atr1//Não pode
console.log(objetoTeste)//{ atr1: 'novo 1', atr2: 2 }
console.log(Object.isSealed(objetoTeste)) //true


//Object.freeze() = impede adição, exclusão e alteração de atributos em um objeto
Object.freeze(objetoTeste)
objetoTeste.atr1 = 'novo novo 1' //Não pode
console.log(objetoTeste)
console.log(Object.isFrozen(objetoTeste)) //true