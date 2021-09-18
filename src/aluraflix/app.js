function Carregar() {
  let movies = [
    [
      "https://cdn.myanimelist.net/images/anime/1389/114200l.jpg?_gl=1*asvfpa*_ga*NDY4MTE4MjExLjE2MzAwOTQ5NDA.*_ga_26FEP9527K*MTYzMTk4MDg0Ny4xOS4xLjE2MzE5ODA4NzQuMzM.",
      "https://www.crunchyroll.com/pt-br/jojos-bizarre-adventure/episode-1-dio-the-invader-652081",
    ],
    [
      "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
      "https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba/episode-1-cruelty-782932",
    ],
    [
      "https://cdn.myanimelist.net/images/anime/1764/106659l.jpg",
      "https://www.crunchyroll.com/pt-br/kaguya-sama-love-is-war/episode-1-i-will-make-you-invite-me-to-a-movie-kaguya-wants-to-be-stopped-kaguya-wants-it-781498",
    ],
  ];
  let count = 1;

  movies.forEach((movie_details) => {
    movie_details.map((value, index, array) => {
      console.log([value, index, array]);
      document.getElementById(
        "movies-list"
      ).innerHTML += `<a href="${array[1]}" target="_blank"><img src="${value}" alt="" height="100%"></img></a>`;
      // document.getElementById("movies-list").innerHTML += `<p>(${count++}/${movies.length}) ${movie_details}</p>`;
    });
  });
}
