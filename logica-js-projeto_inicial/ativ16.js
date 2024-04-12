let numero;
let contador = 1
let qntdpar = 0
let qntdimpar = 0
while(contador<=10){
    numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero % 2 == 0){
        qntdpar ++;

    }
    else{
        qntdimpar ++;
    }
    contador++;
}
alert (`A quantidade de número pares é ${qntdpar}) e impares ${qntdimpar}`)
    