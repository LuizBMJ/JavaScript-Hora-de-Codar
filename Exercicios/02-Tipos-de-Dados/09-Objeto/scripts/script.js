// Exercício 09 - Objeto

var obj = {
    nome: "Matheus",
    idade: 29,
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log("O meu nome é " + obj.nome);

obj.nome = "Pedro";

console.log(obj.nome);
console.log(obj);

obj.graduacao = true;

console.log(obj);