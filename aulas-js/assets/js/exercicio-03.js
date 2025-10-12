const inputs3 = document.getElementById("inputs-03");
const btn3 = document.getElementById("calcular-03");
const resultado3 = document.getElementById("resultado-03");

for (let i = 1; i <= 10; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.id = `num${i}`;
    input.placeholder = i;
    inputs3.appendChild(input);
}

function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

btn3.addEventListener("click", () => {
    let somaPares = 0;
    let somaPrimos = 0;

    for (let i = 1; i <= 10; i++) {
        const valor = parseInt(document.getElementById(`num${i}`).value);

        if (!isNaN(valor)) {
            if (valor % 2 === 0) somaPares += valor;
            if (ehPrimo(valor)) somaPrimos += valor;
        }
    }

    resultado3.innerHTML = `
            <p><strong>Soma dos números pares:</strong> ${somaPares}</p>
            <p><strong>Soma dos números primos:</strong> ${somaPrimos}</p>
          `;
});    