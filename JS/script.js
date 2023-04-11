/*
let A = Number(prompt("Digite o valor de A: "));
let B = Number(prompt("Digite o valor de B: "));
let C = Number(prompt("Digite o valor de C: "));

teste = A + B + C;
console.log(`O resultado da conta é: ${teste}`)
*/

let botao = document.getElementById('btn')
botao.addEventListener('click', function(){
    let fundo1 = window.document.body;
    fundo1.style.background = '#654eff';
})

let botaoescuro = document.getElementById('btnescuro');
botaoescuro.addEventListener('click', function(){
    let fundo2 = window.document.body;
    fundo2.style.background = '#1C1C1C';
})

let botaoclaro = document.getElementById('btnclaro');
botaoclaro.addEventListener('click', function(){
    let fundo3 = window.document.body;
    fundo3.style.background = '#C0C0C0';
})