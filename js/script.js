"use strict";
const numbersOfFilms = prompt("How many fims you see?:", "");

const personalMovieBD = {
    count:numbersOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false,
};

const a = prompt('What is your last film`s see?', ''),
      b = prompt('How you rate this films?', ''),
      c = prompt('What is your last film`s see?', ''),
      d = prompt('How you rate this films?', '');

personalMovieBD.movies[a] = b;
personalMovieBD.movies[c] = d;

console.log(personalMovieBD);