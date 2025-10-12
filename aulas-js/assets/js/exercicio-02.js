const container2 = document.getElementById("inputs-container-02");
const totalPessoas2 = 15;

for (let i = 1; i <= totalPessoas2; i++) {
    const span = document.createElement("span");
    span.innerHTML = `
      <label>Pessoa ${i} - Idade:</label>
      <input type="number" min="1" class="idade" id="idade${i}-02" required>
      <label>Opinião:</label>
      <select id="opiniao${i}-02">
        <option value="3">Ótimo</option>
        <option value="2">Bom</option>
        <option value="1">Regular</option>
      </select>
    `;
    container2.appendChild(span);
}

const form = document.getElementById("form-pesquisa");
const resultado2 = document.getElementById("resultado-02");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let idadesOtimo = [];
    let totalRegular = 0;
    let totalBom = 0;

    for (let i = 1; i <= totalPessoas2; i++) {
        const idade = Number(document.getElementById(`idade${i}-02`).value);
        const opiniao = Number(document.getElementById(`opiniao${i}-02`).value);

        if (opiniao === 3) {
            idadesOtimo.push(idade);
        } else if (opiniao === 2) {
            totalBom++;
        } else if (opiniao === 1) {
            totalRegular++;
        }
    }

    const mediaOtimo =
        idadesOtimo.length > 0
            ? (idadesOtimo.reduce((a, b) => a + b, 0) / idadesOtimo.length).toFixed(2)
            : 0;

    const porcentagemBom = ((totalBom / totalPessoas2) * 100).toFixed(2);

    resultado2.innerHTML = `
      <p><strong>Média das idades (Ótimo):</strong> ${mediaOtimo}</p>
      <p><strong>Quantidade de respostas "Regular":</strong> ${totalRegular}</p>
      <p><strong>Porcentagem de respostas "Bom":</strong> ${porcentagemBom}%</p>
    `;
});