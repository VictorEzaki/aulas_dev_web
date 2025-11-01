document.getElementById('button').addEventListener('click', () => {
    const nomeProduto = document.getElementById('nome-medicamento').value;
    const precoProduto = Number(document.getElementById('preco-medicamento').value);
    const nomePromocao = document.getElementById('nome-produto-desconto');
    const valorProduto = document.getElementById('valor-produto-desconto');

    nomePromocao.innerText = `Promoção de ${nomeProduto}`;
    valorProduto.innerText = `Leve 2 por R$ ${calcularDesconto(precoProduto)}`;
});

function calcularDesconto(precoProduto) {
    return Math.trunc(precoProduto * 2);
}