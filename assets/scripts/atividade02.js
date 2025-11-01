document.getElementById('button').addEventListener('click', () => {
    verPromocao();
});

function verPromocao() {
    const veiculo = document.getElementById('veiculo').value;
    const precoTotal = Number(document.getElementById('preco').value);

    const labelVeiculo = document.getElementById('label-veiculo');
    labelVeiculo.innerText = `Promoção: ${veiculo}`;

    const labelEntrada = document.getElementById('label-entrada');
    labelEntrada.innerText = `Entrada de R$: ${(precoTotal / 2).toFixed(2)}`;

    const labelParcelas = document.getElementById('label-parcelas');
    labelParcelas.innerText = `12x de R$: ${((precoTotal / 2) / 12).toFixed(2)}`;
}