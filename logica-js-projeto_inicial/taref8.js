let valorHora = parseFloat(prompt("Digite o valor da sua hora de trabalho:"));
let horasTrab = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));
//Cálculo salário bruto
let salarioBruto = valorHora*horasTrab;
let porcentagemIr;
// cálculo desconto IR
let descontoIR;
if (salarioBruto <= 900){
   porcentagemIr = "0%"
   descontoIR = salarioBruto * 0
}
else{
  if (salarioBruto >900 && salarioBruto <=1500) {
    porcentagemIr = "5%"
    descontoIR = salarioBruto* 0.05;
 
  }
  else{
    if (salarioBruto >1500 && salarioBruto <=2500){
        porcentagemIr = "10%"
        descontoIR = salarioBruto* 0.10;
    }
    else{
        porcentagemIr = "20%"
        descontoIR = salarioBruto * 0.20;
 
    }
       
 
 
  }
   
}
 
 
// cálculo de INSS,FGTS
let descontoINSS = salarioBruto * 0.10;
let valorFGTS = salarioBruto * 0.11;
 
// cálculo Descontos
let descontos = descontoINSS + descontoIR;
let salarioLiquido = salarioBruto - descontos;
 
alert(` \n Salário Bruto: (${valorHora} * ${horasTrab}) : R$ ${salarioBruto.toFixed(2)} \n (-) IR (${porcentagemIr}) : R$ ${descontoIR.toFixed(2)} \n (-) INSS ( 10%) : R$ ${descontoINSS.toFixed(2)} \nFGTS (11%) : R$ ${valorFGTS.toFixed(2)} \n Total de descontos : R$ ${descontos.toFixed(2)} \n Salário Liquido : R$ ${salarioLiquido.toFixed(2)}      `)