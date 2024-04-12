const salarioMinimo = 1412; //valor que não será mudado durante a execulção do programa
let salario = parseFloat (prompt ("digite seu salário"));
let quantSalario = salario / salarioMinimo;
alert (`O usuário recebe ${quantSalario.toFixed(2)} salários mínimos`);
 