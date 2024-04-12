let nome = prompt (" Qual o seu nome?");
let saldo = prompt ("deseja saber o valor do saldo em sua conta?");
 
if (saldo== "Sim" || saldo== "sim"){
    alert (`O valor do saldo na conta do usuário ${nome}, é de R$ 6500,05`);
}
else {
    alert ("ok");
}