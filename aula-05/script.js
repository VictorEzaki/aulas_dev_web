//Selecina o paragrafo pelo id
let paragrafo = document.getElementById('meuParagrafo');
 
//adicionar o ouvidor de eventos para quando o mouse passar por cima do paragrafo
paragrafo.addEventListener('mouseover', () => {
    paragrafo.classList.add('hover');
});
 
//Adicionar o ouvidor de eventos para quando o mouse sair do paragrafo
paragrafo.addEventListener('mouseout', function(){
    paragrafo.classList.remove('hover');
});