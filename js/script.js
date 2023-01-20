let img = window.document.getElementById("imagem");
let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q0 = {
  numQuestao: 0,
  pergunta: "Pergunta",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  alternativaD: "Alternativa D",
  correta: "0",
};

const q1 = {
  numQuestao: 1,
  pergunta:
    "O disco “S&M” foi gravado em conjunto com uma orquestra no ano de 1999. Qual é a orquestra?",
  alternativaA: "Orquestra Sinfônica de Boston",
  alternativaB: "San Francisco Symphony Orchestra",
  alternativaC: "Sociedade Händel e Haydn",
  alternativaD: "Orquestra do Hollywood Bowl",
  correta: "San Francisco Symphony Orchestra",
};

const q2 = {
  numQuestao: 2,
  pergunta:
    "Qual álbum marcou a estreia do baixista Jason Newsted em estúdio com a banda?",
  alternativaA: "...And Justice for All",
  alternativaB: "Nenhum dos citados",
  alternativaC: "Load",
  alternativaD: "Reload",
  correta: "Reload",
};

const q3 = {
  numQuestao: 3,
  pergunta:
    "A faixa ‘I Disappear’ foi composta exclusivamente para trilha sonora de qual filme?",
  alternativaA: "Exterminador do futuro",
  alternativaB: "A bruxa de Blair",
  alternativaC: "Missão impossível 2",
  alternativaD: "Missão Impossível",
  correta: "Missão impossível 2",
};

const q4 = {
  numQuestao: 4,
  pergunta:
    "Com qual faixa o Metallica participou do tributo ao Iron Maiden em 2008?",
  alternativaA: "Killers",
  alternativaB: "Powerslave",
  alternativaC: "Revelations",
  alternativaD: "Remember Tomorrow",
  correta: "Remember Tomorrow",
};

const q5 = {
  numQuestao: 5,
  pergunta:
    "Qual cantor Metallica fez participação no single 'Wherever I May Roam'?",
  alternativaA: "J Balvin",
  alternativaB: "James N. Howard",
  alternativaC: "Ray Davies",
  alternativaD: "Luis Fonsi",
  correta: "J Balvin",
};

const q6 = {
  numQuestao: 6,
  pergunta: "Quando foi lançado o albúm 'Master Of Puppets (Remastered)'?",
  alternativaA: "07/03/1985",
  alternativaB: "03/03/1986",
  alternativaC: "05/03/1986",
  alternativaD: "08/03/1985",
  correta: "03/03/1986",
};

const q7 = {
  numQuestao: 7,
  pergunta: "Qual é a 6° música do albúm 'Master Of Puppets'?",
  alternativaA: "Disposable Heroes",
  alternativaB: "Orion",
  alternativaC: "Leper Messiah",
  alternativaD: "Welcome Home (Sanitarium)",
  correta: "Leper Messiah",
};

const q8 = {
  numQuestao: 8,
  pergunta:
    "Complete a frase da música 'Motorbreath': 'Sending the _____ up and down my spine'.",
  alternativaA: "Shudder",
  alternativaB: "Shiver",
  alternativaC: "Chill",
  alternativaD: "Shivers ",
  correta: "Shivers ",
};

const q9 = {
  numQuestao: 9,
  pergunta: "Qual a 9° música do albúm 'Kill'Em All'?",
  alternativaA: "No Remorse",
  alternativaB: "Seek & Destroy",
  alternativaC: "Metal Militia",
  alternativaD: "Phantom Lord",
  correta: "Seek & Destro",
};

const q10 = {
  numQuestao: 10,
  pergunta: "Quando foi lançado o albúm 'Kill'em All'?",
  alternativaA: "24/07/1983",
  alternativaB: "25/07/1984",
  alternativaC: "20/07/1983",
  alternativaD: "24/07/1984",
  correta: "24/07/1983",
};

