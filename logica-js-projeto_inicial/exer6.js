// exercicio 6
let peso = prompt (" digite o seu peso.");
console.log (peso)
let altura = prompt (" digite a sua altura.");
console.log (altura)
let imc= (peso / (altura * altura));
if (imc < 18.5){
    alert ("Você está abaixo do peso!")
}
else{
    if (imc >= 18.5 && imc <= 24.9){
        alert ("Você está saudável!");
    }
    else{
        if (imc >= 25 && imc <= 29.9){
            alert ("Você está sobrepeso");
        }
        else{ 
            if (imc >= 30 && imc < 39.9){
                alert ("Você está obeso(a)");
            }
            else{ 
                alert ("Você está com alto risco de obesidade");
            }
        }
    }
}
