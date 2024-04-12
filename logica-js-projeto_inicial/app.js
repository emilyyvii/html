alert("Bem vindo ao jogo do número secreto");
let numero = 90
let numeroSecreto = parseInt(Math.random() * numero + 1);
console.log (numeroSecreto);
let tentativa= 1;
let chute;
while (chute != numeroSecreto) {
    chute = prompt (`Digite o numero de 1 a ${numero}`);
    if(chute == numeroSecreto){
        break;
    }
    else{
      let maiorMenor = chute > numeroSecreto ? "menor que" : "maior que";
      alert (`O número é, ${maiorMenor} ${chute} `)
    }
    //tentativa = tentativa +1;  
    tentativa ++;

}
let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert (`Parabéns, você acertou o número secreto, ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);