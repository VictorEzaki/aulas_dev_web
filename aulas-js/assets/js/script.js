const btn = document.querySelector("#calcular");
const camposAltura = document.querySelectorAll(".alturas");
const camposSexo = document.getElementsByName("sexo");

let pessoa = {}


btn.addEventListener('click', () => {
    campos.forEach(campo => {
        alturas.push(campo.value);
    })
});