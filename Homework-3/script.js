"use strict";
// 1
const user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

// 2
function isEmpty(obj) {
	for (const key in obj) {
		return false;
	}
	return true;
}
console.log(isEmpty(user));

// 3
const user = {
	name: "John",
};
// это будет работать?
user.name = "Pete"; // Yes

// 4
const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;

for (const workerSalary in salaries) {
	sum += salaries[workerSalary];
}

// 5
const menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

function multipleNumeric(obj) {
	for (const property in obj) {
		if (typeof obj[property] === "number") {
			obj[property] *= 2;
		}
	}
}
multipleNumeric(menu);
