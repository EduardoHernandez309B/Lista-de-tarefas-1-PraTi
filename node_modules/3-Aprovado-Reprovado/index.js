// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = Number(prompt('Digite uma nota: '));

if (nota >= 7 && nota <= 10) {
    console.log('APROVADO!');
} else if (nota >= 5 && nota < 7){
    console.log('RECUPERAÇÃo!');
}else if(nota < 5){
    console.log('REPROVADO');
}else{
    console.log('ERRO: Valores aceitos de 0 à 10!')
}