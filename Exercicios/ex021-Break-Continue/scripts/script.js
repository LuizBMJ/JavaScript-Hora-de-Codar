for(var i = 10; i > 0; i--) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

console.log("Deu o break")

var x = 10;

while(x < 100) {
    x += 10;

    if(x === 60 || x === 80) {
        console.log("Pulou o " + x);
        continue;
    }

    console.log(x);
}