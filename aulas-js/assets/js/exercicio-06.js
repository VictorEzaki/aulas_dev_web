document.getElementById("calcular-06").addEventListener("click", () => {
    const salarioInput = parseFloat(document.getElementById("salario").value);
    const resultado6 = document.getElementById("resultado-06");

    if (isNaN(salarioInput) || salarioInput <= 0) {
        resultado6.innerHTML = "<p style='color:red;'>Digite um salário válido.</p>";
        return;
    }

    let percentual = 0;

    if (salarioInput <= 280) {
        percentual = 20;
    } else if (salarioInput <= 700) {
        percentual = 15;
    } else if (salarioInput <= 1500) {
        percentual = 10;
    } else {
        percentual = 5;
    }

    const aumento = salarioInput * (percentual / 100);
    const salarioFinal = salarioInput + aumento;

    resultado6.innerHTML = `
                <p>Salário antes do reajuste: R$ ${salarioInput.toFixed(2)}</p>
                <p>Percentual de aumento aplicado: ${percentual}%</p>
                <p>Valor do aumento: R$ ${aumento.toFixed(2)}</p>
                <p>Salário após o aumento: R$ ${salarioFinal.toFixed(2)}</p>
            `;
});