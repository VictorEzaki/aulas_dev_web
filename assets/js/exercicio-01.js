const btn1 = document.querySelector("#calcular-01");

for (let i = 1; i <= 15; i++) {
    const span = document.createElement('span');
    span.classList = "pessoa-01";
    span.innerHTML = `
    <label>Altura pessoa ${i}:</label>
    <input type="number" min="0" id="altura${i}-01" class="alturas" required>
    <label>Masculino:</label>
    <input type="radio" name="genero${i}" id="genero${i}-01" value="m" required>
    <label>Feminino:</label>
    <input type="radio" name="genero${i}" id="genero${i}-01" value="f" required>
    <br>
    `;
    
    document.getElementById('inputs-container-01').appendChild(span);
}

btn1.addEventListener('click', () => {
    let alturas = [];
    let generos = [];
    
    const camposAltura = document.querySelectorAll(".alturas");
    camposAltura.forEach(campo => {
        alturas.push(Number(campo.value));
    });

    for (let i = 1; i <= 15; i++) {
        let generoSelecionado = document.querySelector(`input[name="genero${i}"]:checked`);

        if (generoSelecionado) {
            generos.push(generoSelecionado.value);
        } else {
            generos.push(null);
        }
    }
    
    document.getElementById('resultado-01').innerHTML = `
        <label>Maior altura: ${maiorAltura(alturas)}</label><br>
        <label>Menor altura: ${menorAltura(alturas)}</label><br>
        <label>Média da altura entre as mulhres: ${mediaAlturaMulheres(alturas, generos)}</label><br>
        <label>Quantidade de homens: ${qtdeHomens(generos)}</label><br>
    `;
});

function maiorAltura(alturas) {
    let maiorAltura = 0;

    for (let i = 0; i < alturas.length; i++) {
        if (alturas[i] > maiorAltura) {
            maiorAltura = alturas[i];
        }
    }

    return maiorAltura;
}

function menorAltura(alturas) {
    let menorAltura = 10;

    for (let i = 0; i < alturas.length; i++) {
        if (alturas[i] < menorAltura) {
            menorAltura = alturas[i];
        }
    }

    return menorAltura;
}

function qtdeHomens(generos) {
    let qtdeHomens = 0;

    for (let i = 0; i < generos.length; i++) {
        if (generos[i] == "m") {
            qtdeHomens++;
        }
    }

    return qtdeHomens;
}

function mediaAlturaMulheres(alturas, generos) {
    let mediaAlturaMulheres = 0;
    let qtdeMulheres = 0;

    for (let i = 0; i < 15; i++) {
        if (generos[i] == "f") {
            mediaAlturaMulheres += alturas[i];
            qtdeMulheres++;
        }
    }

    return (mediaAlturaMulheres / qtdeMulheres).toFixed(2);
}