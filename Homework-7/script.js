"use strict";
// // 1
// const user = { name: "John", years: 30 };
// const { name, years: age, isAdmin = false } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// // 2
// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250,
// };

// function topSalary(salaries) {
// 	let maxSalary = 0;
// 	let maxSalaryWorker = "";

// 	for (let [name, salary] of Object.entries(salaries)) {
// 		if (maxSalary < salary) {
// 			maxSalary = salary;
// 			maxSalaryWorker = name;
// 		}
// 	}

// 	return maxSalaryWorker;
// }
// console.log(topSalary(salaries));

// // 3
// alert(new Date(2012, 1, 20, 3, 12));

// // 4
// let date = new Date(2012, 0, 3); // 3 января 2012 года

// function getWeekDay(date) {
// 	switch (date.getDay()) {
// 		case 0:
// 			return "ВС";
// 		case 1:
// 			return "ПН";
// 		case 2:
// 			return "ВТ";
// 		case 3:
// 			return "СР";
// 		case 4:
// 			return "ЧТ";
// 		case 5:
// 			return "ПТ";
// 		case 6:
// 			return "СБ";
// 	}
// }
// alert(getWeekDay(date));

// // 5
// let date = new Date(2012, 0, 3); // 3 января 2012 года
// function getLocalDay(date) {
// 	if (date.getDay()) {
// 		return date.getDay();
// 	}
// 	return 7;
// }
// alert(date);
// alert(getLocalDay(date)); // вторник, нужно показать 2

// // 6
// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
// 	return new Date(date.getTime() - 24 * 60 * 60 * 1000 * days);
// }

// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// // 7
// function getLastDayOfMonth(year, month) {
// 	return new Date(year, month + 1, 0).getDate()
// }
// alert(getLastDayOfMonth(2013, 1));

// // 8
// function getSecondsToday() {
// 	let dateNow = new Date();
// 	return (
// 		dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds()
// 	);
// }
// alert(getSecondsToday());

// // 9
// function getSecondsToTomorrow() {
// 	let dateNow = new Date();
// 	return (
// 		24 * 60 * 60 -
// 		dateNow.getHours() * 3600 +
// 		dateNow.getMinutes() * 60 +
// 		dateNow.getSeconds()
// 	);
// }
// alert(getSecondsToTomorrow());

// // 10
// function formatDate(date) {
// 	if (new Date() - date < 1000) {
// 		return "прямо сейчас";
// 	} else if (new Date() - date < 1000 * 60) {
// 		return `${(new Date() - date) / 1000} сек. назад`;
// 	} else if (new Date() - date < 1000 * 60 * 60) {
// 		return `${(new Date() - date) / (1000 * 60)} мин. назад`;
// 	} else {
// 		return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
// 	}
// }
// alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
// alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
// alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// alert(formatDate(new Date(new Date - 86400 * 1000)));

// // 11
// const user = {
//   name: "Василий Иванович",
//   age: 35
// };
// const parsedUser = JSON.parse(JSON.stringify(user));

// // 12
// // Цикл (Второй по скорости способ тк это цикл с математическими операциями)
// function sumTo(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log( sumTo(100) );

// // Рекурсия (самый медленный способ тк каждый раз мы заново заходим в функцию (глубина рекурсии).)
// // Этот способ не годиться для подсчета операции sumTo(100000) тк будет слишком большая глубина
// function sumTo(number) {
//   if (number == 1) return 1;
//   return n + sumTo(number - 1);
// }

// console.log( sumTo(100) );

// // Прогрессия (самый быстрый способ тк используются только математические операции)
// function sumTo(number) {
//   return number * (number + 1) / 2;
// }

// console.log( sumTo(100) );

// // 13
// function factorial(number) {
// 	if (number != 1) {
// 		return number * factorial(number - 1);
// 	} else {
// 		return 1;
// 	}
// }

// console.log(factorial(5));

// // 14
// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null,
// 			},
// 		},
// 	},
// };

// (function printList(list) {
// 	console.log(list.value);
// 	return list.next ? printList(list.next) : -1;
// })(list);

// (function printList(list) {
// 	do {
// 		list = list.next;
// 		console.log(list.value);
// 	} while (list.next);
// })(list);
// // Способ с циклом будет быстрее чем с рекурсией

// //16
// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null,
// 			},
// 		},
// 	},
// };

// (function printList(list) {
// 	list.next ? printList(list.next) : -1;
// 	console.log(list.value);
// })(list);

// (function printList(list) {
// 	const resArr = [];

// 	resArr.push(list.value);

// 	do {
// 		list = list.next;
// 		resArr.push(list.value);
// 	} while (list.next);

// 	resArr.reverse().forEach((value) => console.log(value));
// })(list);
