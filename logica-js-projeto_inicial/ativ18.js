let temperatura;
let menorTemperatura = 200;
let maiorTemperatura = 1;
let somaTemperaturas = 0;
let media;
let contador = 1;
while(contador<=5){
    temperatura = parseInt(prompt("Digite o valor da temperatura:"));
    if (temperatura < menorTemperatura) {
        menorTemperatura = temperatura;
    }
    if (temperatura > maiorTemperatura){
        maiorTemperatura = temperatura;      
    }
    somaTemperaturas += temperatura;
    console.log(somaTemperaturas);
    if(contador==5){
        break;
    }
    contador++  
}
media = somaTemperaturas/contador
alert(`A maior temperatura é de ${maiorTemperatura} graus e a menor temperatura é de ${menorTemperatura} graus`);
alert(`A média entre as temperaturas é de ${media} graus`);