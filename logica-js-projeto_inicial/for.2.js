let numero = parseInt(prompt("Digite um número entre 1 e 10"))
 if (numero <= 10){
    for (let i=0; i<=10; i++){
        let conta = numero * i;
        console.log (`${numero} X ${i} = ${conta}`)
    }
}
else {
    alert ("Número inválido!")
}
