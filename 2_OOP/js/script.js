//1) Métodos
const animal = {
	nome: 'Cachorro',
	latir: () => console.log('Au au')
};
//2) animal.latir();

//3) Uso do this
const pessoa = {
	nome: 'Gabriela',
	getNome: function () {
		return this.nome;
	},
	setNome: function (nome) {
		this.nome = nome;
	}
};
pessoa.setNome('Isabelle');
// console.log(pessoa.getNome());

//4) Prototype
const text = 'qwerty';
// console.log(Object.getPrototypeOf(text));
const arr = [];
// console.log(Object.getPrototypeOf(arr));

//5) Classes básicas (Herança)
const cachorro = {
	raca: null,
	patas: 4
};
const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemão';
// console.log(pastorAlemao);

const bulldog = Object.create(cachorro);
bulldog.raca = 'Bulldog';
// console.log(bulldog);

//6) Função como Classe -> Construtor
function CriarCachorro(nome, raca) {
	const cachorro = Object.create({});
	cachorro.nome = nome;
	cachorro.raca = raca;
	return cachorro;
}

const bob = CriarCachorro('Bob', 'Vira lata');
// console.log(bob);
// console.log(Object.getPrototypeOf(bob));

//7) Funções como classe
function Cachorro(nome, raca) {
	this.nome = nome;
	this.raca = raca;
}
const husky = new Cachorro('Jack', 'Poodle');
// console.log(husky);

//8) Métodos na função construtora
Cachorro.prototype.uivar = function () {
	console.log('Auuuuuuuu!!');
};
// husky.uivar();

//9) Classes em ES6
class CachorroClasse {
	constructor(nome, raca) {
		this.nome = nome;
		this.raca = raca;
	}
	describe() {
		console.log(`Esse cachorro se chama ${this.nome} e é um ${this.raca}`);
	}
}

const jeff = new CachorroClasse('Jeff', 'Labrador');
// console.log(jeff);
// jeff.describe();

//10) Criando um novo atributo depois de ter a classe declarada
CachorroClasse.prototype.patas = 4;

//11) Override
class Humano {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}
}
const david = new Humano('David', 23);
// console.log(david);

// Se o atributo da classe é undefined, o valor mostrado será o que foi definido em prototype
// Humano.prototype.idade = "Não definida"
// console.log(david.idade)
// console.log(Humano.prototype.idade)

//12) Symbol
class Aviao {
	constructor(marca, turbinas) {
		this.marca = marca;
		this.turbinas = turbinas;
	}
}

const asas = Symbol();
const pilotos = Symbol();
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao('Boeing', 10);
// console.log(boeing);
// console.log(boeing[asas]); //2
// console.log(boeing[pilotos]); //3

//13) Getters e Setters
class Post {
	constructor(titulo, descricao, tags) {
		this.titulo = titulo;
		this.descricao = descricao;
		this.tags = tags;
	}
	get exibirTitulo() {
		return `Você está lendo ${this.titulo}`;
	}
	set adicionarTags(tags) {
		const tagArray = tags.split(', ');
		this.tags = tagArray;
	}
}

const myPost = new Post('Algum post', 'É um post sobre programação');
// console.log(myPost.exibirTitulo)
myPost.adicionarTags = 'Programação, JavaScript, React';
// console.log(myPost)

//14) Herança
class Mamifero {
	constructor(patas) {
		this.patas = patas;
	}
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas)
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark")
console.log(shark)

//15) instanceof
console.log(shark instanceof Lobo) //true
console.log(shark instanceof Mamifero) //true
console.log(shark instanceof Cachorro) //false
