function criarProduto(nome, preco){
    return{
        nome: nome,
        preco: preco,
        desconto: 0.1 //atributo com valor fixo
    }
}

prod1 = criarProduto("arroz", 20)
prod2 = criarProduto("feijao", 8)

console.log(prod1,prod2)