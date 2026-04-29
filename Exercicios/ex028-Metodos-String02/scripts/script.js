// toLowerCase e toUpperCase | Eles são usados para converter uma string para letras minúsculas ou maiúsculas, respectivamente.

var nome = "Jorge";
console.log(nome.toLowerCase()); // "jorge"
console.log(nome.toUpperCase()); // "JORGE"

// trim | Ele é usado para remover os espaços em branco no início e no final de uma string.

var nomeComEspacos = "   Jorge   ";
console.log(nomeComEspacos); // "   Jorge   "
console.log(nomeComEspacos.trim()); // "Jorge"  


// split | Ele é usado para dividir uma string em um array de substrings com base em um separador especificado.

var frase = "Olá, meu nome é Jorge";
var palavras = frase.split(" ");
console.log(palavras); // ["Olá,", "meu", "nome", "é", "Jorge"]

// lastIndexOf | Ele é usado para encontrar a última ocorrência de um caractere ou substring em uma string e retorna o índice dessa ocorrência.

var texto = "O rato roeu a roupa do rei de Roma";
console.log(texto.lastIndexOf("r")); // 36, porque a última ocorrência de "r" está na palavra "Roma"