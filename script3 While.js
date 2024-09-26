let num = 0
let soma = 0

num = parseFloat(prompt("Insira alguns numeros positivos, caso digite zero, o código será parado e será mostrado a soma!"));

while(num != 0 && num >0){
    soma += num
    num = parseFloat(prompt("Proximo numero"))
}

alert("A soma é " + soma)