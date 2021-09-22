let players = [];
let starPlatinum = { name: "Star Platinum", victories: 2, draws: 1, defeats: 1, points: 0 };
let angryV = { name: "Angry V", victories: 1, draws: 1, defeats: 2, points: 0 };
let silverChariot = { name: "Silver Chariot", victories: 5, draws: 2, defeats: 3, points: 0 };

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // iframeId parameter should match your Iframe's id attribute
  var player = new YT.Player("player", {
    width: 640,
    height: 360,
    videoId: "8vb25h_s_kg",
    events: {
      onReady: function (event) {
        event.target.setVolume(10);
        event.target.playVideo();
      },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.ENDED) {
          player.playVideo();
        }
      },
    },
  });

  // Hide video
  document.getElementById("player").style.display = "none";
}

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
