"use strict";

const numberOfFilms = +prompt("Солько фильмов вы уже посмотрели?", "1");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB);

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
