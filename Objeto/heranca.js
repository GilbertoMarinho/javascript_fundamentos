// __proto__ = atributo interno de um objetoX que armazena a referência do objeto protótipo(pai) desse objetoX
const avo = {atb1: 'atbAvo'}

const pai = {__proto__:avo, atb2: 'atbPai'} //avo definido como protótipo do objeto pai

const filho = {__proto__:pai, atb3: 'atbFilho'} //pai definido como protótipo do objeto filho

//acessando um atributo através de uma cadeia de protótipos
// filho -> pai -> avo
console.log(filho.atb1) //atbAvo


const carro = {
    material: 'aço',
    peso: 1000,
    velMaxima: 200,
    status(){
        return `velocidade máxima = ${this.velMaxima}km/h; peso = ${this.peso}kg; material = ${this.material}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 360, //shadowing
    status(){
        return `Modelo ${this.modelo}: ${super.status()}` //super = referencia para o objeto pai
    }
}

// criando relação entre carro e ferrari; carro = prototipo de ferrari
Object.setPrototypeOf(ferrari, carro)
console.log(ferrari.status())



//Criando relaçao de herança com Object.create()
const mustang = Object.create(carro, {modelo:{value: 'GT-500', writable:false}}) //carro = pai; mustang = filho
mustang.ano = 1990

//Object.Keys devolve somente as chaves pertencentes ao objeto, atributos obtidos por herança são desconsiderados
console.log(Object.keys(mustang)) //[ 'modelo', 'ano' ]

//Dentro do for todos os atributos do objetos são considerados, inclusice os recebidos por herança
for(let chave in mustang){
    mustang.hasOwnProperty(chave) ? console.log(`Próprio: ${chave}`) : console.log(`Por Herança: ${chave}`) 
}
/*
Próprio: modelo
Próprio: ano
Por Herança: material
Por Herança: peso
Por Herança: velMaxima
Por Herança: status
*/