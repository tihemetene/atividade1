//1#######################################################
const nome = "Tiago Henrique";
console.log("1ª. ", nome);
//2#######################################################
let estaChovendo = true;
console.log("2ª. ", estaChovendo);
//3#######################################################
let ano = new Date().getFullYear();
console.log("3ª. ", ano);
//4#######################################################
let idade = 23;
console.log("4ª. antes: ", idade);
idade = 24;
console.log("depois: ", idade);
//5#######################################################
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("5ª. ", lista);
//6#######################################################
let aluno = {
  nome: "Tiago",
  ano_de_nascimento: 1997,
  curso: "Ciência da computação"
};
console.log("6ª. ", aluno);

let aluno2 = {
  nome: "João",
  ano_de_nascimento: 2000,
  curso: "Ciência da computação"
};

let aluno3 = {
  nome: "Rodrigo",
  ano_de_nascimento: 1998,
  curso: "Administração"
};
//7#######################################################
let getDados = {
  nome,
  estaChovendo,
  ano,
  idade
};
console.log("7ª. ", getDados);
//8#######################################################
let x = 10;
x *= 123;
console.log("8ª. (10 * 123) =", x);
//9#######################################################
const listaAlunos = { aluno, aluno2, aluno3 };
console.log("9ª. ", listaAlunos);
//10######################################################
let number = 20;
console.log("10ª. antes da multiplicação: ", number);
number *= 42;
console.log("após: (20 * 42)", number);
