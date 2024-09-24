let num = parseFloat(prompt("Insira o numero fatorial"))
let result = 1


if(num > 1){
    while(num !=1 ){
        result *= num;
        num--;
    }
}

alert("O resultado do numero fatorial é " + result)
