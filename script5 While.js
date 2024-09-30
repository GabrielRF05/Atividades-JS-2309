let continuar = true
let menorIdade = 200
let maiorIdade = 0
let alturaMenorIdade = 0
let pesoMaiorIdade = 0
let somaIdades = 0;
let quantidadePessoas = 0;

while(continuar){
    let altura = parseFloat(prompt("Insira sua altura: "))
    let peso = parseFloat(prompt("Insira seu peso: "))
    let idade = parseFloat(prompt("Insira sua idade"))

    somaIdades += idade;
    quantidadePessoas++;

    if(menorIdade > idade){
        menorIdade=idade
        alturaMenorIdade = altura
    }

    if(maiorIdade< idade){
        maiorIdade = idade
        pesoMaiorIdade = peso
    }

    continuar = confirm("Deseja continuar?")

}
let mediaIdades = somaIdades / quantidadePessoas;

alert(`A altura da pessoa mais jovem é ${alturaMenorIdade}`)
alert(`O peso da pessoa mais velha é: ${pesoMaiorIdade}`)
alert(`A média de idade das pessoas é: ${mediaIdades}`);
