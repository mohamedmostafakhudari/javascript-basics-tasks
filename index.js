console.log("1 - EvenOdd : \n");

function evenOdd(num) {
	if (typeof num !== "number") {
		throw new Error("an input of type number is expected");
	}
	return num % 2 === 0 ? "even" : "odd";
}
console.log(`Number 2 is ${evenOdd(2)}.`);
console.log(`Number 1 is ${evenOdd(1)}.`);

console.log("\n" + "#".repeat(50) + "\n");

console.log("2 - FizzBuzz : \n");

function fizzBuzz(num) {
	if (typeof num !== "number") {
		throw new Error("an input of type number is expected");
	}
	if (num % 5 === 0 && num % 3 === 0) {
		return "fizzbuzz";
	} else if (num % 3 === 0) {
		return "fizz";
	} else if (num % 5 === 0) {
		return "buzz";
	} else {
		return num;
	}
}

console.log(`\tNumber 9 : ${fizzBuzz(9)}\n\tNumber 25 : ${fizzBuzz(25)}\n\tNumber 15 : ${fizzBuzz(15)}`);

console.log("\n" + "#".repeat(50) + "\n");

console.log("3 - Reverse String : \n");

function reverseString(str = "") {
	if (typeof str !== "string") {
		throw new Error("an input of type string is expected");
	}
	return str.split("").reverse().join("");
}

console.log(`original : welcome\nreversed : ${reverseString("welcome")}`);

console.log("\n" + "#".repeat(50) + "\n");

console.log("4 - Circle Area and Circumference : \n");

class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	area() {
		return Math.PI * this.radius ** 2;
	}
	circumference() {
		return 2 * Math.PI * this.radius;
	}
}

const circle = new Circle(4);

console.log(`Assume:
\tradius = 4
Then:
\tarea ≈ ${circle.area().toFixed(2)}\n\tcircumference ≈ ${circle.circumference().toFixed(2)}`);

console.log("\n" + "#".repeat(50) + "\n");

function checkFor50(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		throw new Error("an input of type number is expected");
	}

	return x === 50 || y === 50 || x + y === 50;
}
const exercise_5 = {
	title: "5 - check two given numbers and return true if one of the number is 50 or if their sum is 50.",
	samples: [
		{
			inputs: "x = 20 y = 10",
			result: checkFor50(20, 10),
		},
		{
			inputs: "x = 30 y = 20",
			result: checkFor50(30, 20),
		},
		{
			inputs: "x = 100 y = 50",
			result: checkFor50(100, 50),
		},
	],
};

logAnswer(exercise_5.title, exercise_5.samples);

function diffSigns(x, y) {
	return (x >= 0 && y < 0) || (x < 0 && y >= 0);
}
const exercise_6 = {
	title: "6 - check from two given integers, whether one is positive and another one is negative.",
	samples: [
		{
			inputs: "x = -2 y = 4",
			result: diffSigns(-2, 4),
		},
		{
			inputs: "x = 2 y = 4",
			result: diffSigns(2, 4),
		},
	],
};

logAnswer(exercise_6.title, exercise_6.samples);

const exercise_7 = {
	title: "7 - check whether a given positive number is a multiple of 5 or a multiple of 8. ",
	samples: [
		{
			inputs: "x = 20",
			result: `multiple of 5 : ${multipleOf5(20)} || multiple of 8 : ${multipleOf8(20)}`,
		},
		{
			inputs: "x = 64",
			result: `multiple of 5 : ${multipleOf5(64)} || multiple of 8 : ${multipleOf8(64)}`,
		},
		{
			inputs: "x = 12",
			result: `multiple of 5 : ${multipleOf5(12)} || multiple of 8 : ${multipleOf8(12)}`,
		},
	],
};

function multipleOf5(x) {
	if (typeof x !== "number") {
		throw new Error("expected an input of type number");
	}
	if (x < 0) {
		throw new Error("expected a positive number");
	}
	return x % 5 === 0;
}
function multipleOf8(x) {
	if (typeof x !== "number") {
		throw new Error("expected an input of type number");
	}
	if (x < 0) {
		throw new Error("expected a positive number");
	}
	return x % 8 === 0;
}

logAnswer(exercise_7.title, exercise_7.samples);

const exercise_8 = {
	title: "8 - find the largest of three given integers ",
	samples: [
		{
			inputs: "x = 2 y = 6 z = 10",
			result: largestNumber(2, 6, 10),
		},
	],
};

function largestNumber(x, y, z) {
	return Math.max(x, y, z);
}

