let cards = [];
let card1 = {
  name: "Sora",
  image: "https://i.pinimg.com/originals/a7/d9/0b/a7d90b850b58c3812d26cfb6b9f2be95.gif",
  attributes: {
    attack: 7,
    defense: 8,
    magic: 7,
  },
};
let card2 = {
  name: "Riku",
  image:
    "https://64.media.tumblr.com/b03249cfbfff2c32f95d0a11a7f9b418/4d0c90e0c64d238e-11/s250x400/59cc6cce5a31ec363ebe117d521da7923522036d.gifv",
  attributes: {
    attack: 8,
    defense: 9,
    magic: 6,
  },
};
let card3 = {
  name: "Mickey",
  image: "https://i.pinimg.com/originals/43/80/eb/4380eb40964ab3808827b6062c61ac52.gif",
  attributes: {
    attack: 6,
    defense: 8,
    magic: 10,
  },
};

let botCard;
let playerCard;

cards.push(card1, card2, card3);

function sortearCarta() {
  let randomNumBot = parseInt(Math.random() * cards.length);
  botCard = cards[randomNumBot];
  console.log(`Bot: ${randomNumBot}`);

  let randomNumPlayer = parseInt(Math.random() * cards.length);
  playerCard = cards[randomNumPlayer];
  while (botCard === playerCard) {
    randomNumPlayer = parseInt(Math.random() * cards.length);
    playerCard = cards[randomNumPlayer];
    console.log(`Player re-rolled!`);
  }
  console.log(`Player 1: ${randomNumPlayer}`);
  console.log(playerCard);

  let drawElement = (document.getElementById("btnSortear").disabled = true);
  let playElement = (document.getElementById("btnJogar").disabled = false);

  showPlayerCard();
}

function showPlayerCard() {
  let divPlayerCard = document.getElementById("carta-jogador");
  divPlayerCard.style.backgroundImage = `url(${playerCard.image})`;

  let frame = document.getElementById("img-carta-jogador");
  let name = `<p class="carta-subtitle">${playerCard.name}</p>`;
  let tagHTML = `<div id="opcoes-player" class="carta-status"></div>`;

  divPlayerCard.innerHTML += name + tagHTML;
  showOptions(playerCard);
}

function showOptions(selectedCard, isPlayer = true) {
  let optionsElem;
  let textOptions = "";

  if (isPlayer) {
    optionsElem = document.getElementById("opcoes-player");

    for (let attribute in selectedCard.attributes) {
      textOptions += `<input type="radio" id="${attribute}" name="attribute" value="${attribute}"><label for="${attribute}">${attribute} ${selectedCard.attributes[attribute]}</label><br>`;
    }
  } else {
    optionsElem = document.getElementById("opcoes-bot");

    for (let attribute in selectedCard.attributes) {
      textOptions += `<p>${attribute} ${selectedCard.attributes[attribute]}</p>`;
    }
  }

  optionsElem.innerHTML = textOptions;
}

function jogar() {
  let radioAttrs = getSelectedAttr();
  let resultElement = document.getElementById("resultado");
  let playerCardValue = playerCard.attributes[radioAttrs];
  let botCardValue = botCard.attributes[radioAttrs];
  showBotCard();

  if (playerCardValue > botCardValue) {
    resultElement.innerHTML = `<p class="resultado-final">Você venceu!<br>${playerCard.name} usou ${radioAttrs}(${playerCardValue}) e superou ${radioAttrs}(${botCardValue}) contra ${botCard.name}</p>`;
  } else if (botCardValue > playerCardValue) {
    resultElement.innerHTML = `<p class="resultado-final">Você perdeu!<br>${playerCard.name} usou ${radioAttrs}(${playerCardValue}) e foi superado por ${radioAttrs}(${botCardValue}) contra ${botCard.name}</p>`;
  } else {
    resultElement.innerHTML = `<p class="resultado-final">Você empatou!<br>${playerCard.name} usou ${radioAttrs}(${playerCardValue}) que foi igual a ${radioAttrs}(${botCardValue}) contra ${botCard.name}</p>`;
  }
}

function getSelectedAttr() {
  let radioAttrs = document.getElementsByName("attribute");

  for (var i = 0; i < radioAttrs.length; i++) {
    if (radioAttrs[i].checked == true) {
      return radioAttrs[i].value;
    }
  }
}

function showBotCard() {
  let divBotCard = document.getElementById("carta-maquina");
  divBotCard.style.backgroundImage = `url(${botCard.image})`;

  let frame = document.getElementById("img-carta-maquina");
  let name = `<p class="carta-subtitle">${botCard.name}</p>`;
  let tagHTML = `<div id="opcoes-bot" class="carta-status"></div>`;

  divBotCard.innerHTML += name + tagHTML;
  showOptions(botCard, (isPlayer = false));
}
