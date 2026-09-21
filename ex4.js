//Crie um algorotimo e calcule a área da parede
//O valor do pintor e a quantidade de tinta necessaria

const altura = 3
const largura = 5
const valorPintor = 15
const rendimentoTinta = 12 // m2 por balde

const área = altura * largura
const valor = área * valorPintor
const tinta = área / rendimentoTinta


console.log(`O tamanho da área é de ${área}, o valor cobrado pelo pintor, por esta parede será de ${valor.toFixed(2)} reais e a quantidade de tinta necessária será ${Math.ceil(tinta)}`)