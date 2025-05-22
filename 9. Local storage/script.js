// let visitas = parseInt(localStorage.getItem('visitas') || 0)
// visitas++
// localStorage.setItem('visitas', visitas)
// document.body.innerHTML += `Visitas: ${visitas}`;

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
