"use strict";
// 1
let user = {
	name: "Джон",
	go: function() {
		console.log(this.name);
	},
}; // Потеря ";"
(user.go)();

// 2
let obj, method;
obj = {
	go: function() {
		console.log(this);
	},
};
obj.go(); // (1) [object Object]
(obj.go)(); // (2) [object Object]
(method = obj.go)(); // (3) undefined из-за потери контекста this
(obj.go || obj.stop)(); // (4) undefined так же потеря контекста

// 3
function makeUser() {
	return {
		name: "Джон",
		ref: this,
	};
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат? undefined

// 4
const calculator = {
	read() {
		this.numberOne = Number(prompt("Число 1"));
		this.numberTwo = Number(prompt("Число 2"));
	},
	sum() {
		return this.numberOne + this.numberTwo;
	},
	mul() {
		return this.numberOne * this.numberTwo;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 5
const ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() {
		// показывает текущую ступеньку
		console.log(this.step);
		return this;
	},
};

ladder
	.up()
	.up()
	.down()
	.showStep();

// 6
const obj = {};

function A() {
	return new B();
}
function B() {
	return obj;
}

const a = new A();
const b = new B();

console.log(a == b); // true

// 7
function Calculator() {
	this.read = () => {
		this.numberOne = Number(prompt("Число 1"));
		this.numberTwo = Number(prompt("Число 2"));
	};
	this.sum = () => {
		return this.numberOne + this.numberTwo;
	};
	this.mul = () => {
		return this.numberOne * this.numberTwo;
	};
}
const calculator = new Calculator();

calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// 8
function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = () => {
		this.value += Number(prompt("Ввведите число"));
	};
}

const accumulator = new Accumulator(33);

accumulator.read();
accumulator.read();

alert(accumulator.value);
