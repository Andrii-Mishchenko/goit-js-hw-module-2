'use strict'

// // Array.prototype.forEach()
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));



// // Array.prototype.map()
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); 


// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// console.table(tweets);

// const likes = tweets.map(tweet => tweet.likes);
// console.log(likes);


// // Вернем массив из двух свойств массива tweets
// const res = tweets.map(tweet => {
//   return {
//     id: tweet.id,
//     likes: tweet.likes,
//   }
// });
// console.log(res);

// // Теперь более короткая запись:
// const res = tweets.map(({id, likes}) => {
//   return {
//     id,
//     likes,
//   }
// });
// console.log(res);

// // И еще короче:
// const res = tweets.map(({id, likes}) => ({id, likes}));
// console.log(res);


// // Изменим значение одного свойства в массивах объекта (например likes):
// const changeLikes = tweets.map(tweet => {
//   console.log('tweet',tweet);

//   return {
//     ...tweet,
//     likes: tweet.likes * 2,
//   }
// })
// console.log('changeLikes log',changeLikes);
// console.table(changeLikes)


// // Изменим кол-во лайков в одном массиве объекта по id:
// const tweetIdToUpdate = '001';
// const changeLikes = tweets.map(tweet => {
//   console.log(tweet.id);
//   if (tweetIdToUpdate === tweet.id) { 
//     console.log('Меняем это значеение');
//     return {
//       ...tweet,
//       likes: tweet.likes + 50,
//     };
//   }
//   return tweet;
// });
// console.table(changeLikes)


// // через тернарный оператор
// const tweetIdToUpdate = '001';
// const changeLikes = tweets.map(tweet => {
 
//   return tweetIdToUpdate === tweet.id
//     ? { 
//       ...tweet,
//       likes: tweet.likes + 50,
//     }
//     :tweet;
// });
// console.table(changeLikes)


// // Еще короче без return:
// const tweetIdToUpdate = '001';
// const changeLikes = tweets.map(tweet =>
//   tweetIdToUpdate === tweet.id
//     ? { 
//       ...tweet,
//       likes: tweet.likes + 50,
//     }
//     :tweet
// );
// console.table(changeLikes)



// // Array.prototype.filter()
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// // Пример
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(number => {
//   console.log(number);
//   return number <= 15;
// });
// console.log(filteredNumbers);
// console.log(numbers);

// // Теперь через стрелки
// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(number => number <= 15);
// console.log(filteredNumbers);


// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'], reposted: true, },
//   { id: '001', likes: 2, tags: ['html', 'css'], reposted: false, },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'], reposted: false, },
//   { id: '003', likes: 8, tags: ['css', 'react'], reposted: true, },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'], reposted: true, },
// ];
// console.table(tweets);

// // ОТфильтруем только репостнутые твиты:
// const repostedTweets = tweets.filter(tweet => tweet.reposted);
// console.log(repostedTweets)

// // ОТфильтруем только НЕ репостнутые твиты:
// const notRepostedTweets = tweets.filter(tweet => !tweet.reposted);
// console.log(notRepostedTweets)

// // получить твиты с кол-вом лайков больше 5:
// const moreLikes = tweets.filter(tweet => tweet.likes > 5);
// console.log(moreLikes);




// // Array.prototype.find()
// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения

// const userToFind = '002';
// const user = users.find(user => user.id === userToFind);
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);
// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));



// // Array.prototype.every() и Array.prototype.some()
// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

// // some вернет true если хотябы одного фрукта будет больше чем 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true



// // Array.prototype.reduce()
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдем по всем элементам коллекции и прибавим значения свойства likes
// // к аккумулятору, начальное значаение которого укажем 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// // для подсчета лайков из коллекции
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(countLikes(tweets)); // 32


// // Посчитаем общую сумму зарплат:
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// }, 0);
// // или короткий вариант:
// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);


// // Посчитаем общее кол-во лайков
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'], reposted: true, },
//   { id: '001', likes: 2, tags: ['html', 'css'], reposted: false, },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'], reposted: false, },
//   { id: '003', likes: 8, tags: ['css', 'react'], reposted: true, },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'], reposted: true, },
// ];
// console.table(tweets);

// const totalTweetsLikes = tweets.reduce((totalLikes, tweet) => {
//   return totalLikes + tweet.likes;
// }, 0);
// // короткий метод:
// const totalTweetsLikes = tweets.reduce(
//   (totalLikes, tweet) => totalLikes + tweet.likes,
//   0
// );
// console.log('Total likes',totalTweetsLikes);


// // Посчитаем общую сумму товаров в корзине:
// const cart = [
//   { label: 'Smartphone', price: 2000, quantity: 1, },
//   { label: 'TV', price: 3500, quantity: 2, },
//   { label: 'MacBook', price: 5000, quantity: 1, },
// ];

// const totalAmount = cart.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0,
// )
// // Деструктуризированный вариант:
// const totalAmount = cart.reduce(
//   (total, {price, quantity}) => total + price * quantity,
//   0,
// )
// console.log('Total Amount', totalAmount, 'EUR');


// // Собрать все теги из твитов:
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'], reposted: true, },
//   { id: '001', likes: 2, tags: ['html', 'css'], reposted: false, },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'], reposted: false, },
//   { id: '003', likes: 8, tags: ['css', 'react'], reposted: true, },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'], reposted: true, },
// ];
// console.table(tweets);

// // const allTags = tweets.reduce((tags, tweet) => {
// //     tags.push(...tweet.tags);

// //     return tags;
// // }, []);

// // через распыление:
// const allTags = tweets.reduce((tags, tweet) => {
//     return [...tags, ...tweet.tags];
// }, []);
        
// console.log(allTags);

// // // ведем статистику. Хотим получить объект с свойствами тег: кол-во;
// // const tagsStats = allTags.reduce((acc, tag) => {
// //     console.log(acc);
// //     if (acc[tag]) {
// //         acc[tag] += 1;
// //         return acc;
// //     }
// //     acc[tag] = 1;
// //     return acc;
// // }, {});


// // Короткий вариант через тернарник:
// const tagsStats = allTags.reduce((acc, tag) => {
   
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// console.log('Final tags stats',tagsStats);


// // Array.prototype.sort()
// const numbers = [2, 1, 4, 3, 5];
// // Отсортирует по возрастанию
// console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
// console.log('After sort: ', numbers.sort()); // [1, 2, 3, 4, 5]

// const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// // Отсортирует по алфавиту
// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
// console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]



// // Свой порядок сортировки
// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (b, a) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));



// // Цепочки методов массива

// // Через переменные:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(reversed);


// // Через цепочки:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// /*
//  * Фильтруем четные числа. Далее, на результате метода filter,
//  * вызываем map и множим на 2. После чего на результате
//  * метода map вызываем reverse.
//  */

// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
//   .reverse();

// console.log(result);