logAnswer(exercise_8.title, exercise_8.samples);

const exercise_9 = {
	title: "9- Compute The sum of the numbers from 1 to 10 ",
	samples: [
		{
			inputs: "n = 10",
			result: sumTo(10),
		},
	],
};

function sumTo(n) {
	return (n + 1) * (n / 2);
}

logAnswer(exercise_9.title, exercise_9.samples);

const exercise_10 = {
	title: "10- display the pattern like right angle triangle using an asterisk. ",
	samples: [
		{
			inputs: "rows = 5",
			result: printRightTri(5),
		},
		{
			inputs: "rows = 5",
			result: printTri(5),
		},
		{
			inputs: "rows = 5",
			result: printLeftTri(5),
		},
	],
};
function printLeftTri(rowsCount) {
	const result = [];
	const character = "*";
	result.push("\n");
	for (let i = 1; i <= rowsCount; i++) {
		result.push(pad(i, rowsCount + i) + character.repeat(i) + "\n");
	}
	return result.join("");
}
function printRightTri(rowsCount) {
	const result = [];
	const character = "*";
	result.push("\n");
	for (let i = 1; i <= rowsCount; i++) {
		result.push(pad(i, rowsCount) + character.repeat(i) + "\n");
	}
	return result.join("");
}
function printTri(rowsCount) {
	const result = [];
	const character = "*";
	result.push("\n");
	for (let i = 1; i <= rowsCount; i++) {
		result.push(pad(i, rowsCount) + character.repeat(i * 2 - 1) + pad(i, rowsCount) + "\n");
	}
	return result.join("");
}
function pad(rowNumber, rowsCount) {
	return " ".repeat(rowsCount - rowNumber);
}
logAnswer(exercise_10.title, exercise_10.samples);

const exercise_11 = {
	title: "11- check whether a given number is positive or negative. ",
	samples: [
		{
			inputs: "x = 10",
			result: numberSign(10),
		},
		{
			inputs: "x = -5",
			result: numberSign(-5),
		},
	],
};

function numberSign(x) {
	return x < 0 ? "negative" : "positive";
}

logAnswer(exercise_11.title, exercise_11.samples);

const exercise_12 = {
	title: "12- store elements in an array and print it. ",
	samples: [
		{
			inputs: "elems: 1 1 4 7",
			result: storeAndPrint(1, 1, 4, 7),
		},
	],
};

function storeAndPrint(x, y, z, p) {
	const arr = [x, y, z, p];
	return `[ ${arr.join(", ")} ]`;
}
logAnswer(exercise_12.title, exercise_12.samples);

const exercise_13 = {
	title: "13- print the sum of two numbers ",
	samples: [
		{
			inputs: "x = 5  y = 10",
			result: sum(5, 10),
		},
	],
};

function sum(x, y) {
	return x + y;
}

logAnswer(exercise_13.title, exercise_13.samples);

const exercise_14 = {
	title: "14- calculate the factorial of a given number ",
	samples: [
		{
			inputs: "x = 5",
			result: fac(5),
		},
	],
};
function fac(x) {
	if (x < 2) return 1;
	return x * fac(x - 1);
}

logAnswer(exercise_14.title, exercise_14.samples);

class Calculator {
	constructor() {}
	static add(x, y) {
		return +x + +y;
	}
	static subtract(x, y) {
		return x - y;
	}
	static div(x, y) {
		if (y === 0) throw new Error("Math Error!");
		return x / y;
	}
	static mul(x, y) {
		return x * y;
	}
}

const exercise_15 = {
	title: "15- Create Simple Calculator (+ , - , * , /) ",
	samples: [
		{
			inputs: "x = 10  y = 5",
			result: Calculator.add(10, 5),
		},
		{
			inputs: "x = 10  y = 5",
			result: Calculator.subtract(10, 5),
		},
		{
			inputs: "x = 10  y = 5",
			result: Calculator.div(10, 5),
		},
		{
			inputs: "x = 10  y = 5",
			result: Calculator.mul(10, 5),
		},
	],
};

logAnswer(exercise_15.title, exercise_15.samples);

function logAnswer(title, samples) {
	console.log(title + "\n");
	for (let i = 0; i < samples.length; i++) {
		const sample = samples[i];
		console.log(`Input: ${sample.inputs}`);
		console.log(`Result: ${sample.result}`);
		if (i !== samples.length - 1) {
			console.log("\n");
		}
	}
	console.log("\n" + "#".repeat(50) + "\n");
}
