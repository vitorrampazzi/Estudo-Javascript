const texto = document.querySelector('h1')
const img = document.querySelector('img')
const div = document.querySelector('#container')

texto.textContent = 'Manipulção de DOM'
texto.setAttribute('font-size', '20px')

img.setAttribute('src', './images/pexels-jeshoots-com-147458-442587 (1).jpg')
img.setAttribute('width', '300px')
img.setAttribute('alt', 'drone')
div.innerHTML = '<p>novo paragrafo <b>html</b></p>'

const caixa = document.getElementById("caixa");
const botao = document.getElementById("meuBotao");

botao.addEventListener("click", () => {
  caixa.classList.toggle("oculta");
});
botao.textContent = 'Botão'