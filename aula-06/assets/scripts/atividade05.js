document.getElementById('button').addEventListener('click', () => {
    const precoUso = Number(document.getElementById('preco-uso').value);
    const tempoUso = Number(document.getElementById('tempo-uso').value);

    const valorTotal = document.getElementById('valor-total');
    valorTotal.innerText += calcularUsoCliente(precoUso, tempoUso);
});

function calcularUsoCliente(precoUso, tempoUso){
    return tempoUso * precoUso / 15;
}