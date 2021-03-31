//toda função js armazena internamente uma informação do escopo lexico em que ela foi definida

let escopo = 'Global'

function imprimir(){
    console.log(escopo)
}

function exec(){
    let escopo = 'Local'
    imprimir()
}

exec()//Global
//função imprimir vai dar prioridade para o escopo global, pois foi lá que ela foi definida

function exec2(){
    let escopo = 'Local'
    function imprimir2(){
        console.log(escopo)
    }
    imprimir2()
}

exec2()//local
//função imprimir2 vai dar prioridade para o escopo da função exec2, pois foi lá que ela foi definida
