// pegar os dados do HTML

let soma = document.getElementById("soma");
let subtracaoA = document.getElementById("subtracaoA");
let subtracaoB = document.getElementById("subtracaoB");

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;

// fazer os cálculos

function calculoSoma(a, b) {
  return a + b;
}

// criar uma função ao clicar no botão calcular

const calcular = () => {
  let inputA = document.getElementById("primeiroNumero").value;
  let inputB = document.getElementById("segundoNumero").value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calculoSoma(a, b);
  subtracaoA.innerHTML = calculoSubtracao(a, b);
  subtracaoB.innerHTML = calculoSubtracao(b, a);
};
