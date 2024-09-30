let num = parseFloat(prompt("Insira o número fatorial"));
let result = 1;

if (num > 1) {
    for (let i = num; i > 1; i--) {
        result *= i;
    }
}

alert("O resultado do número fatorial é " + result);