"use strict";

const numberOfFilms = +prompt("Солько фильмов вы уже посмотрели?", "1");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = +prompt("На сколько оцените его?", "");

  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
