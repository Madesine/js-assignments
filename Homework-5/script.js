"use strict";
// 1
let str = "Привет";
str.test = 5;
console.log(str.test);

// Как вы думаете, это сработает? Что выведется на экран?
// Не сработает в use strict. Без него сработает и выведет undefined

// 2
const numberOne = Number(prompt("First number"));
const numberTwo = Number(prompt("Second number"));

alert(numberOne + numberTwo);

// 3
alert((1.35).toFixed(1)); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
//Это происходит из за потери точности(бесконечная дробь)
alert((6.35).toFixed(30));
alert((6.35).toFixed(1)); // 6.3
// Как правильно округлить 6.35?
//Преобразовать в правильную десятичную дробь ( не бесконечная )
alert((6.35 * 10).toFixed(0) / 10);

// 4
let i = 0;
while (i <= 10) {
	i += 0.2;
}
// Будет бесконечным. Не отработана ситуация с потерей точности при работе с дестичными дробями

// 5
function random(min, max) {
	return min + Math.random() * (max - min);
}

console.log(random(9, 10));
console.log(random(1, 5));
console.log(random(1, 2));

// 6
function random(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// 7
function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("vlad"));

// 8
const checkSpam = (str) => {
	return str.toUpperCase().includes("XXX") ||
		str.toLowerCase().includes("viagra")
		? true
		: false;
};
console.log(checkSpam("viAgra is mine"));

// 9
// Тоже самое что и 8

// 10
function truncate(str, maxLength) {
	if (str.length > maxLength) {
		return `${str.slice(0, maxLength - 1)}\u{2026}`;
	}
	return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// 10
function extractCurrencyValue(str) {
	return Number(str.slice(1));
}
console.log(extractCurrencyValue("$120"));

// 11
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // в fruits 4 значения

// 12
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.unshift("Рэп", "Регги");

// 13
let arr = ["a", "b"];

arr.push(function() {
	console.log(this);
});

arr[2](); // this === arr , идет вызов метода (2) обьекта (arr)

// 14
const numbersArray = [];
function sumInput() {
	const currentNumber = prompt("Введите число");

	if (Number(currentNumber) || currentNumber === "0") {
		numbersArray.push(Number(currentNumber));
		return sumInput();
	}

	return numbersArray.reduce((sum, current) => sum + current, 0);
}
alert(sumInput());
