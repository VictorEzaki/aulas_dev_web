document.getElementById("calcular-04").addEventListener("click", () => {
    const n1 = Number(document.getElementById("num1-04").value);
    const n2 = Number(document.getElementById("num2-04").value);
    const resultado4 = document.getElementById("resultado-04");

    resultado4.innerHTML = "";

    if (isNaN(n1) || isNaN(n2)) {
        resultado4.innerHTML = "<p style='color:red;'>Por favor, insira dois números válidos.</p>";
        return;
    }

    const soma = n1 + n2;
    const produto = Number(n1) * Number(n2);
    const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) : "Divisão por zero!";
    const resto = n2 !== 0 ? n1 % n2 : "Indefinido";

    const tabela = document.createElement("table");

    const cabecalho = `
    <tr>
      <th>Operação</th>
      <th>Resultado</th>
    </tr>
  `;

    const linhas = `
    <tr><td>Soma</td><td>${soma}</td></tr>
    <tr><td>Produto</td><td>${produto}</td></tr>
    <tr><td>Divisão</td><td>${divisao}</td></tr>
    <tr><td>Resto da divisão</td><td>${resto}</td></tr>
  `;

    tabela.innerHTML = cabecalho + linhas;
    resultado4.appendChild(tabela);
});