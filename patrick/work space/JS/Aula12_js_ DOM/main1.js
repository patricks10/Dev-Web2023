// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML =
    'Mudei o texto aqui');

// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// Função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

// Método querySelectorAll
let listaLi = document.querySelectorAll('li');

for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}
console.log(listaLi);

// Busca por id
let myLi = document.querySelectorAll('.my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

let campinho = document.querySelector("#campo");

let guardavalor = campinho.value;

console.log()