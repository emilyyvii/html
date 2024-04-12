let produto;
let contador = 0;
let valorT = 0;
let dinheiro;
let troco;
while(produto!=0){
    contador++
    produto = parseFloat(prompt("Digite o valor do seu produto:"));
    if(produto==0){
        break;
    }
    alert(`Seu produto ${contador} custa R$${produto}.`);
    valorT += produto
    console.log(`Produto ${contador} : R$${produto}`)
}
alert(`O valor total de sua compra foi de R$${valorT}.`);
console.log(`Valor Total : R$${valorT}.`);
dinheiro = prompt("com quanto dinheiro você vai pagar?");
console.log(`Dinheiro a Pagar : R$${dinheiro}.`);
if(dinheiro>valorT){
    troco=dinheiro-valorT;
    alert(`Você receberá R$${troco} de troco, obrigado volte sempre!`);
    console.log(`O valor final é de R$${valorT} e receberá R${troco} de troco`)
}else{
    if(dinheiro==valorT){
        alert("O dinheiro ficou exatamente o valor da conta, obrigado volte sempre!");
        console.log(`O valor final é de R$${valorT}.`)
    }else{
        alert("Você não possue dinheiro suficiente para efetuar a compra!")
    }
}