"use strict";

//let number = 5;
//const leftBorderWidth = 1;

//number = 11;
//console.log(number);

// const obj = {
//    name: "Valera",
//    surname: 'Pirtgtt',
//    age: 18,
//    isMarried: false
//};/

//console.log(obj.name);

//let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// alert('hello!');

//const result = confirm("Are you foggot?");
//console.log(result);

//const answer = prompt("Are yoy 18 years old?:","");
//console.log(answer);

//const answers = [];

//answers[0] = prompt("What is your name?:", "");
//answers[1] = prompt("What is your surname?:", "");
//answers[3] = prompt("Hoe old are you?:", "");

//document.write(answers);

//let names = prompt("Write your name, please!:","");
//console.log(`Hi there, ${names}`);

//const tsifr = 55;
//(tsifr == 55) ? console.log ("Ok") : console.log("Error");

//const redFlag = 99;
//switch (redFlag) {
  //  case 55:
  //      console.log('Error');
  //      break;
   // case 56:
   //     console.log('Not 55');
   //     break;
   // case 99: 
    //    console.log('Yes!');
   //     break;
//}

const a = +prompt('');
const c = +prompt('');
const b = +prompt('');
const butMin = "-",
      butMul = "*",
      butDiv = "/",
      butPlus = "+";

function minusa() {
    return (a - b);
}
function multip() {
    return (a * b);
}
function devis() {
    return (a / b);
}
function calculate() {
    return (a + b);
}

if (c == butMin) {
    alert(minusa());
}