// 14.Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let numero = Number(prompt('Informe um numero inteiro não negativo: '));

if(isNaN(numero) || numero < 0){
    console.log('FPor favor, digite um número inteiro não negativo.');
}else{
    let fatorial = 1;

    for(let i = 2; i <= numero; i++){
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é ${fatorial}`);
}

