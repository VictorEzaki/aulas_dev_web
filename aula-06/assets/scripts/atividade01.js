document.getElementById('button').addEventListener('click', () => {
    const nomeFilme = document.getElementById('nome-filme').value;
    const tempoFilme = Number(document.getElementById('tempo-filme').value);

    const labelFilme = document.getElementById('label-filme');
    labelFilme.innerText = nomeFilme;

    const labelTempo = document.getElementById('label-tempo');
    labelTempo.innerText = converterEmhoras(tempoFilme);
});

function converterEmhoras(num) {
    const horas = Math.floor(num / 60);
    const minutos = num % 60;

    return `${horas} hora(s) e ${minutos} minutos(s).`;
}