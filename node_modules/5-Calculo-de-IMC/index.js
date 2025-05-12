// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

let peso = parseFloat(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite sua altura: '));

let imc = peso / (altura * altura);

imc = imc.toFixed(2); 
let imcValor = parseFloat(imc); 

if (imcValor < 18.5) {
    console.log(`IMC ${imc} - BAIXO PESO`);
} else if (imcValor >= 18.5 && imcValor <= 24.9) {
    console.log(`IMC ${imc} - PESO NORMAL`);
} else if (imcValor >= 25 && imcValor <= 29.9) {
    console.log(`IMC ${imc} - SOBREPESO`);
} else if (imcValor >= 30) {
    console.log(`IMC ${imc} - OBESIDADE`);
} else {
    console.log('Valor inválido!');
}