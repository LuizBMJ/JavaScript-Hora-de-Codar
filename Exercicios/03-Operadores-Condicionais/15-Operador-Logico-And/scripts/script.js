// Exercício 15 - Operador Lógico And
var idade = 16;
var nome = "João";


if (idade >= 18 && nome === "João") {
    console.log("O joão pode entrar na aula de esgrima")
} else {
    console.log("Este não é o joão ou ele é menor de idade, ele não pode entrar na aula de esgrima")
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Todas as condições são verdadeiras")
} else if(nome === "João" && idade >= 14) {
    console.log("O nome é João e a idade é maior ou igual a 14")
}