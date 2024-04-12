let Jair = 0;
let Carlos = 0;
let Neves = 0;
let branco = 0;
let nulo = 0;
let voto;
let contador = 0;
let porcNulo;
let porcBranco;
let vencedor;
while(voto!=6){
 voto = parseInt(prompt("Vote no seu candidato :\n1-Jair Rodrigues\n2-Carlos Luz\n3-Neves Rocha\n4-Branco\n5-Nulo\n6- para finalizar"))
 if(voto==6){
    break;
 }
 contador++
switch(voto){
    case 1 :
        Jair += 1
            break;
    case 2 :
        Carlos += 1
            break;
    case 3 :
        Neves += 1
            break;
    case 4 :
        branco += 1
        break;
    case 5 :
        nulo += 1
        break;
    default :
        alert("Candidato inválido!")
}
}
alert(`O número de votos de cada candidato:\nJair Rodrigues : ${Jair}\nCarlos Luz : ${Carlos}\nNeves Rocha : ${Neves}\nBranco : ${branco}\n Nulo : ${nulo}.`);
porcNulo=(nulo/contador)*100
alert(`A porcentagem de votos nulos equilave a ${porcNulo.toFixed(2)}%`);
porcBranco=(branco/contador)*100
alert(`A porcentagem de votos brancos equivale a ${porcBranco.toFixed(2)}%`);
if (Jair > Carlos && Jair > Neves) {
    alert(`O candidato vencedor é Jair com ${Jair} votos!`);
}else{
    if(Carlos > Jair && Carlos > Neves){
        alert(`O candidato vencedor é Carlos com ${Carlos} votos!`);
    }else{
    if(Neves > Carlos && Neves > Jair){
        alert(`O candidato vencedor é Neves com ${Neves} votos!`);
    }
}
}