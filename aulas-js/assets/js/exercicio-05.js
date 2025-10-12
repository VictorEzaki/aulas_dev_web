const container5 = document.getElementById("form-container");
const totalPessoas5 = 10;

for (let i = 1; i <= totalPessoas5; i++) {
    const div = document.createElement("div");
    div.classList.add("pessoa");
    div.innerHTML = `
        <strong>Pessoa ${i}:</strong>
        <label>Idade:</label>
        <input type="number" min="0" id="idade${i}-05" required>
        <label>Peso:</label>
        <input type="number" min="0" id="peso${i}-05" required>
        <label>Sexo:</label>
        <select id="sexo${i}-05">
          <option value="m">Masculino</option>
          <option value="f">Feminino</option>
        </select>
      `;
    container5.appendChild(div);
}

const btn5 = document.getElementById("calcular-05");
const resultado5 = document.getElementById("resultado-05");

btn5.addEventListener("click", () => {
    let totalHomens = 0;
    let totalMulheres = 0;
    let somaIdadeHomens = 0;
    let somaPesoMulheres = 0;

    for (let i = 1; i <= totalPessoas5; i++) {
        const idade = Number(document.getElementById(`idade${i}-05`).value);
        const peso = Number(document.getElementById(`peso${i}-05`).value);
        const sexo = document.getElementById(`sexo${i}-05`).value;

        if (sexo === "m") {
            totalHomens++;
            somaIdadeHomens += idade;
        } else if (sexo === "f") {
            totalMulheres++;
            somaPesoMulheres += peso;
        }
    }

    const mediaIdadeHomens = totalHomens > 0 ? (somaIdadeHomens / totalHomens).toFixed(2) : 0;
    const mediaPesoMulheres = totalMulheres > 0 ? (somaPesoMulheres / totalMulheres).toFixed(2) : 0;

    resultado5.innerHTML = `
        <p><strong>Total de Homens:</strong> ${totalHomens}</p>
        <p><strong>Total de Mulheres:</strong> ${totalMulheres}</p>
        <p><strong>Média das Idades dos Homens:</strong> ${mediaIdadeHomens}</p>
        <p><strong>Média dos Pesos das Mulheres:</strong> ${mediaPesoMulheres}</p>
      `;
});