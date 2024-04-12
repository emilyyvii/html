let pessoas = parseInt(prompt("Digite o número de pessoas na turma:"));
let soma = 0;
let contador = 1;
while ( contador <= pessoas) {
    let idade = parseInt(prompt(`Digite a idade da pessoa:`));
    soma += idade;
    contador++
}
//Calculo da média
 let media = soma / pessoas;
 
 if (media <= 25.26){
    alert ("A turma é jovem")
}
else{
    if (media >25,26 && media < 60){
        alert ("A turma é adulta");
    }
    else{
        alert ("A turma é idosa")
    }
    }
 