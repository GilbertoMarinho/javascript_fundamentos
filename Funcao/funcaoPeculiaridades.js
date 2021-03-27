//função forma literal
function funcaoliteral(){

}

//função em variável
const fun1 = function(){
    console.log("Hello world")
}


//armazenar função em um atributo de um objeto
const obj = {}
obj.escrever = function(texto){console.log(texto)}
obj.escrever("ola")

//funcão como parâmetro de outra função
function fun2(funcao){
    funcao()
}
fun2(fun1)







