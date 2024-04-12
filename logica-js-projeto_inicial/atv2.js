let codigo;
let qntProduto; 
let totalPagar;
let totalFinal= 0;
while (codigo !=0){
    codigo = parseInt(prompt("Escolha um código: \n 100 cachorro quente; \n 101 Bauru simples; \n 102 Bauru com ovo; \n 103 Hamburguer; \n 104 cheeseburguer; \n 105 refrigerante;   "))
    if (codigo==0){
        break;
}
qntProduto= prompt ("Quantos você deseja:")
    switch (codigo) {
    case 100:
    totalPagar = qntProduto * 1.70
        break;
    case 101:
    totalPagar = qntProduto * 2.30
        break;
    case 102:
    totalPagar = qntProduto * 2.60
        break;
    case 103:
    totalPagar = qntProduto * 2.40
        break;
    case 104:
    totalPagar = qntProduto * 2.50
        break;
    case 105:
    totalPagar = qntProduto * 1.00
    break;
default:
    alert ("código inválido"); 
}
totalFinal += totalPagar;
}
alert (`O valor total dos produtos é de R$ ${totalFinal.toFixed(2)}`);