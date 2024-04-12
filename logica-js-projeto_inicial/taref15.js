let numero;
let dentro = 0;
let fora = 0;
for (let i = 1; i<=10; i++){
    numero = parseInt(prompt("Digite seus números:"));
    if(numero>=10 && numero<=20){
        alert("O número esta entre 10 e 20!");
        dentro++;
    }else{
        alert("O número esta fora de 10 e 20!");
        fora++;
    }
}
alert(`Você digitou ${dentro} números entre 10 e 20, e ${fora} números fora de 10 e 20!`);
