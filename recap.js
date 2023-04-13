'use strict';
// console.log('Hello world');
//Variable
// let age = 20;
// let fullName = 'Coder by Amzad';
// let herName = 'TikTok Queen Ayesha';
// console.log(age, fullName, herName);
// //Variable naming convention
// let carBrand = 'Porche';
// let bikeBrand = 'Kawasaki';
// let ram_price = 4500;
// let API_TOKEN = 'haskdkjfkienicelkdfnkjdjlkedk';
// let $pirmary_os = 'Windows';
// let PI = 3.1416;
// let JUMP_SPEED = 3.2;

// variable naming restriction

// let 10cars = 10;
// let me& you = 'love'
// let function = 10;
// let false = 20;
// lt player - number = 11;
// let Classroom = 'A3';
// let age1 = 22;
// let age2 = 23;

// Data type: primitive and non-primitive(object)

//Primitive data types are

//1.number
//2.string
//3.boolean
//4.null
//5.undefined
//6.symbol
//7.bigInt

// let myNumber = 100;
// let songName = 'Oniket prantor';
// let isRaining = false;
// let pocketMoney = null;
// let carPrice;

//Type of operator

// console.log(typeof myNumber);
// console.log(typeof songName);
// console.log(typeof isRaining);
// console.log(typeof pocketMoney);
// console.log(typeof carPrice);

// let

// let testNumber = 10; // declaring a variable using let keyword.
// testNumber = 100; //reassign or mutate.
// console.log(testNumber);

// const

// const carSpeed;// not allowed
// const carSpeed = 60 // not allowed

// var

// var onionPrice = 40;
// onionPrice = 30;
// console.log(onionPrice);
// //no keyword // can not create a scope
// likes = 150;
// console.log(likes); // can only run if "use strict" mode is OFF.

// let and const - blocked scope
// var = function scope

// Arithmatic Operators (+,-,*,/,%,**)
// console.log(10 + 20);
// console.log(10 - 20);
// console.log(10 * 20);
// console.log(10 / 20);
// console.log(10 % 20);
// console.log(10 ** 20);

// Assignment Operators

// let x = 10;
// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x **= 5;
// x++;
// x--;
// console.log(x)

// Comparison Operators( > , < , >= ,<= )

// console.log(10 > 20);
// console.log(10 < 20);
// console.log(10 >= 20);
// console.log(10 <= 20);

// Operator Precedence

// const birthYer = 1990;
// console.log(20 > 2022 - 2005);
// console.log(20 > 2022 - 1990 * (20 - 10));

// Template literals

// console.log(`${herName} is fashion designer and her age is ${age + 5}`);

// Conditionals

// const mangoPrice = 100;
// const applePrice = 100;
// if (mangoPrice >= 100) {
//   console.log('Mango khabo');
// }
// if (applePrice >= 100) {
//   console.log('Apple khabo');
// } else {
//   console.log('Kisui khabo na');
// }

// Type conversion and Type coercion

// let a = '30';
// const b = 300;
// console.log(typeof Number(a));
// console.log(typeof String(b));

// // coercion
// console.log(10 + 30 + '10');
// console.log(10 + 30 - '10');
// console.log(10 + 30 * '10');
// console.log(10 + 30 / '10');
// console.log('Ahmed' + ' ' + 'Saif');

// Falsy values are ->   0 , "" , undefined , null , NaN

// Equality Operators ( ==, !=, ===, !== )

// console.log(10 == '10');
// console.log(10 === '10');

// Combined Boolean ( &&, || )

// const m = 20;
// const n = 20;
// if (m >= 10 && n >= 10) {
//   if (m >= 20) {
//     console.log(`m is greater than 20`);
//     if (n >= 20 || n % 2 == 0) {
//       console.log(`n is greater than 20`);
//     } else {
//       console.log(`n is not greater than 20`);
//     }
//   } else {
//     console.log(`m is not greater than 20`);
//   }
// }

// Switch case

// const color = 'blue';
// switch (color) {
//   case 'white':
//     console.log('Shada jama');
//     break;
//   case 'black':
//     console.log('Kalo jama');
//     break;
//   case 'blue':
//     console.log('Nil jama');
//     break;
//   default:
//     console.log('Kono jama nai');
// }

// Expressions and Statement

// Ternary operator

// const num1 = 100;
// const num2 = 200;

// const whoIsBig =
//   num1 > num2 ? console.log('num1 is big') : console.log('num2 is big');
