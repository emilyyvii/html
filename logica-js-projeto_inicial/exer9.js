//exercicio 9
let altura = (prompt("Digite sua altura em metros:"));
let sexo = (prompt("Digite seu sexo (1 para feminino, 2 para masculino):"));
let pesoIdeal;
if (sexo == 1) {
    pesoIdeal = 62.1 * altura - 44.7;
    alert("Seu peso ideal é: " + pesoIdeal  + " kg");
} else if (sexo == 2) {
    pesoIdeal = 72.7 * altura - 58;
    alert("Seu peso ideal é: " + pesoIdeal + " kg");
}