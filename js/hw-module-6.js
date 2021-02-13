'use strict'

// // Задача 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
 
//     orderedItems.forEach(element => {
//         console.log(element)
//         totalPrice += element;
//     });

//   return totalPrice;
// }
// console.log('Total Price', calculateTotalPrice([12, 85, 37, 4]));



// // Задача 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(element => {
//         if (element > value) {
//             filteredNumbers.push(element);
//         }
//     });
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));



// // Задача 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
   
//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));



// // Задача 4
// const calculateTotalPrice = (quantity, pricePerItem) => {

//   return quantity * pricePerItem;
// }



// // Задача 5
// const calculateTotalPrice = (quantity, pricePerItem) =>
//     quantity * pricePerItem;



// // Задача 6
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }



// // Задача 7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) =>{
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
// }



// // Задача 8
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     return commonElements;
// }



// // Задача 9
// function changeEven(numbers, value) {

//     const newArray = [];
//     numbers.forEach((number) => {
//         console.log(number)
       
//         if (number % 2 === 0) {
           
//             newArray.push(number += value);
//         } else {
//             newArray.push(number);
//         }
//     });
//     return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));



// // Задача 10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsLengths = planets.map((planet) => planet.length);



// // Задача 11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map((book) => book.title);



// // Задача 12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap((book) => book.genres);



// // Задача 13
// const getUserNames = users => {
//   const listOfNames = [];
//     users.map((user) => {
//       listOfNames.push(user.name);
//     });
//     return listOfNames;
//   };



// // Задача 14
// const getUserEmails = users => {
//      const listOfEmails = [];
//      users.map((user) => {
//      listOfEmails.push(user.email);
//      });
//      return listOfEmails;   
// };



// // Задача 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);


// // Задача 16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);



// // // Задача 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);



// // Задача 18
// const getUsersWithEyeColor = (users, color) => {
//  const filteredUserEyeColor = [];
//     users.filter((user) => {
//         if (user.eyeColor === color) {
//             filteredUserEyeColor.push(user);
//         }
//     });
//     return filteredUserEyeColor;
// };



// // Задача 19
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const filteredUsersWhithAge = [];
  
//   users.filter((user) => {
//       if(user.age > minAge && user.age < maxAge) {
//       filteredUsersWhithAge.push(user);
//       };  
//   });
//  return filteredUsersWhithAge;

// };



// // Задача 20
// const getUsersWithFriend = (users, friendName) => {
//   const filteredByFriendsName = [];
//   users.filter((user) => {
//     if(user.friends.includes(friendName)) {
//       filteredByFriendsName.push(user);
//     }
//   });
//   return filteredByFriendsName;      
// };



// // Задача 21
// const getFriends = (users) => {
  
// const allFriends = users.flatMap(user => user.friends);
  
// const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
  
// return uniqueFriends;   
// };



// // Задача 22
// const getActiveUsers = (users) => {
//   const onlyActiveUsers = [];
//   users.filter((user) => {
//     if(user.isActive) {
//     onlyActiveUsers.push(user);
//     };
    
//   });
//   return onlyActiveUsers;
// };



// // Задача 23
// const getInactiveUsers = (users) => {
  
//     const nonActiveUsers = [];

//     users.filter((user) => {
//         if(!user.isActive) {
//             nonActiveUsers.push(user);
//         };        
//     });

//     return nonActiveUsers;   
// };



// // Задача 24
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);



// // Задача 25
// const getUserWithEmail = (users, email) => {
//    const getUser = users.find(user => user.email ===email);
//   return getUser;
// };



// // Задача 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((number)=>number%2===0);
// const eachElementInFirstIsOdd = firstArray.every((number)=>number%2!==0);

// const eachElementInSecondIsEven = secondArray.every((number)=>number%2===0);
// const eachElementInSecondIsOdd = secondArray.every((number)=>number%2!==0);

// const eachElementInThirdIsEven = thirdArray.every((number)=>number%2===0);
// const eachElementInThirdIsOdd = thirdArray.every((number)=>number%2!==0);



// // Задача 27
// const isEveryUserActive = (users) => {
//    const isActiveUsers = users.every((user) => user.isActive);
//   return isActiveUsers
// };



// // Задача 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((number)=>number%2===0);
// const anyElementInFirstIsOdd = firstArray.some((number)=>number%2!==0);

// const anyElementInSecondIsEven = secondArray.some((number)=>number%2===0);
// const anyElementInSecondIsOdd = secondArray.some((number)=>number%2!==0);

// const anyElementInThirdIsEven = thirdArray.some((number)=>number%2===0);
// const anyElementInThirdIsOdd = thirdArray.some((number)=>number%2!==0);



// // Задача 29
// const isAnyUserActive = users => {
//   const isActiveUsers = users.some((user) => user.isActive);
//     return isActiveUsers;   
// };



// // Задача 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, number) => acc+number,0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;



// // Задача 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, player) =>
//     acc + player.playtime / player.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame)



// // // Задача 32
// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
//   return totalBalance;   
// };



// // Задача 33
// const getTotalFriendCount = users => {
//     const allFriends = users.flatMap(user => user.friends);
//     console.log(allFriends)

//     const totalFriends = allFriends.reduce((acc, nameOfFriend) => acc += 1,0);

//   return totalFriends;    
// };

// // коротший варіант:
// const getTotalFriendCount = users => { 
//     return users.reduce((total, user) => total + user.friends.length, 0); 
// };



// // Задача 34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();



// // Задача 35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);



// // Задача 36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));



// // Задача 37
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
  
//   const sortedByReversedAuthorName = [...books].sort((a, b) =>
//    b.author.localeCompare(a.author));
  
//   const sortedByAscendingRating = [...books].sort(
//     (a, b) => a.rating - b.rating);
  
//   const sortedByDescentingRating = [...books].sort(
//     (a, b) => b.rating - a.rating);



// // Задача 38
// const sortByAscendingBalance = users => 
// [...users].sort((a, b) => a.balance - b.balance);



// // Задача 39
// const sortByDescendingFriendCount = users =>
// [...users].sort((a, b) => b.friends.length - a.friends.length);



// // Задача 40
// const sortByName = users => 
// [...users].sort((a, b) => a.name.localeCompare(b.name));



// // Задача 41
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
//   ];
//   const MIN_BOOK_RATING = 8;
//   
//     const names = books
//     .filter(book => book.rating > MIN_BOOK_RATING)
//     .map(book => book.author)
//     .sort((a, b) => a.localeCompare(b));
//   console.log(names)



// // Задача 42
// const getNamesSortedByFriendCount = users => [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);


// const getFriends = (users) => {
  
// const allFriends = users.flatMap(user => user.friends);
  
// const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
  
// return uniqueFriends;   
// };


// // Задача 43
// const getSortedFriends = users => users
// .flatMap(user => user.friends)
// .filter((friend, index, array) => array.indexOf(friend) === index)
// .sort((a, b) => a.localeCompare(b));



// // Задача 44
// const getTotalBalanceByGender = (users, gender) => users
// .filter(user => user.gender === gender)
// .reduce((acc, user) => acc + user.balance, 0);


// console.log(getTotalBalanceByGender([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       gender: 'male'
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       gender: 'female'
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       gender: 'male'
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       gender: 'female'
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//       isActive: true,
//       balance: 3951,
//       gender: 'male'
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//       isActive: false,
//       balance: 1498,
//       gender: 'male'
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       gender: 'female'
//     }
//   ], 'male'))
