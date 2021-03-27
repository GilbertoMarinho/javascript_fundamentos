//destructuring com array
const lista = ['um','dois','tres', 'quatro','cinco']

/*cada nova variável receberá um dado do array 
de acordo com a sua posição na chamada do destructuring que seja equivalente ã posição do dado no array*/
const  [var1, var2] = lista
console.log(var1, var2)

//deixando algumas posiçoes vazias no destructuring para pegar dados de posições especificas no array
const  [ , ,var3, ,var5] = lista
console.log(var3,var5)

//caso estrapolar o tamanho do array, a nova variável tera um valor undefined
const  [ , , , , ,var6] = lista
console.log(var6)


