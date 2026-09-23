//Crie um algoritimo que calcule o valor total de uma locação
//Se a quantidade de dias for maior que 10, aplicar um desconto de 15%
//Aplicar um acrésimo de 20% no valor total se for menor que 5 dias

const dias = 4
const valorDia = 135.33

let calculo = dias * valorDia

if (dias > 10){
    const desconto = calculo * 0.15
    calculo = calculo - desconto
}

if (dias < 5){
    const acresimo = calculo * 0.20
    calculo = calculo + acresimo
}


console.log(`O valor total é ${calculo.toFixed(2)}`)