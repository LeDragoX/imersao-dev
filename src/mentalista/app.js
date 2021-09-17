let secretNumber = parseInt(Math.random() * 11);
let attempts = 0;
let limit = 3;
let reset = false;

function Chutar() {
  let chosenNumber = parseInt(document.getElementById("valor").value);
  console.log(`Você: ${chosenNumber} Número: [FILTERED]`);

  result = `Você chutou ${chosenNumber}. `;

  if (chosenNumber > 10 || chosenNumber < 0) {
    result = `Você deve digitar um número de 0 a 10!!!`;
  } else if (chosenNumber === secretNumber) {
    result += `Parabéns, Você acertou! Próxima rodada! `;
    reset = true;
  } else if (secretNumber > chosenNumber) {
    attempts += 1;
    result += `(${attempts}/${limit}) O número é maior que ${chosenNumber}... `;
  } else {
    attempts += 1;
    result += `(${attempts}/${limit}) O número é menor que ${chosenNumber}... `;
  }

  if (attempts === limit || reset) {
    if (!reset) {
      result = `(${attempts}/${limit}) Fim de jogo, o número era ${secretNumber}`;
    }
    attempts = 0;
    reset = false;
    document.getElementById("valor").value = "";
    secretNumber = parseInt(Math.random() * 11);
  }

  document.getElementById("resultado").innerHTML = result;
}
