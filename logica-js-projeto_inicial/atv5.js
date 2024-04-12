let numero = (parseFloat(prompt("Digite um número real")));
let numero2 =(parseFloat(prompt ("Digite um segundo número")));
let operação
let caractere = prompt ("Digite um caractere");
switch ( caractere){
    case "+":
         operação = ( numero + numero2);
    break;
    case "-":
         operação = (numero - numero2);
    break;
    case "*":
         operação = (numero * numero2);
    break;
    case "/":
         operação = (numero / numero2);
   
}
alert (`Resultado: ${numero} ${caractere} ${numero2} = ${operação}`)