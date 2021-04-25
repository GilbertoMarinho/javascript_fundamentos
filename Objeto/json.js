const obj = {a:1, b:2, soma(){return a+b}}

//obj to json
const strJson = JSON.stringify(obj)
console.log(strJson)//{"a":1,"b":2} FUNÇÕES NÃO SÃO INCLUIDAS NO JSON

//json to obj
const obj2 = JSON.parse(`{"a":1,"b":2}`)
console.log(obj2)//{ a: 1, b: 2 }