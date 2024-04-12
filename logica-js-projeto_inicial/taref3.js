let hora = parseFloat(prompt("Quantos você ganha por hora?"))
let horaMês = parseFloat(prompt ("Quantas horas você trabalha por mês"))
let salariobruto
let salarioliquido
let inss
let ir
let sindicato
salariobruto = horaMês*hora 
inss = salariobruto * 0.08
ir = salariobruto * 0.11
sindicato = salariobruto * 0.05
salarioliquido = (((salariobruto - ir) -inss) -sindicato)
alert (`O salário líquido foi de R$${salarioliquido}\n O INSS foi de R$${inss}\n O IR foi de R$${ir}\n e o Valor do Sindicato foi de R$${sindicato}`)
