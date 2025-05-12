// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

let numero = Number(prompt('Digite um valor: '));

if (numero % 2 == 0) {
    console.log(`${numero} é PAR!`);
} else {
    console.log(`${numero} é IMPAR!`);
}