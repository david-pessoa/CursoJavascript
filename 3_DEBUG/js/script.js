//1) Uso do strict
'use strict';

// Não é permitida a iniciação de variáveis que não oram declaradas com o var, let ou const
// newVar = 'teste';
// // Correto
const newVar = 'teste';

// // Não é permitida a declaração de variáveis com nomes de palavras reservadas
// const undefined = 100;
// // Correto
const notDefined = 2;

// // Não é permitida a remoção de propriedades de um array, por exemplo
// delete [].length;

//2) uso do debugger
let c = 1;
let d = 2;

if (c === 1) c = d + 2;
// debugger;

for (let i = 0; i < d; i++) {
	c += 2;
}
// debugger

//3) Tratamento de dados
function checkNumber(n) {
	// Usa regex com flag global para trocar todos os caracteres ("." e ",") e não apenas a 1ª ocorrência
	n = n.replace(/\./g, '').replace(/\,/g, '.');
	const result = Number(n);
	if (Number.isNaN(result)) {
		console.log('Valor incorreto!');
		return;
	}
	console.log('Valor correto');
}
checkNumber('1.000.000,00');

//4) Exceptions - Tratamento de erros
let x = 10;
//if (x !== 11) throw new Error('O valor de x não pode ser diferente de 11!');

// try - catch - finally
try {
	const value = checkNumber('asd');
	if (!value) throw new Error('Valor inválido!');
} catch (e) {
	console.error(`Erro no programa: ${e}`);
} finally {
	console.log('Aeeee! O erro acabou :)');
}
