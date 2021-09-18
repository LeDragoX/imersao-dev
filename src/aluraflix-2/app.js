function adicionarFilme() {
  let favFilm = document.getElementById("filme").value;

  if (
    favFilm.endsWith(".jpg") ||
    favFilm.endsWith(".jpeg") ||
    favFilm.endsWith(".png") ||
    favFilm.endsWith(".webp") ||
    favFilm.endsWith(".svg") ||
    favFilm.endsWith(".gif")
  ) {
    listFilmsOnScreen(favFilm);
  } else {
    console.error("Link de imagem inválido!");
  }

  document.getElementById("filme").value = "";
}

function listFilmsOnScreen(favFilm) {
  let favFilmElement;
  let filmsList = document.getElementById("listaFilmes");

  favFilmElement = `<img src="${favFilm}" height="100%"></img>`;
  filmsList.innerHTML += `${favFilmElement}`;
}
