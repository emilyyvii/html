//exercicio 10
let idade = prompt ("Digite sua idade.");
console.log (idade);
 if (idade >= 18){
   alert ("Pode votar e pode dirigir");
}else
    if (idade <16){
        alert ("Você não pode nem votar e nem dirigir");
        console.log (idade);
    }else
     if ( idade>=16 && idade<18){
        alert ("Você pode votar mas não pode dirigir");
     }