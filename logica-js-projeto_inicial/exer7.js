//exercicio 7
let maçasCompradas = prompt("Digite a quantidade de maças compradas");
if (maçasCompradas<12){
let valorCompra = (maçasCompradas * 30/100);
alert ("O valor totalda da compra é de, R$" + valorCompra);
}else{
    valorCompra = (maçasCompradas * 25/100);
    alert ("O valor total da compra é de, R$" + valorCompra);
}