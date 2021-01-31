'use strict'

// // Задача 1
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment);


// // Задача 2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
    
//   	owner: {
// 		name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     }
//   };


// // Задача 3
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки


// // Задача 4
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Пиши код выше этой строки


// // Задача 5
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки


// // Задача 6
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');


// // Задача 7
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: 'Ямайка', city:'Кингстон'}


// // Задача 8
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     // Пиши код ниже этой строки
//     name,
//   price,
//   image,
//   tags
//   // Пиши код выше этой строки
// };


// // Задача 9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam'  
  
//   // Пиши код выше этой строки
// };


// // Задача 10
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {

//     keys.push(key);
//     values.push(apartment[key]);

// }
// console.log(keys);
// console.log(values);


// // Задача 11
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
//   // Пиши код выше этой строки
// }


// // Задача 12
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//     for (const key in object) {
        
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }    
//   // Пиши код выше этой строки
//   return propCount;
// }


// // Задача 13
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// console.log(keys)

// for (const key of keys) {
//     console.log(key)
//     console.log(apartment[key])

//   values.push(apartment[key]);
// }
// console.log(values)


// Задача 14
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//     return propCount;
  
//   // Пиши код выше этой строки
// }

// console.log(countProps({ name: 'vasyl', price: 200,}))


// // Задача 15
// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   // Пиши код ниже этой строки
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);


// // Задача 16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Пиши код ниже этой строки
    
//     const values = Object.values(salaries);
//     console.log(values);
    
//     for (const value of values) {
//       console.log(value);

//         totalSalary += value;
//     }
//     // Пиши код выше этой строки
//     return totalSalary;
// }  
// console.log(countTotalSalary({andrii: 1200, serhii: 1000, ivan:800} ))


// // Задача 17
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Пиши код ниже этой строки
//   for (const color of colors) {
     
//       hexColors.push(color.hex);
//       rgbColors.push(color.rgb);
  
//   }
//   console.log(hexColors)
//   console.log(rgbColors)


// // Задача 18
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
// ];
  
// function getProductPrice(productName) {
//     // Пиши код ниже этой строки
//     for(product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }

//     }
    
//     return null
//     // Пиши код выше этой строки
// }


// // Задача 19
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Пиши код ниже этой строки
//     const keys = [];
//     for (const product of products) {
    
//     if (propName in product) {
    
//       keys.push(product[propName]);
//         }
//     }
//     return keys;
//   }
    

// // Задача 20
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки

//     for (const product of products) {
//         if(productName === product.name) {
//             return product.price * product.quantity;
//         }
//     }
//     return 0
//     // Пиши код выше этой строки
//   }    
//   console.log(calculateTotalPrice('Бластер'));


// // Задача 21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const {yesterday, today, tomorrow} = highTemperatures;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;


// // Задача 22
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки
  
//   const {yesterday, today, tomorrow, icon ='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// // Задача 23
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Пиши код ниже этой строки

//   const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, highIcon ='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;
  
//   // Пиши код выше этой строки
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// // Задача 24
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Пиши код ниже этой строки
  
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }


// // Задача 25
// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
// };
// // Пиши код ниже этой строки
  
// const{
//         today:{
//             low:lowToday,
//             high:highToday,
//             icon:todayIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//         },
//         tomorrow: {
//             low:lowTomorrow,
//             high:highTomorrow,
//             icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//         }
// } = forecast;

// console.log(tomorrowIcon)


// // Задача 26
// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {

//     const {today:{low:todayLow, high:todayHigh}, tomorrow:{low:tomorrowLow, high:tomorrowHigh},}=forecast;
  
//     // Пиши код выше этой строки
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// // Задача 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// // Задача 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// // Задача 29
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Пиши код ниже этой строки
//   const finalSettings = {...defaultSettings, ...overrideSettings};


// // Задача 30
// function makeTask(data) {
//     const completed = false;
//     const category = 'Общее';
//     const priority = 'Обычный';
//     // Пиши код ниже этой строки
    
//     const task = {completed, category, priority, ...data};
     
//   return task
//     // Пиши код выше этой строки
// }


// // Задача 31
// function add(...args) {
//     console.log(...args);
//     let total = 0;

//     for (const arg of args) {
//         console.log(arg)

//         total += arg;     
//     }

