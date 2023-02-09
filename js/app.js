// pegar os dados do HTML

let soma = document.getElementById("soma");
let subtracaoA = document.getElementById("subtracaoA");
let subtracaoB = document.getElementById("subtracaoB");
let multiplicacao = document.getElementById("multiplicacao");
let divisaoA = document.getElementById("divisaoA");
let divisaoB = document.getElementById("divisaoB");
let potenciaA = document.getElementById("potenciaA");
let potenciaB = document.getElementById("potenciaB");
let raizA = document.getElementById("raizA");
let raizB = document.getElementById("raizB");
let fatorialA = document.getElementById("fatorialA");
let fatorialB = document.getElementById("fatorialB");
let porcentagemA = document.getElementById("porcentagemA");
let porcentagemB = document.getElementById("porcentagemB");
let media = document.getElementById("media");

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoA.innerHTML = 0;
divisaoB.innerHTML = 0;
potenciaA.innerHTML = 0;
potenciaB.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
media.innerHTML = 0;

// fazer os cálculos

function calculoSoma(a, b) {
  return a + b;
}

function calculoSubtracaoA(a, b) {
  return a - b;
}

function calculoSubtracaoB(b, a) {
  return b - a;
}

// criar uma função ao clicar no botão calcular

const calcular = () => {
  let inputA = document.getElementById("primeiroNumero").value;
  let inputB = document.getElementById("segundoNumero").value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calculoSoma(a, b);
  subtracaoA.innerHTML = calculoSubtracaoA(a, b);
  subtracaoB.innerHTML = calculoSubtracaoB(b, a);
};
