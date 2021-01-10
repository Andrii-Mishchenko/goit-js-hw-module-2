
// Массивы
// const userLoginsAtempts = ['jdsjsjdnn','djfsndjsndc', 'djsjdfsj', 'djnfjsnds'];
// const login = 'djsjdfsj';
// let message = `Пользователь ${userLoginsAtempts} не найден`;

// for (let i=0; i<userLoginsAtempts.length; i+=1) {
//      const atempt = userLoginsAtempts[i];
//      console.log('Login: ', atempt);

//      console.log(`${atempt} === ${login}`, atempt === login);

//      if(atempt === login) {
//           message = `Пользователь ${atempt} найден`;
//           break;
//      }
// }
// console.log(message);

// Найти наименьшее число

// const numbers = [23, 54, 5, 76, 8, 16];
// let smallestNumber = numbers[0];

// for(const number of numbers) {
// console.log(number);

//      if (number < smallestNumber) {
//           smallestNumber = number;
//      }

// }
// console.log('Smallest Number = ', smallestNumber);



// // сшить строку с разделителем ","
// // через метод for:
// const clients = ['Google', 'Facebook', 'Instagram', 'Amazon'];
// // let string = '';

// // for (const client of clients) {
// //      string += client + ',';   
// // }

// // string = string.slice(0, string.length-1);
// // console.log(string);

// // через метод join:
// const string = clients.join(',');
// console.log(string);



// // Заменить регистр каждого символа
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//      console.log(letter);
//      // через if:
//      // if(letter === letter.toLowerCase()){
//      //      console.log('Эта буква в нижнем регистре', letter);
//      //      invertedString += letter.toUpperCase();
//      // } else {
//      //      console.log('Эта буква в верхнем регистре', letter);
//      //      invertedString += letter.toLowerCase();
//      // }
//      // через тернарный оператор:
//      letter === letter.toLowerCase()? invertedString += letter.toUpperCase(): invertedString += letter.toLowerCase();
// }
// console.log(invertedString);



// // сделать slug в URL
// const title = 'Full overwiew of Skoda Octavia A8'
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');

// console.log(slug);

// // Сокращенный вариант
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);


// посчтитать сумму элементов двух массивов
// const array1 = [1, 5, 3, 10, 12, 6];
// const array2 = [23, 1, 4, 7];
// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers);

// for(const number of numbers) {
//      total+=number;
// }
// console.log('total:', total);


// Функции

// // Заменить регистр каждого символа
// const changeCase = function(string) {
//      const letters = string.split('');
//      let invertedString = '';

//      for(const letter of letters) {
//           const isInLowerCase = letter === letter.toLowerCase();

//           invertedString += isInLowerCase? letter.toUpperCase(): letter.toLowerCase();
//      }

//      console.log(invertedString);
// }

// changeCase('dskkKfkskkK');


// // сделать slug в URL
// const slugify = function(string) {
//      // const normalizedTitle = string.toLowerCase();
//      // const words = normalizedTitle.split(' ');
//      // const slug = words.join('-');

//      // return slug;

          // короткий вариант
//      return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Full overwiew of Skoda Octavia A8'));


// написать функцию add для сложения произвольного кол-ва аргументов (чисел)
// const add = function(...args){
//      console.log(args);
//      let total = 0;

//      for(const arg of args) {
//           total += arg;
//      }


//      return total;
// }
// console.log(add(1,2,3,));
// console.log(add(1,2,4,5,6));


// // Псевдомасивы
// // Функция должна вернуть масив из повторяющихся чисел в args
// const filterNumbers = function(array, ...args){
//      console.log('array:', array);
//      console.log('args:', args);
//      const uniqueElements = [];

//      for(const element of array) {
         

//           if(args.includes(element)) {
//                uniqueElements.push(element);
//                console.log(`${element} повторяется в args`);
//           }

//      }

//      return uniqueElements;
// }
// console.log(filterNumbers([1,2,3,4],1,6,3,8,9));



// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }





