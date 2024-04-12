//exercicio 8
let numeroLados = prompt("Digite o número de lados do polígono:");
let area
if (lado <3){
    alert ("Não é um polígono")
}
else{
let medidaLado = prompt("Digite a medida do lado do polígono em cm:");
if (numeroLados === 3) {
    let altura = prompt ("Qual a altura do triângulo")
    area = ((medida*altura)/2);
    alert (`O seu polígono é um triangulo de área ${area}`);
}
else{
    if (numeroLados == 4){
        area ==(medidaLado *medidaLado);
        alert (` O seu polígono é um triângulo de área ${area}`);
    }
    else{
        if (lado ==5){
            let apotema = prompt("Qual a apotema do polígono")
            area = ((medida*5)*apotema)/2;
            alert (`O seu polígono é um pentágono de área ${area}`);
        }
        else{
            alert ("Polígono não identificado");
            }
        }
    }
}
