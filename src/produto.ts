interface Produto {
    id: number
    nome : string
    preco: number
    emEstoque?: boolean
}

function exibirProduto(produto: Produto): void {
    console.log(`
        || O Produto: ${produto.nome} ||
        || Com o ID: ${produto.id} ||
        || Tem o Preço: ${produto.preco} ||
        || Está em Estoque: ${produto.emEstoque} ||
        `)
}

exibirProduto({nome:"Café", id:423, preco: 14.89, emEstoque: true })