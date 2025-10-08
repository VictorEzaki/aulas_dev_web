const btn = document.querySelector("#calcular");
const camposAltura = document.querySelectorAll(".alturas");
const camposGenero = document.getElementsByName("genero");

const genero1 = document.querySelector('input[name="genero1"]:checked');

if (genero1) {
  console.log(genero1.value); // "f" ou "m"
} else {
  console.log("Nenhum gênero selecionado para Pessoa 1");
}


let alturas = []
let genero = {}


btn.addEventListener('click', () => {
    camposAltura.forEach(campo => {
        alturas.push(campo.value);
    })

    camposGenero.forEach(campo => {
        genero.push(campo.value);
    })

    let qtdeHomens = 0;

    for (let i = 0; i < genero.length; i++) {
        if (genero[i] == "m") {
            qtdeHomens++;
        }
    }

    console.log(qtdeHomens);
});