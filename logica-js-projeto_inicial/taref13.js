let id;
let contador = 0;
let peso;
let altura;
let alturaMaior = 1;
let alturaMenor = 200;
let pesoMaior = 1;
let pesoMenor = 200;
let mediaAltura;
let mediaPeso;
let somaPeso = 0;
let somaAltura = 0;
let somaMedia = 0;
let maiorIDaltura;
let menorIDaltura;
let maiorIDpeso;
let menorIDpeso;
while(id!=0){
    id = parseInt(prompt("Digite o valor do seu ID pessoal, ou 0 para sair:"));
    if(id==0){
        break;
    }
    contador++
    peso = parseFloat(prompt("Digite seu peso:"));
    somaPeso += peso
    console.log(somaPeso)
    altura = parseFloat(prompt("Digite sua altura:"));
    somaAltura += altura
    console.log(somaAltura)
    if (altura < alturaMenor) {
        alturaMenor = altura;
        menorIDaltura = id;
        console.log(alturaMenor)
        console.log(menorIDaltura)
    }
    if (altura > alturaMaior){
        alturaMaior = altura;  
        maiorIDaltura = id;  
        console.log(alturaMaior)  
        console.log(maiorIDaltura)
    }
    if (peso < pesoMenor) {
        pesoMenor = peso;
        menorIDpeso = id;
        console.log(pesoMenor)
        console.log(menorIDpeso)
    }
    if (peso > pesoMaior){
        pesoMaior = peso;  
        maiorIDpeso = id;  
        console.log(pesoMaior)
        console.log(maiorIDpeso)  
    }
}
mediaPeso = (somaPeso/contador);
mediaAltura = (somaAltura/contador);
alert(`O código do cliente mais alto é ${maiorIDaltura} medindo ${alturaMaior} metros.\n O código do cliente mais baixo é ${menorIDaltura} medindo ${alturaMenor} metros.\n O código do cliente mais pesado é ${maiorIDpeso} pesando incríveis ${pesoMaior} quilos.\n O código do cliente mais leve é ${menorIDpeso} pesando ${pesoMenor}.\n A média do peso de todos os clientes é de ${mediaPeso.toFixed(2)} quilos.\n A média da altura de todos os clientes é de ${mediaAltura.toFixed(2)} metros.`);
