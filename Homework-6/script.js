"use strict";
// 1
function camelize(str) {
	let tagArray = str.split("-");

	for (let i = 1; i < tagArray.length; i++) {
		tagArray[i] = tagArray[i][0].toUpperCase() + tagArray[i].slice(1);
	}

	return tagArray.join("");
}

// // 2
// let arr = [1, 10, 15, 2, 5, 4];

// function filterRange(arr, a, b) {
// 	return arr.filter((number) => number >= a && number <= b);
// }

// // 3
// let arr = [1, 10, 15, 2, 5, 4];

// function filterRange(arr, a, b) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > b || arr[i] < a) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}
// }
// filterRange(arr, 1, 4);

// // 4
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10

// // 5
// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
// 	return arr.slice().sort();
// }
// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// // 6
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name)

// console.log( names ); // Вася, Петя, Маша

// // 7
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((user, index) => {
// 	return { fullName: `${user.name} ${user.surname}`, id: index + 1 };
// });

// console.log(usersMapped);

// // 8
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
// 	arr.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// }
// sortByAge(arr);

// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// // 9
// let arr = [1, 2, 3];

// function shuffle(arr){
// 	arr.sort(() => Math.random() - 0.5);
// }

// shuffle(arr);
// console.log(arr);

// shuffle(arr);
// console.log(arr);

// shuffle(arr);
// console.log(arr);

// // 10
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(arr) {
// 	return arr.reduce((prevUser, currentUser) => prevUser + currentUser.age, 0) / arr.length;
// }

// console.log(getAverageAge(arr));

// // 11
// function unique(arr) {
//   return Array.from(new Set(arr))
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings))

// // 12
// function unique(arr) {
//   return Array.from(new Set(arr))
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values) );

// // 13
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// console.log( aclean(arr) );

// // 14
// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys()); // Нужно добавить Array.frim и сделать из итерируемого обьекта массив
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// // Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// // 15
// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let messagesFlow = new WeakMap();
// //В данной задаче используем WeakMap тк ключи в структуре могут быть только обьектами и при удалении сообщения мы удаляем ссылку на обьект
// // => сборщик мусора автоматически удаляет его из структуры

// // 16
// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250,
// };

// function sumSalaries(workersSalary) {
// 	let res = 0;

// 	for (let salary of Object.values(workersSalary)) {
// 		res += salary;
// 	}

// 	return res;
// }

// console.log(sumSalaries(salaries));

// // 17
// let user = {
// 	name: "John",
// 	age: 30,
// };

// function count(countedObj) {
// 	return Object.keys(countedObj).length;
// }

// console.log(count(user)); 
