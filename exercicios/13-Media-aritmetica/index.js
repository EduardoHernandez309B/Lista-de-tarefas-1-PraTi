// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

let numeroDecimal;

while (numeroDecimal !== 0) {
    numeroDecimal = Number(prompt('Digite um número decimal (ou 0 para encerrar): '));
    if (numeroDecimal == 0) {
        break;
    }
    soma += numeroDecimal;
    contador++;
}

if (contador == 0) {
    console.log('Nenhum número foi digitado. Não é possível calcular a média.')
} else {
    let media = soma / contador;
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
}