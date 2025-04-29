const numeros = [2, 4, 6];

const soma = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual;
}, 0);

console.log(soma);