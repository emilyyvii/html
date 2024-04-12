let contador = 1;
let nota;
let media;
let soma = 0;
while(contador <=5){
    numero = parseFloat(prompt("Digite uma nota:"));
    soma += numero;
    if (contador==5);{
        break
    }
}
contador++;
media = soma/contador;
    alert(`A soma entre eles é de ${soma} e a média é de ${media}`); 