/* eslint-disable indent */
"use strict";

let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Солько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 4; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", "");

    if (a !== null && b != null && a !== "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

console.log(personalMovieDB);

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyBD(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyBD(personalMovieDB.privat);

function writeYourGenres() {
  let genres = [];
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    genres[i - 1] = genre;

    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
