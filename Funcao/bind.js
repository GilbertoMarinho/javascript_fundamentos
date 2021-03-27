pessoa = {
    frase: "Sou uma pessoa",
    falar(){ //forma direta de adicionar metodos a objetos
        
        /*this é necessario para que se entenda que estamos tentando
        acessar um atributo do objeto que chamar esse meétodo*/
        console.log(this.frase)
    }
}

// pessoa chama falar, logo, o this dentro de falar será uma referência para o objeto pessoa
pessoa.falar() //Sou uma pessoa


//copiamos a função falar de pessoa para uma variável
let funFalarAvulsa = pessoa.falar

/*funFalar executado sem estar atrelado a um objeto
faz com que o seu this interno seja uma referência para um objeto global*/
funFalarAvulsa() 
//retorna undefinded pois no contexto da execucação de funFalarAvulsa
//a expressão "this.frase"(dentro de funFalar) é igual a "objGlobal.frase" e objGlobal não tem um atributo frase!!!

//bind atrela uma função a um objeto definitivamente
let funFalarBindPessoa = pessoa.falar.bind(pessoa) //devolve uma função estruturalmente igual a falar 
//mas com o seu this interno definiticamente referenciado ao objeto pessoa


funFalarBindPessoa()// sou uma pessoa