const q11 = {
  numQuestao: 11,
  pergunta:
    "Complete a frase da música 'Escape': 'I'll fight until the _____'.",
  alternativaA: "Aim",
  alternativaB: "Goal",
  alternativaC: "End",
  alternativaD: "Purpose",
  correta: "End",
};

const q12 = {
  numQuestao: 12,
  pergunta: "Quando foi lançado o albúm 'Ride The Lightning (Remastered)'?",
  alternativaA: "26/07/1984",
  alternativaB: "23/07/1983",
  alternativaC: "20/07/1984",
  alternativaD: "25/07/1983",
  correta: "26/07/1984",
};

const q13 = {
  numQuestao: 13,
  pergunta:
    "Quantas músicas tem no albúm '...And Justice for All (Remastered)'?",
  alternativaA: "11",
  alternativaB: "8",
  alternativaC: "10",
  alternativaD: "9",
  correta: "9",
};

const q14 = {
  numQuestao: 14,
  pergunta:
    "Complete a frase da música 'The Shortest Straw': 'You're living catch two _____, _____'.",
  alternativaA: "two/deluding",
  alternativaB: "three/deceiving",
  alternativaC: "one/elude",
  alternativaD: "four/evade",
  correta: "two/deluding",
};

const q15 = {
  numQuestao: 15,
  pergunta:
    "Quando foi lançado o albúm '... And Justice for All (Remastered)'?",
  alternativaA: "21/08/1988",
  alternativaB: "23/08/1987",
  alternativaC: "25/08/1988 ",
  alternativaD: "20/08/1987",
  correta: "25/08/1988 ",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [
  q0,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao;
  numQuestao.textContent = questoes[nQuestao].numQuestao;
  pergunta.textContent = questoes[nQuestao].pergunta;
  a.textContent = questoes[nQuestao].alternativaA;
  b.textContent = questoes[nQuestao].alternativaB;
  c.textContent = questoes[nQuestao].alternativaC;
  d.textContent = questoes[nQuestao].alternativaD;
  a.setAttribute("value", nQuestao + "A");
  b.setAttribute("value", nQuestao + "B");
  c.setAttribute("value", nQuestao + "C");
  d.setAttribute("value", nQuestao + "D");
}

function bloquearAlternativas() {
  a.classList.add("bloqueado");
  b.classList.add("bloqueado");
  c.classList.add("bloqueado");
  d.classList.add("bloqueado");
}

function desbloquearAlternativas() {
  a.classList.remove("bloqueado");
  b.classList.remove("bloqueado");
  c.classList.remove("bloqueado");
  d.classList.remove("bloqueado");
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta;
  //console.log("RespC " + certa)

  if (respostaEscolhida == certa) {
    //console.log("Acertou")
    //respostaEsta.textContent = "Correta 😊"
    pontos += 10; // pontos = pontos + 10
  } else {
    //console.log("Errou!")
    //respostaEsta.textContent = "Errada 😢"
  }

  // atualizar placar
  placar = pontos;
  instrucoes.textContent = "Pontos " + placar;

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  setTimeout(function () {
    //respostaEsta.textContent = '...'
    proxima = numeroDaQuestao + 1;

    if (proxima > totalDeQuestoes) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 250);
  desbloquearAlternativas();
}

function fimDoJogo() {
  instrucoes.textContent = "Fim de Jogo!";
  numQuestao.textContent = "";

  let pont = "";
  pontos == 0 ? (pont = "ponto") : (pont = "pontos");

  pergunta.textContent = "Você conseguiu " + pontos + " " + pont;

  aviso.textContent = "Você conseguiu " + pontos + " " + pont;

  // img.src = 'fotomarvel.jpg'

  // a.textContent = ""
  // b.textContent = ""
  // c.textContent = ""
  // d.textContent = ""

  // a.setAttribute('value', '0')
  // b.setAttribute('value', '0')
  // c.setAttribute('value', '0')
  // d.setAttribute('value', '0')

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  setTimeout(function () {
    pontos = 0; // zerar placar
    location.reload();
  }, 2500);
}
