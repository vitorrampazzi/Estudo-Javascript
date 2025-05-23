// localStorage.setItem('nome', 'joao')
// const nome = localStorage.getItem('nome')
// localStorage.removeItem('nome')
// localStorage.clear()

// const usuario = {
//     nome: 'daniel',
//     idade: 18,
//     tema: 'escuro'
// }
// localStorage.setItem('usuario', JSON.stringify(usuario))
// const recuperado = JSON.parse(localStorage.getItem('usuario'))
// console.log(recuperado.tema)

// Array para tarefas
// let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Função para renderizar lista
// const renderizarTarefas = () => {
//   const lista = document.getElementById("lista-tarefas");
//   lista.innerHTML = "";
//   tarefas.forEach((t, i) => {
//     const li = document.createElement("li");
//     li.textContent = t;
//     lista.appendChild(li);
//   });
// }

// renderizarTarefas();

// document.getElementById("form-tarefa").onsubmit = function (e) {
//   e.preventDefault();
//   const input = document.getElementById("input-tarefa");
//   tarefas.push(input.value.trim());
//   localStorage.setItem("tarefas", JSON.stringify(tarefas));
//   input.value = "";
//   renderizarTarefas();
// };

// document.getElementById("btn-limpar").onclick = function () {
//   tarefas = [];
//   localStorage.removeItem("tarefas");
//   renderizarTarefas();
// };

//exercicio 1
// salvarProduto.onsubmit = (e) => {
//     e.preventDefault();
//     const li = document.createElement('li')
//     li.textContent = tarefa.value
//     const btn = document.createElement('button')
//     btn.textContent = 'Excluir'
//     btn.onclick = () =>
//         li.remove()
//         li.appendChild(btn);
//         lista.appendChild(li);
//         tarefa.value = "";

// }

//------------------------------------------------------

// exercicio 2
// let visitas = parseInt(localStorage.getItem('visitas') || 0)
// visitas++
// localStorage.setItem('visitas', visitas)
// document.body.innerHTML += `Visitas: ${visitas}`;

//--------------------------------------------------------

//exercicio 3
// if (localStorage.getItem("tema") === "escuro") {
//   document.body.classList.add("escuro");
// }

// document.getElementById("tema").onclick = () => {
//   document.body.classList.toggle("escuro");
//   const temaAtual = document.body.classList.contains("escuro") ? "escuro" : "claro";
//   localStorage.setItem("tema", temaAtual);
// };

//-----------------------------------------------------------

//exercicio 4
// const campo = document.getElementById("nome");
// campo.value = sessionStorage.getItem("nome") || "";
// campo.oninput = () => {
//   sessionStorage.setItem("nome", campo.value);
// };

//----------------------------------------------------------------

//exercicio 5
// const idioma = document.getElementById("idioma");
// idioma.value = localStorage.getItem("idioma") || "pt";
// idioma.onchange = () => {
//   localStorage.setItem("idioma", idioma.value);
// };

//exercicio 6
// const salvarNome = () => {
//     const nome = document.getElementById('nome').value
//     localStorage.setItem('nomeUsuario', nome)
//     mostrarBoasVindas()
// }
// const mostrarBoasVindas = () => {
//     const nomeSalvo = localStorage.getItem('nomeUsuario')
//     if(nomeSalvo){
//         document.getElementById('boasVindas').textContent = `Boas vindas ${nomeSalvo}`
//     }
// }
// mostrarBoasVindas()

// const adicionarTarefa = () => {
//     const tarefa = document.getElementById('tarefa').value
//     if(!tarefa) return;
//     const tarefas = localStorage.getItem('tarefas') || []
//     tarefas.push(tarefa)
//     localStorage.setItem('tarefas', JSON.stringify(tarefas))
//     exibirTarefas()
// }

//   function exibirTarefas() {
//     const lista = document.getElementById('listaTarefas');
//     lista.innerHTML = '';
//     const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
//     tarefas.forEach((tarefa, index) => {
//       lista.innerHTML += `<li>${tarefa} <button onclick="removerTarefa(${index})">X</button></li>`;
//     });
//   }

// Exericicio 8
// const mudarTema = () =>{
//     const dado = localStorage.getItem('tema')
//     if(dado === 'escuro'){
//         localStorage.setItem('tema', 'claro')
//     }else{
//         localStorage.setItem('tema', 'escuro')
//     }
// }