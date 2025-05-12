// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let quantidade = Number(prompt('Digite um valor: '));
let preço = 0.30;
let desconto = 0.05;

if(quantidade < 12){
    let total = quantidade * preço;
    console.log(`R$${total.toFixed(2)} é o valor total!`);
}else if (quantidade >= 12){
    total = (preço - desconto) * quantidade;
    console.log(`R$${total.toFixed(2)} é o valor total!`)
}else{
    console.log('Valor inválido!');
}