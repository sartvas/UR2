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


// const a = prompt('Выберите число "А":',"");
// const c = prompt('Выберите действие:', "");
// const b = prompt('Выберите число "Б":',"");
// const butMin = "-",
//       butMul = "*",
//       butDiv = "/",
//       butPlus = "+";

// function minusa() {
//     return (a - b);
// }
// function multip() {
//     return (a * b);
// }
// function devis() {
//     return (a / b);
// }
// function calculate() {
//     return (a + b);
// }

// if (c == butMin) {
//     alert(`Результат ${a} - ${b} = ` + minusa());
// } else if (c == butMul) {
//     alert(`Результат ${a} * ${b} = ` + multip());
// } else if (c == butDiv) {
//     alert(`Результат ${a} / ${b} = ` + devis());
// } else if (c == butPlus) {
//     alert(`Результат ${a} + ${b} = ` + calculate());
// } else {
//     alert('error');
// }

// const der = "rererer";
// console.log(der.length);
// const str = "test";
// const arr = [1, 2, 3];
// console.log(arr[0]);
// console.log(str.toUpperCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(1,4));

// const logg1 = "Hello world";
// console.log(logg1.substring(0,4));

// const logg3 = "Hello world";
// console.log(logg3.substr(0,4));

// const num = 14.2;
// console.log(Math.round(num));

// const num = "14.2px";
// console.log(parseInt(num));
// console.log(parseFloat(num));

//Раздел 2. Урок 20

// const options = {
//   name: 'test',
//   wight: 1024,
//   hiegh: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log("Test");
//   }
// };

// console.log(Object.keys(options).length);      

// console.log(options.colors.border);
// console.log(options["colors"]["border"]);
// //delete options.name;
// // console.log(options);

// for (let key in options) {
//     console.log(`Свойства ${key} содержит значение ${options[key]}`);
// }

// Раздел 2. Урок 21

// const arr = [23, 34, 67, 78, 99, 126, 345, 347];
// arr.forEach(function(value, i, arr) {
//     console.log(`У индекса ${i} значение: ${value}`);
// });
// //arr.pop();
// //arr.push(10);\
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// // for (let value of arr) {
// //   console.log(value);
// // }

// console.log(arr);

// Раздел 2. Урок 22

// const obj = {
//   a: 5,
//   b: 1,
//   c: 4
// };

// const copy = obj;

// // copy.a = 10;

// function coping(den) {
//   const objZ = {};
//   for (let key in den) {
//     objZ[key] = den[key];
//   }
//   return objZ;
// }

// const obj2 = coping(obj);

// obj2.b = 10;

// console.log(obj);
// console.log(obj2);

// const obj1 = {
//   a: 3,
//   b: 5,
//   c: 10
// };

// const obj2 = {
//   e: 34,
//   r: 22,
//   z: 21
// };

// console.log(Object.assign(obj1, obj2));

// const obj3 = Object.assign({}, obj2);
// obj3.z = 555;
// console.log(obj2);
// console.log(obj3);
// const obj4 = {...obj3.z};
// console.log(obj4);

// const arr1 = ["a", "b", "c", "dd", "ff"];
// const arr2 = arr1.slice();
// arr2.push('sss');
// console.log(arr2);
// const arr3 = [...arr1, ...arr2, "777", "999"];
// console.log(arr3);

// Раздел 2. Урок 26

console.log(typeof(String(null)));

const din = "?";
console.log("https://vk.com/catalog" + din);

console.log(typeof(+'5'));

const answer = +prompt();

// 0, "", null, undefinded, NaN
