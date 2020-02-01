// 1
const userName = prompt("Как Вас зовут ?");
alert(userName);

// 2
if ("0") {
  alert( 'Привет' );
} // Да, выведется.

// 3
if(prompt(`Какое "официальное" название JavaScript ?`) === "ECMAScript")	alert("Верно!");
	else alert("Не знаете? ECMAScript!");

// 4
const number = Number(prompt("Введите число: "));

if(number > 0) alert("1");
	else if(number < 0) alert("-1");
		else alert("0");

// 5
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = a + b < 4 ? `Мало` : `Много`;

// 6
let message;

if (login == "Сотрудник") {
  message = "Привет";
} else if (login == "Директор") {
  message = "Здравствуйте";
} else if (login == "") {
  message = "Нет логина";
} else {
  message = "";
}

message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

// 7
alert( null || 2 || undefined ); // 2

// 8
alert( alert(1) || 2 || alert(3) ); // 1 2

// 9
alert( 1 && null && 2 ); // null

// 10
alert( alert(1) && alert(2) ); // 1 underfined

// 11
alert( null || 2 && 3 || 4 ); // 3

// 12
const age;

if(age >= 14 && age <=90) alert("pisya");

// 13
const age;

if(!(age >= 14 && age <=90)) alert(`pisya`);
if(age < 14 || age > 90) alert(`olga`);

// 14
if(...)?

if (-1 || 0) alert( 'first' ); // true; выполниться
if (-1 && 0) alert( 'second' ); // false; не выполниться
if (null || -1 && 1) alert( 'third' ); // true; выполниться

// 15
const login = prompt("Введите логин :");

if (login === `Админ`) {
  const password = prompt(`Введите пароль:`);

  if (password === `Я главный`) alert(`Здравствуйте!`);
  else if (password === `` || password === null) alert(`Отменено`);
  else alert(`Неверный пароль`);
} else if (login === `` || login === null) alert(`Отменено`);
else alert(`Я вас не знаю`);

// 16
let i = 3;
while (i) {
  alert( i-- );
} // 1, тк 0 = false и цикл не запуститься дальше

// 17
Префиксный вариант ++i:
let i = 0;
while (++i < 5) alert( i ); //1 2 3 4 5

Постфиксный вариант i++
let i = 0;
while (i++ < 5) alert( i ); //1 2 3 4

// 18
Постфиксная форма:
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

// 19
for(let i = 2; i <= 10; i += 2) alert(i);

// 20
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = -1;
while(i++ < 2) alert( `number ${i}!` );

// 21
while(true){
	const number = Number(prompt(`Число`));
	if(number > 100 || number === `` || number === null) break;
}

// 22
switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser === "Edge") alert("You've got the Edge!");
else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
)
  alert("Okay we support these browsers too");
else alert("We hope that this page looks ok!");

// 23
const number = +prompt("Введите число между 0 и 3", "");

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
  default:
    break;
}

// 24
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}

Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // В этом случае будут работать одинаково !!!
  return confirm('Родители разрешили?');
}

// 25
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
	}

	return age > 18 ? true : confirm('Родители разрешили?');
	return age > 18 || confirm('Родители разрешили?');
}

// 26
function min(a,b) {
	return a > b ? b : a;
}

// 27
function pow(x, n) {
  let result = 1;
  while (n-- > 0) result *= x;
  return result;
}

// 28
const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Вы согласны?",
  () => {
    alert("Вы согласились.");
  },
  () => {
    alert("Вы отменили выполнение.");
  }
);
