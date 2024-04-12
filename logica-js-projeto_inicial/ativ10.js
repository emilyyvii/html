//Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.
 
let algoritmo = parseInt (prompt('Digite um numero inteiro para saber seu antecessor e sucessor'));
let sucessor = (algoritmo +1)
let antecessor = (algoritmo -1)
alert (`O Sucessor do seu numero é ${sucessor} e o antessesor do seu numero é ${antecessor}`)