//     return total;
// }
// console.log(add(15, 27))


// // Задача 32
// // Пиши код ниже этой строки
// function addOverNum(a,...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if(arg>a){
//       total += arg;
//       }
//     }
  
//     return total;
//     // Пиши код выше этой строки
//   }


// // Задача 33
// // Пиши код ниже этой строки
// function findMatches(a, ...args) {
//     const matches = []; // Не изменяй эту строку

//     for(arg of args) {
//         if(a.includes(arg)){
//             matches.push(arg);
//         }
//     }
  
//     // Пиши код выше этой строки
//     return matches;
// }


// // Задача 34
// const bookShelf = {
//     // Пиши код ниже этой строки
//     books: ['Последнее королевство', 'Страж снов'],
//     getBooks() {
//       return 'Возвращаем все книги';
//     },
//     addBook(bookName) {
//       return `Добавляем книгу ${bookName}`;
//     },
//     removeBook(bookName) {
//       return `Удаляем книгу ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//       return `Обновляем книгу ${oldName} на ${newName}`;
//     },
//     // Пиши код выше этой строки
//   };


// // Задача 35
// const bookShelf = {
//     books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//     updateBook(oldName, newName) {
     
//       const oldNameIndex = this.books.indexOf(oldName);
//       this.books.splice(oldNameIndex, 1, newName);     
     
//     }, 
// };


// // Задача 36
// const atTheOldToad = {
//     // Пиши код ниже этой строки
//     potions: [],
//     // Пиши код выше этой строки
// };


// // Задача 37
// const atTheOldToad = {
//     // Пиши код ниже этой строки
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     getPotions() {
//       return this.potions;
//     }
    
//     // Пиши код выше этой строки
// };


// // Задача 38
// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     addPotion(potionName) {
//       // Пиши код ниже этой строки
//       this.potions.push(potionName);
//       // Пиши код выше этой строки
//     },
// };


// // Задача 39
// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     removePotion(potionName) {
//       // Пиши код ниже этой строки
//       const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1);    
    
//       // Пиши код выше этой строки
//     },
// };


// // Задача 40
// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     updatePotionName(oldName, newName) {
//       // Пиши код ниже этой строки
//       const oldNameIndex = this.potions.indexOf(oldName);
      
//         this.potions.splice(oldNameIndex, 1, newName);
      
      
//       // Пиши код выше этой строки
//     },
//  };


// // Задача 41
// const atTheOldToad = {
//     potions: [
//       { name: 'Зелье скорости', price: 460 },
//       { name: 'Дыхание дракона', price: 780 },
//       { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//         return this.potions;      
//     },

//     addPotion(potionName) {
//         for (const potion of this.potions){
//             console.log(potion);

//             if (potion.name === potionName.name) {
                
//                 return console.log(`Зелье ${potionName} уже есть в инвентаре!`);
//             }
//         }
      
//       this.potions.push(potionName);   
//       console.log(`Зелье ${potionName} добавлено!`);
//     },

//     removePotion(potionName) {

//         for (let i = 0; i < this.potions.length; i += 1) {
//                        
//             const item = this.potions[i];
            
//             if (potionName === item.name) {               
//                
//                 this.potions.splice(i, 1);
//                 return console.log(`Нужно удалить Зелье ${potionName}`)
//             }
//         }
//         return console.log(`Зелья ${potionName} нет в инвентаре!`);
//     },

//     updatePotionName(oldName, newName) {

//         for (let i = 0; i < this.potions.length; i += 1) {
//                       
//             const item = this.potions[i];

//             if(oldName === item.name) {
//                 console.log(`Меняем ${oldName} на ${newName}`);
                
//                 return item.name = newName;
//             }
//         }
//         return console.log('Такого зелья не существует');
//     }    
// }



// console.table(atTheOldToad.potions)

// atTheOldToad.addPotion({ name: 'Дыхание дракона', price: 780 });
// console.table(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: 'Эликсир любви', price: 1080 });
// console.table(atTheOldToad.potions);

// atTheOldToad.removePotion('Эликсир любви');
// console.table(atTheOldToad.potions);

// atTheOldToad.removePotion('Каменная кожа');
// console.table(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Каменная кожа", "Шелковистая кожа")
// console.table(atTheOldToad.potions);