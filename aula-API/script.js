form.addEventListener('submit', e => {
    e.preventDefault();

    const q = document.getElementById('q').value;
    buscar(q.trim());
});

async function buscar(termo) {
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(termo)}`;
    const res = await fetch(url);
    const dados = await res.json();

    console.log(dados);
    renderizar(dados);
}

function renderizar(resultados) {
    list.innerHTML = "";
    for (const item of resultados) {
        const show = item.show;
        const img = show.image?.medium || 'sem imagem no arquivo';
        const resumo = show.summary || 'sem sinopse';

        list.innerHTML += `
            <div class="card">
                <img src="${img}" alt="${show.name}"> 
                <div class="info">
                    <strong>${show.name}</strong>
                    ${resumo}
                </div>
            </div>
        `;
    }
}