// Exercício 26 - Métodos String
// length

var nome = "Jorge";
console.log(nome.length);

var obj = "bola";
console.log(obj.length);

// indexOf

console.log(nome[0]);

var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));
console.log(frase.indexOf("a"));
console.log(frase.indexOf("a", 10));


// slice 

var roeu = frase.slice(7, 11);
console.log(roeu);

// replace 

var novaFrase = frase.replace("roeu", "comeu");
console.log(novaFrase);