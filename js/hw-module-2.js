
// // Задача 9
// function getExtremeElements(array) {
//      const array2 = [array.shift(),array.pop()];

//      return array2;
// }

// console.log(getExtremeElements([1,2,4,5,6]))



// // Задача 10
// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки
    
//     words = message.split(delimeter);
    
//     // Пиши код выше этой строки
//     return words;
//   }

//   console.log(splitMessage('Salary Junior full stack developper w/o experience starts from 800$', ' '));



// // Задача 11
// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки
   
//     const words = message.split(' ');
//     console.log(words);
//     console.log(words.length);

//     const totalPrice = words.length * pricePerWord;
//     console.log('Total Price: ', totalPrice);

//     return totalPrice;

//     // Пиши код выше этой строки
// }

// calculateEngravingPrice('Salary Junior full stack developper w/o experience starts from 800$', 20);



// // Задача 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
 
//  string = array.join(delimeter);
 
//   // Пиши код выше этой строки
//   return string;
// }



// // Задача 13
// function slugify(title) {
//   // Пиши код ниже этой строки
 
//     const slug = title.toLowerCase().split(' ').join('-');
//     console.log(slug);

//     return slug;
 
//   // Пиши код выше этой строки
// }

// slugify('Salary Junior full stack developper w/o experience starts from 800$');



// // Задача 14
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);



// // Задача 15
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку



// // Задача 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//     const newArray = firstArray.concat(secondArray);
//     console.log(newArray);
    
//     if (newArray.length > maxLength) {

//         return newArray.slice(0, maxLength);        
//     }
 
//     return newArray;
      
//     // Пиши код выше этой строки
// }

// console.log('NewArray:', makeArray([1, 3, 5], [2, 4, 6, 8, 10], 6));



// // Задача 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Дополни эту строку
//   console.log(i);
// }



// // Задача 18
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//     let total = 0;
//     for (let i = 1; i <= number; i += 1) {
//         console.log(i);
//         total += i;
//     }

//     return total;
//   // Пиши код выше этой строки
// }
// console.log('Total:', calculateTotal(7));



// // Задача 19
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i+=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }



// // Задача 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i += 1) {
//         const item = order[i];
//         console.log(item);
//         total += item;
//     }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log('Total Price:', calculateTotalPrice([12, 85, 37, 4]));



// // Задача 21
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//     const wordsOfString = string.split(' ');
//     console.log(wordsOfString);
//     let longestWord = wordsOfString[0]

//     for (const word of wordsOfString) {
//         console.log(word);
       
//         if (word.length > longestWord.length) {
//             longestWord = word;  
//         }

//     }
//     console.log('The longest word is:',longestWord);
//     return longestWord;
    
//   // Пиши код выше этой строки
// }

// findLongestWord('Google do a roll')



// // Задача 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }       
//   // Пиши код выше этой строки
//     console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 5);



// // Задача 23
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//     const filter = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         console.log(numbers[i]);

//         if (numbers[i] > value) {
//             filter.push(numbers[i]);
//         }        
//     }

//     console.log(filter);
//     return filter;
//   // Пиши код выше этой строки
// }

// filterArray([12, 24, 8, 41, 76], 38)



// // Задача 24
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit)?true:false; // Дополни эту строку
// }

// console.log(checkFruit('слива'));



// // Задача 25
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//     const array3 = [];
//     for (const element of array1) {
//         if (array2.includes(element)) {
//             array3.push(element);
//         }
//     }
//     console.log(array3);
//     return array3;
//   // Пиши код выше этой строки
// }

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);



// // Задача 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
  
//   for(const element of order) {
//     total += element;
//   }

//   // Пиши код выше этой строки
//   return total;
// }



// // Задача 27
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for(const number of numbers) {

//         if (number > value) {
//         filteredNumbers.push(number);
//         }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }



// // Задача 28
// const a = 3 % 1; //0
// const b = 4 % 3; //1
// const c = 11 % 4; //3
// const d = 12 % 7; //5
// const e = 8 % 3; //2



// // Задача 29
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }

//     console.log(evenNumbers);
//     return evenNumbers;    
//     // Пиши код выше этой строки
// }
// getEvenNumbers(6, 12)



// // Задача 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }



// // Задача 31
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }
//   // Пиши код выше этой строки
// }



// // Задача 32
// function includes(array, value) {
//   // Пиши код ниже этой строки
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }
       
//     }
//  return false;
  
//   // Пиши код выше этой строки
// }