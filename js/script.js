"use strict";
 
let numbersOfFilms = prompt("How many fims you see?:", "");

function start() {
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = prompt("How many fims you see?:", "");
    }
}

start();

const personalMovieBD = {
    count:numbersOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false,
};



showMyDB();

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonslLevel() {
    if (personalMovieBD.count < 10) {
        console.log('You saw little bit films...');
    } else if (personalMovieBD.count > 10 && personalMovieBD.count < 30) {
        console.log('You are good viewer!');
    } else if (personalMovieBD.count > 30) {
        console.log('You are good viewer!');
    } else {
        console.log('Error');
    }
}

detectPersonslLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieBD.genres[i - 1] = prompt(`What is your favorite generes #${i}`, '');
    } 
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieBD);
    }
}

showMyDB(personalMovieBD.privat);


