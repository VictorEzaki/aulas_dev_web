document.getElementById('change').addEventListener('click', () => {
    const titulo = document.getElementById('titulo');
    titulo.innerText = "Bem vindo ao meu site";

    const texto = document.getElementsByClassName('texto');
    texto[0].style.color = 'blue';
    texto[1].style.color = 'red';

    const textoQuery = document.querySelector('.texto');
    textoQuery.style.color = 'green';

    const todosParagrafos = document.querySelectorAll('p');
    console.log(`Existem ${todosParagrafos.length} parágrafos por toda a página`);

    const itemList = document.createElement('li');
    const valueUser = document.getElementById('input-list').value;
    const novaDiv = document.getElementById('novaDiv');

    if (valueUser) {
        itemList.innerText = valueUser;
        novaDiv.appendChild(itemList);
    } else {
        alert('Preencha o campo antes de enviar!');
    }

    const inputDinamico = document.getElementById('input-dinamico').value;
    const linkDinamico = document.getElementById('link-dinamico');
    linkDinamico.setAttribute('href', inputDinamico);
});