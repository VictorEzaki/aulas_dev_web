document.getElementById('button').addEventListener('click', () => {
    const precoKG = Number(document.getElementById('preco-kg').value);
    const consumo = Number(document.getElementById('consumo').value);

    const valorConsumo = calcularConsumo(precoKG, consumo);
    document.getElementById('valor-total').innerText += valorConsumo.toFixed(2);
})

function calcularConsumo(precoKG, consumo) {
    return (consumo * precoKG) / 1000;
}