// Exercício 24 - Let e Const
let x = 5; // var x = 5;

const y = 10; // var y = 10;

// y= 12; TypeError: Assignment to constant variable.

x = 12; // var x = 12;
console.log(x);

if(true) {

    let x = 20; // var x = 20;
    console.log("Let IF: " + x);

    const y = 50; // var y = 50;
    console.log("Const IF: " + y);
}

console.log("Let Global: " + x);
console.log("Const Global: " + y);