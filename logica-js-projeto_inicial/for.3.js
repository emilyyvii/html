let media;
let idades;
let soma = 0;
for(i= 1; i<=5; i++){
   idades = parseFloat(prompt("Digite uma idade"));
   soma = soma += idades;
   if(i==15){
    break
   }
}
 
media = soma/i;
alert(`A soma entre as idades é de ${soma} e a média é de ${media.toFixed(2)}`);