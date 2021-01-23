'use strict'

// Объекты


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,

//   someMethod() {
//     console.log('Hello World')
//   }
// };
// hotel.someMethod()


// // Посчитать общее кол-во фидбеков:
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 5
// };

// let totalFeedback = 0;

// // Через for...in

// for (const key in feedback) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }


// // Через Object.keys():

// const keys = Object.keys(feedback);

// for (const key of keys) {
//    console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }


// console.log('Total', totalFeedback);


// // Через Object.values():

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//    console.log(value);
 
//   totalFeedback += value;
// }

// console.log('Total', totalFeedback);



// // Массив объектов

// const friends = [
//   { name: 'Poly', online: false },
//   { name: 'Mango', online: true },
//   { name: 'Ajax', online: true },
//   { name: 'Victory', online: false }
// ];
// console.table(friends);

// Найти Ajax в массиве объектов

// Через For of

// for (const friend of friends) {
//   console.log(friend);

//   if (friend.name === 'Ajax') {
//     console.log("Ajax здесь!");
//     break;
//   }
// }

// // Через функцию

// const findFriendByName = function (allFriends, name) {
  
//   for (const friend of allFriends) {

//     console.log(friend)

//     if (friend.name === name) {
//       return 'Нашли';
//     }
    
//   }
//   return 'Не нашли'
// }

// console.log(findFriendByName(friends, 'Victory'));
// console.log(findFriendByName(friends, 'Chelsy'));


// // Собрать имена всех друзей в масив

// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     names.push(friend.name);
//   }

//   return names
// }

// console.log(getAllNames(friends));


// // Получить массив имен друзей онлайн

// const getOnlineFriends = function (allFriends) {
//   const namesOnline = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.online) {
//       namesOnline.push(friend.name);
//     }
//   }
//   return namesOnline;
// }

// console.log(getOnlineFriends(friends));


// Работаем с коллекцией товаров в корзине

// { name: 'apple', price: 50 }
// { name: 'lemon', price: 70 }
// { name: 'cherry', price: 90 }
// { name: 'grape', price: 100 }


// const cart = {
//     items: [
//         { name: 'lemon', price: 70, quantity: 1 },
//         { name: 'cherry', price: 90, quantity: 1 }
//     ],

//     getItem() {
//         return this.items;
//     },

    // add(product) {

    //     for (const item of this.items) {
    //         console.log(item);

    //         if (item.name === product.name) {
    //             console.log('Этот продукт уже добавлен, изменяем кол-во');
    //             item.quantity += 1;
    //             return 
    //         }
    //     }

    //     console.log('Новый продукт, добавляем в корзину');
    //     product.quantity = 1;
    //     this.items.push(product);
    // }

//     remove(productName) {
//         console.log(productName);

//         for (let i = 0; i < this.items.length; i += 1) {
           
//             const item = this.items[i];

//             if (productName === item.name) {
//                 console.log('Нужно удалить');
//                 console.log('Индекс для удаления', i);

//                 this.items.splice(i, 1);
//             }
//         }
//     },

//     clear() {
//         this.items = [];
//     },

//     countTotalPrice() {
//         let total = 0;

//         for (const item of this.items) {
//             total += item.price * item.quantity;
//         }

//         return total;
//     },

//     increaseQuantity(productName) {
//         for (const item of this.items) {
            
//             if (item.name === productName.name) {
//                 console.log('Еще один', item);
//                 item.quantity += 1;
//             }           
//         }
//     },

//     decreaseQuantity(productName) {
//         for (const item of this.items) {
            
//             if (item.name === productName.name) {
//                 console.log('Минус один', item);
              
//                 if (item.quantity - 1 === 0) {
//                     this.remove(productName);
//                     console.log(`Вы удалили продукт ${productName.name} полностью`);
//                     return;
//                 }

//                 item.quantity -= 1;
//             }           
//         }
//     }
// }

// console.log(cart.getItem());
// cart.add({ name: 'grape', price: 100 })
// cart.add({ name: 'cherry', price: 90 })
// cart.add({ name: 'grape', price: 100 })
// console.table(cart.getItem());

// // cart.remove('lemon');
// // console.table(cart.getItem());

// // cart.clear();
// // console.table(cart.getItem());

// console.log('Total', cart.countTotalPrice());

// cart.increaseQuantity({ name: 'grape', price: 100 });

// console.table(cart.getItem());

// cart.decreaseQuantity({ name: 'grape', price: 100 });
// cart.decreaseQuantity({ name: 'grape', price: 100 });
// cart.decreaseQuantity({ name: 'grape', price: 100 });

// console.table(cart.getItem());



// Деструктуризация


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const { name: hotelName, stars, status = 'Premium' } = hotel;

// console.log(hotelName, stars, status); 


// // Глубокая деструктуризация
// const profile = {
//     name: 'Jackson',
//     tag: 'Jack',
//     location: 'Lviv, Ukraine',
//     avatar: 'https://lh3.googleusercontent.com/proxy/1XrXj50AWxOihq-7e1RmYyFVW9NTNNgFcUZ2OWyrtaY9VXgmXVfNvAgm03DxZUM0fP90XyzL3NlVMKwXGS28aiUGwaluj-b0Nr3m5o4mvRqOBmA0K2mbBis6sJ1ZEfyCy4ZVaEQ',
//     stats: {
//         followers: 2345,
//         views: 4532,
//         likes: 3421
//     }
// }

// const { name, tag, location, avatar, stats:{followers, views, likes} } = profile;
// console.log(name, tag, location, avatar, followers, views, likes)


// // Деструктуризация масивов
// const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);


// // Деструктуризация части объекта
// const profile = {
//     name: 'Jackson',
//     tag: 'Jack',
//     location: 'Lviv, Ukraine',
//     avatar: 'https://lh3.googleusercontent.com/proxy/1XrXj50AWxOihq-7e1RmYyFVW9NTNNgFcUZ2OWyrtaY9VXgmXVfNvAgm03DxZUM0fP90XyzL3NlVMKwXGS28aiUGwaluj-b0Nr3m5o4mvRqOBmA0K2mbBis6sJ1ZEfyCy4ZVaEQ',
//     stats: {
//         followers: 2345,
//         views: 4532,
//         likes: 3421
//     }
// }

// const { name, tag, location, ...restProps };

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);


