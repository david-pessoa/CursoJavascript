// 1) setTimeout
// console.log('Ainda não executou');

// // Função será executada 2000ms após ser lida
// setTimeout(() => {
// 	console.log('Requisição assíncrona');
// }, 2000);

// console.log('Ainda não executou x2');

// 2) setInterval
// console.log("Ainda não começou")
// // Função será executada infinitamente de maneira assíncrona a cada 3000ms
// setInterval(() => {
//   console.log("Intervalo assíncrono!")
// }, 3000)

// console.log("Ainda não começou x2")

// 3) Promises
// const promessa = Promise.resolve(5 + 5);
// console.log('Algum código');

// console.log(promessa);
// promessa
// 	.then((value) => {
// 		console.log(`A soma é ${value}`);
// 		return value;
// 	})
// 	.then((value) => value - 1)
// 	.then((value) => {
// 		console.log(`Agora é ${value}`);
// 	});

// console.log('Outro código');

// 4) Falha na promise
// Promise.resolve(4 * 'asd')
// 	.then((n) => {
// 		if (Number.isNaN(n)) throw new Error('Valores inválidos');
// 	})
// 	.catch((e) => console.error(`Um erro ocorreu: ${e}`));

// 5) Rejeição de promise
function checkNumber(n) {
	return new Promise((resolve, reject) => {
		if (n > 10) resolve('O número é maior que 10');
		else reject(new Error('Número muito baixo'));
	});
}

// const a = checkNumber(20);
// const b = checkNumber(10);
// a.then((v) => console.log(`O resultado é: ${v}`)).catch((e) => console.error(`Deu ruim: ${e}`));
// b.then((v) => console.log(`O resultado é: ${v}`)).catch((e) => console.error(`Deu ruim: ${e}`));

// 6) Resolvendo várias Promises com método all()
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 1000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
	if (30 > 10) resolve(30);
	else reject(new Error('Erro!'));
});

// Promise.all([p1, p2, p3]).then((values) => {
//   const [v1, v2, v3] = values //Os valores de retorno vem num array
//   console.log(v1, v2, v3)
// })

// 7) async function
async function somarComDelay(a, b) {
	return a + b;
}

// somarComDelay(2, 4).then((value) => {
// 	console.log(`O valor da soma é: ${value}`);
// });
// console.log('teste com função assíncrona!');

// 8) async com await
// A função resolveComDelay() não precisa ser declarada como async, pois já retorna uma promise explicitamente
function resolveComDelay() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Resolveu a Promise!');
		}, 2000);
	});
}

async function chamadaAsync() {
	console.log('Chamando a Promise, e esperando o resultado');
	const result = await resolveComDelay();
	console.log(`O resultado chegou: ${result}`);
}
// chamadaAsync()

// 9) Generators
function* generator() {
	console.log('Inicio');
	yield 1;
	console.log('Meio 1');
	yield 2;
	console.log('Meio 2');
	yield 3;
	console.log('Fim');
}

function* idGenerator() {
	let id = 1;
	while (true) {
		yield id++;
	}
}

const gen = generator();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

const idGen = idGenerator();
// console.log(idGen.next().value);
// console.log(idGen.next().value);

function* soma() {
  const x = yield "Digite o primeiro número"
  const y = yield "Digite o segundo número"
  return x + y
}

const g = soma()
console.log(g.next())
console.log(g.next(10)) //envia o 1º número
console.log(g.next(20)) //envia o 2º número e obtém retorno de x + y
