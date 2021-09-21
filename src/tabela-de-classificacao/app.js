let players = [];
let starPlatinum = { name: "Star Platinum", victories: 2, draws: 1, defeats: 1, points: 0 };
let angryV = { name: "Angry V", victories: 1, draws: 1, defeats: 2, points: 0 };
let silverChariot = { name: "Silver Chariot", victories: 5, draws: 2, defeats: 3, points: 0 };

function addPlayer(player) {
  players.push(player);
}

function calcPoints(player) {
  player.points = player.victories * 3 + player.draws;
}

function showPlayersOnScreen(allPlayers) {
  let elementTable = "";
  let playerIndex = 0;

  allPlayers.map((playerObj) => {
    calcPoints(playerObj);
    console.table(playerObj);

    elementTable += `
      <tr>
        <td>${playerObj.name}</td>
        <td>${playerObj.victories}</td>
        <td>${playerObj.draws}</td>
        <td>${playerObj.defeats}</td>
        <td>${playerObj.points}</td>
        <td><button onClick="addVictory(${playerIndex})">Victory</button></td>
        <td><button onClick="addDraw(${playerIndex})">Draw</button></td>
        <td><button onClick="addDefeat(${playerIndex})">Defeat</button></td>
      </tr>`;

    console.log(elementTable);
    playerIndex += 1;
  });

  document.getElementById("tabelaJogadores").innerHTML = elementTable;
}

function addVictory(i) {
  players[i].victories += 1;
  showPlayersOnScreen(players);
}

function addDraw(i) {
  players[i].draws += 1;
  showPlayersOnScreen(players);
}

function addDefeat(i) {
  players[i].defeats += 1;
  showPlayersOnScreen(players);
}

addPlayer(starPlatinum);
addPlayer(angryV);
addPlayer(silverChariot);

showPlayersOnScreen(players);
