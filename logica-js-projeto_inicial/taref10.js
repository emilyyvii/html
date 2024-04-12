let nota1 = parseFloat(prompt ("digite sua primeira nota"));
let nota2 = parseFloat(prompt ("digite sua segunda nota"));
let media = (nota1 + nota2)/2;
 if (media >= 9 && media<= 10){
   alert (` APROVADO-CONCEITO A, aprovado sua média é ${media}`);
 }
 else {
   if (media >=7.5 && media <9){
      alert (`CONCEITO B, aprovado sua média é ${media}`);
   }
   else {
     if (media >=6 && media <= 7.5){
      alert (`CONCEITO C, aprovado sua média é ${media}`);
     }
     else {
      if (media >=4 && media < 6){
         alert (`CONCEITO D, reprovado sua média é ${media}`);
      }
      else {
         alert (`CONCEITO E, reprovado sua média é ${media}`);
      }
   }
   }
}