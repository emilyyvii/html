let numero = parseInt(prompt("Digite um número inteiro:"));
    console.log("Tabuada do " + numero + ":");
    let i = 1;
    while (i <= 10) {
        console.log(numero + " x " + i + " = " + (numero * i));
        i++;
    }