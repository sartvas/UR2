"use strict";
const numbersOfFilms = prompt("How many fims you see?:", "");

const personalMovieBD = {
    count:numbersOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('What is your last film`s see?', ''),
          b = prompt('How you rate this films?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieBD.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}   

if (personalMovieBD.count < 10) {
    console.log('You saw little bit films...');
} else if (personalMovieBD.count > 10 && personalMovieBD.count < 30) {
    console.log('You are good viewer!');
} else if (personalMovieBD.count > 30) {
    console.log('You are good viewer!');
} else {
    console.log('Error');
}


console.log(personalMovieBD);