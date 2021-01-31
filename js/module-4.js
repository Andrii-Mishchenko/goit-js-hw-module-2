'use strict'

// const printValue = function(value) {
//     console.log(value);
// };
  
// const prettyPrint = function(value) {
//     console.log('Logging value: ', value);
// };
  
// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
// };

// repeat(3, printValue);

// repeat(4, prettyPrint);


// function showThis() {
//     console.log('this in showThis: ', this);
//   }
  
//   // Вызываем в глобальном контексте
//   showThis();


// const greet = function(name){
//   console.log(`hello ${name}`);
// }

// const greetWithName = function(callback){
//   const name = 'Mango';

//   console.log('Это callback', callback);

//   callback(name);
// }

// greetWithName(greet);


// const makeDish = function(sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// }
// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'чай');
// makeDish('Poly', 'чай');
// makeDish('Poly', 'чай');


// // Не понятно!!!
// const makeSheff = function(name) {
 
//   return function(dish) {
//     console.log(`${name} готовит ${dish}`);
//   }
// }

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

// mango('котлеты')


// const fnA = function(a) {
//   return function fnB(b) {
//     return function fnC(c){
//       console.log(a,b,c);
//     };
//   };
// };

// const res = fnA(10)(null);

// res(10);
// console.dir(res);


// // Пример callBack функции

// const greet = function (name) {
//   console.log(`My name is ${name}`);
// };

// const createUser = function (userData, callBackFn) { 
//   const user = {
//     name: userData.name,
//     age: userData.age,
//   };

//   callBackFn(user.name);
// }

// const userData = {
//   name: 'John',
//   age:50,
// }

// createUser(userData, greet)



// const greet = function() {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel));


// // call, apply, bind
// const showTag = function (arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
//   console.log('this',this);
//   console.log('this.tag', this);
// }

// const mango = {
//   tag: 'Mango',
// }

// const poly = {
//   tag: 'Poly',
// }

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 5, 10, 15);

// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(poly, [5, 10, 15]);

// const showMangoTag = showTag.bind(mango);
// const showPolyTag = showTag.bind(poly);
// showMangoTag(1, 2, 3);
// showPolyTag(5, 10, 15);


// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function(elem, index, arr) {
	
// });

// console.log(result);