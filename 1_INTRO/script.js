// Função com function
function soma(a, b) {
	return a + b;
}
// Função anônima
const func = function (a, b) {
	return a + b;
};
// Arrow function
const arrow = (a, b) => a + b;
const flecha = () => {
	console.log('arrow function escopada!');
};

// Parâmetro opcional
const multiplication = (m, n = 2) => {
	return m * n;
};

const showName = (x, nome = 'ana') => {
	console.log(`Olá, ${nome}`);
};

// Jeito elegante de lançar erro quando falta um parâmetro obrigatório
const required = () => {
	throw new Error('Parâmetro obrigatório não informado');
};
const showNome = (x = required(), nome = 'ana') => {
	console.log(`Olá, ${nome}`);
};

// Closure
function someFunction() {
	let txt = 'Alguma Coisa';
	function display() {
		console.log(txt);
	}
	display();
}

function calculator(a) {
	return (c) => {
    return a + c
  }
}
const c1 = calculator('a');
const c2 = calculator('b');

console.log(c1('5'))
console.log(c2('4'))

const obj = {
  a: "teste",
  b: true
}
const obj2 = {
  c: []
}

Object.assign(obj2, obj)
console.log(obj2)
const original = {a: 1, b: 2}
const copia = {...original, c: 3}
console.log(copia)

function somaInfinita(...args) {
	//args vira um array
	return args.reduce((acc, num) => acc + num, 0)
}
console.log(somaInfinita(1, 2, 3, 4, 5))

// Verifica se é palíndromo
function ehPalindromo(palavra) {
	const comprimento = palavra.length;
	if (comprimento % 2 === 0) {
		const slice1 = palavra.slice(0, comprimento / 2);
		const slice2 = palavra.slice(comprimento / 2, comprimento);
		const reversedSlice1 = slice1.split('').reverse().join('');
		return reversedSlice1 === slice2;
	} else {
		const slice1 = palavra.slice(0, comprimento / 2);
		const slice2 = palavra.slice(comprimento / 2 + 1, comprimento);
		const reversedSlice1 = slice1.split('').reverse().join('');
		return reversedSlice1 === slice2;
	}
}

//Array de números aleatórios
function randomNumbers(comprimento) {
	const array = [];
	for (let i = 0; i < comprimento; i++) {
		array[i] = Math.floor(Math.random() * 100);
	}
	return array;
}

//Elemento mais frequente
function mostFrequent(array) {
	counter = {};
	for (let i = 0; i < array.length; i++) {
		counter[array[i]] = (counter[array[i]] || 0) + 1;
	}

	let maxValue = 0;
	let mostRepeated;
	for (let [key, value] of Object.entries(counter)) {
		if (maxValue < value) {
			mostRepeated = key;
			maxValue = value;
		}
	}
	return mostRepeated;
}

//Remove elementos repetidos
function removeRepeated(arr) {
	let newArray = [];
	counter = {};
	for (let i = 0; i < arr.length; i++) {
		counter[arr[i]] = (counter[arr[i]] || 0) + 1;
		if (counter[arr[i]] <= 1) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

//Concatena arrays
function arrayConcat(arr1, arr2) {
	// return [...arr1, ...arr2]
	return arr1.concat(arr2);
}

//Intersecção de arrays
function arrayIntersection(arr1, arr2) {
	let menor = [],
		maior = [];
	if (arr1.length > arr2.length) {
		menor = arr2;
		maior = arr1;
	} else {
		menor = arr1;
		maior = arr2;
	}

	const intersection = [];
	for (num of menor) {
		if (maior.includes(num) && !intersection.includes(num)) intersection.push(num);
	}
	return intersection;
}

//Calcula média
function arrayMean(arr) {
	return arr.reduce((acc, num) => acc + num, 0) / arr.length;
}

//Calcula soma
function objectSum(obj) {
	const arr = Object.values(obj);
	return arr.reduce((acc, num) => acc + num, 0);
}

//Filtrando objeto
function filterObject(obj, arr = []) {
	if (arr.length === 0) return obj;

	const newObject = {};
	const propsList = Object.entries(obj);
	for (const [key, value] of propsList) {
		if (arr.includes(key)) newObject[key] = value;
	}
  return newObject
}

//União de objetos
function objectsUnion(obj1, obj2) {
  return {...obj1, ...obj2}
}

const array1 = [1, 2, 3, 5];
const array2 = [3, 2, 4, 5, 6, 1];
const object = { a: 1, b: 2, c: 3, d: 4, "farofa": 20 };
const object2 = {a: 2, d: 5, ingles: "bee", mars: 20.5}
console.log(objectsUnion(object, object2));

