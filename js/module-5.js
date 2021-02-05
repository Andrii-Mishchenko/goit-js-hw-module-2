'use strict'

// // Процедурное программирование
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate))



// // Объектно-ориентированное программирование (ООП)
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage())


// // Конструкторы
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel);



// // Добавление методов
// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel

// hotel.addGuests(50);
// console.log(hotel);
// hotel.addGuests(50);
// console.log(hotel);

// hotel.removeGuests(50);
// console.log(hotel);


// // Управление магазином
// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12


// // Прототипы
// const animal = { eats: true };
// const dog = { barks: true };

// dog.__proto__ = animal;

// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// console.log(dog); // true


// // Function.prototype
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);

// console.log(mango);


// // Функции конструкторы
// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
// };

// Manager.prototype.sell = function() {
//     this.sales += 1;
// };

// console.log('This Manager', Manager);

// const mango = new Manager('Mango', 5);
// console.log('This is mango',mango);

// mango.sell()
// console.log('This is mango', mango);

// const poly = new Manager('Poly', 10);
// console.log('This is mango', poly);
// console.log(poly.hasOwnProperty('y'));


// // Рефакторинг задачи из конспекта Конструкторов (магазин):
// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;
// };

// Manager.prototype.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
// };

// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sell('Oven')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12



