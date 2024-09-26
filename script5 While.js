let continuar = true
let menorIdade = 0
let maiorIdade = 0
let alturaMenorIdade = 0
let pesoMaiorIdade = 0

while(continuar){
    let altura = parseFloat(prompt("Insira sua altura: "))
    let peso = parseFloat(prompt("Insira seu peso: "))
    let idade = parseFloat(prompt("Insira sua idade"))

    continuar = confirm("Deseja continuar?")

}
if(continuar=false){
    menorIdade = Math.min(idade)
    alert("A pessoa mais jovem tem " + menorIdade)
}





