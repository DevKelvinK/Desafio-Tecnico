// Exercício 1

const resEx1 = document.querySelector("#resEx1");

var INDICE = 13;
var SOMA = 0;
var K = 0;

while (K < INDICE) {
  K += 1;
  SOMA += K;
}

resEx1.innerHTML = SOMA;

// Exercício 2

const inputNum = document.querySelector("#inputEx2");
const submitNum = document.querySelector("#formEx2");
const resEx2 = document.querySelector("#resEx2");

submitNum.addEventListener("submit", (e) => {
  e.preventDefault();

  num = parseFloat(inputNum.value);

  let nA = 0;
  let nB = 1;
  let nC = 0;

  const arraySequenciaF = [0, 1];

  for (let c = 1; c <= 50; c++) {
    nC = nA + nB;

    arraySequenciaF.push(nC);

    nA = nB;
    nB = nC;
  }

  let pertence = arraySequenciaF.includes(num);

  if (pertence == true) {
    resEx2.innerHTML = "Esse número <strong>pertence</strong> a sequência de Fibonacci.";
  } else {
    resEx2.innerHTML = "Esse número <strong>não pertence</strong> a sequência de Fibonacci.";
  }
});

// Exercício 3

fetch("faturamentoMes.json")
  .then((resp) => resp.json())
  .then((data) => {
    let arrFaturamento = data.faturamento_diario;

    let menorValor = arrFaturamento[0].valor;
    let maiorValor = arrFaturamento[0].valor;
    let soma = 0;
    let mediaValores = 0;
    let diasFaturados = 0;
    let faturamentoAcimaMedia = 0;

    arrFaturamento.map((obj) => {
      let faturamento = obj.valor;

      // Menor valor de faturamento
      if (faturamento < menorValor && faturamento != 0) {
        menorValor = faturamento;
      }

      // Maior valor de faturamento
      if (faturamento > maiorValor) {
        maiorValor = faturamento;
      }

      // Quantidade de dias faturados
      if (faturamento > 0) {
        diasFaturados += 1;
      }

      // Média dos valores de faturamento
      mediaValores = (soma += faturamento) / diasFaturados;

      // Quantidade de dias com faturamento acima da média
      if (faturamento > mediaValores) {
        faturamentoAcimaMedia += 1;
      }
    });

    document.querySelector("#resEx3Menor").innerHTML = `R$ ${menorValor.toFixed(2)}`;

    document.querySelector("#resEx3Maior").innerHTML = `R$ ${maiorValor.toFixed(2)}`;

    document.querySelector("#resEx3Media").innerHTML = faturamentoAcimaMedia;
  });

// Exercício 4

const faturamendoCadaEstado = [
  { estado: "SP", faturamento: 67836.43 },
  { estado: "RJ", faturamento: 36678.66 },
  { estado: "MG", faturamento: 29229.88 },
  { estado: "ES", faturamento: 27165.48 },
  { estado: "Outros", faturamento: 19849.53 },
];

let totalFaturamento = 0;
let percentual = 0;
let estado = "";

// Valor total dos faturamentos
faturamendoCadaEstado.map((estados) => {
  faturamento = estados.faturamento;

  totalFaturamento += faturamento;
});

document.querySelector("#resTotal").innerHTML = totalFaturamento;

// Percentual de representação de cada estado
faturamendoCadaEstado.map((estados) => {
  faturamento = estados.faturamento;
  estado = estados.estado;

  percentual = (faturamento * 100) / totalFaturamento;

  document.querySelector("#resTabela").innerHTML += `<tr><th scope="row">${estado}</th><td>R$${faturamento}</td><td>${percentual.toFixed(2)}%</td></tr>`;
});

// Exercício 5

const inputTxt = document.querySelector("#inputEx5");
const submitEx5 = document.querySelector("#formEx5");
const resEx5 = document.querySelector("#resEx5");

submitEx5.addEventListener("submit", (e) => {
  e.preventDefault();

  let txt = inputTxt.value;
  let palavraVirada = "";

  for (var i = txt.length - 1; i >= 0; i--) {
    palavraVirada += txt[i];
  }

  resEx5.innerHTML = `A palavra invertida fica: <strong>${palavraVirada}</strong>`;
});
