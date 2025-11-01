document.getElementById('button').addEventListener('click', () => {
    const nomeProduto = document.getElementById('nome-produto').value;
    const precoProduto = Number(document.getElementById('preco-produto').value);
    const valorTotal = document.getElementById('valor-total');
    const valorProduto = document.getElementById('valor-produto-desconto');
    const [totalComDesconto, produtoComDesconto] = calcularDesconto(precoProduto);

    valorTotal.innerText = `${nomeProduto} - Promoção: leve 3 por R$ ${totalComDesconto}`;
    valorProduto.innerText = `O 3º produto saiu por R$ ${produtoComDesconto}`;
});

function calcularDesconto(precoProduto) {
    const produtoDesconto = precoProduto / 2;
    const valorTotal = precoProduto * 2 + produtoDesconto;

    return [valorTotal.toFixed(2), produtoDesconto.toFixed(2)];
}