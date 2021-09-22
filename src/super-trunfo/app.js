let cards = [];
let card1 = {
  name: "Sora",
  attributes: {
    attack: 7,
    defense: 8,
    magic: 7,
  },
};
let card2 = {
  name: "Riku",
  attributes: {
    attack: 8,
    defense: 9,
    magic: 6,
  },
};
let card3 = {
  name: "Mickey",
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

  showOptions(playerCard);
}

function showOptions(playerCard) {
  let optionsElem = document.getElementById("opcoes");
  let textOptions = "";

  for (let attribute in playerCard.attributes) {
    textOptions += `<input type="radio" id="${attribute}" name="attribute" value="${attribute}"><label for="${attribute}">${attribute}</label><br>`;
  }

  optionsElem.innerHTML = textOptions;
}

function jogar() {
  let radioAttrs = getSelectedAttr();
  let resultElement = document.getElementById("resultado");
  let playerCardValue = playerCard.attributes[radioAttrs];
  let botCardValue = botCard.attributes[radioAttrs];

  if (playerCardValue > botCardValue) {
    resultElement.innerHTML = `<h2>Você venceu!<br>${playerCard.name} usou ${radioAttrs}(${playerCardValue}) e superou ${radioAttrs}(${botCardValue}) contra ${botCard.name}</h2>`;
  } else if (botCardValue > playerCardValue) {
    resultElement.innerHTML = `<h2>Você perdeu!<br>${playerCard.name} usou ${radioAttrs}(${playerCardValue}) e foi superado por ${radioAttrs}(${botCardValue}) contra ${botCard.name}</h2>`;
  } else {
    resultElement.innerHTML = `<h2>Você empatou!<br>${playerCard.name} usou ${radioAttrs}(${playerCardValue}) que foi igual a ${radioAttrs}(${botCardValue}) contra ${botCard.name}</h2>`;
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
