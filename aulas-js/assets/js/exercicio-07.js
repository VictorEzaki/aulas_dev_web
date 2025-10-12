document.getElementById("mostrarData").addEventListener("click", () => {
    const dataInput = document.getElementById("data").value.trim();
    const resultado7 = document.getElementById("resultado-07");

    if (!dataInput.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        resultado7.innerHTML = "<p style='color:red;'>Digite uma data válida no formato dd/mm/aaaa.</p>";
        return;
    }

    const partes = dataInput.split("/"); 
    const dia = partes[0];
    const mesNumero = parseInt(partes[1], 10);
    const ano = partes[2];

    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    if (mesNumero < 1 || mesNumero > 12) {
        resultado7.innerHTML = "<p style='color:red;'>Mês inválido.</p>";
        return;
    }

    const mesExtenso = meses[mesNumero - 1];

    resultado7.innerHTML = `<p>${dia} de ${mesExtenso} de ${ano}</p>`;
});