let sala = parseFloat (prompt ('Qual seu sálario atual?'));
let conta;
let um;
let dois;
let tres;
let quatro;
if (sala <= 280){
    um = sala*0.20;
    conta =parseFloat (sala+um);
    alert (`Seu antigo sálario era: ${sala} \n O reajuste foi de: ${um} (20%) \n  Após  a sua remuneração, o sálario ficou: ${conta}`);
}
else {
    if (sala > 280 && sala <= 700) {
        dois = sala*0.15;
        conta = parseFloat (sala+ dois);
        alert (`Seu antigo sálario era: ${sala} \n O reajuste foi de: ${dois} (15%) \n  Após  a sua remuneração, o sálario ficou: ${conta}`);
    }
    else {
        if (sala > 700 && sala <= 1500) {
            tres = sala*.10;
            conta =parseFloat (sala+ tres);
            alert (`Seu antigo sálario era: ${sala} \n O reajuste foi de: ${tres} (10%) \n  Após  a sua remuneração, o sálario ficou: ${conta}`);
        }
        else {
            if (sala > 1500) {
                quatro = sala*0.05;
                conta =parseFloat (sala+ quatro);
                alert (`Seu antigo sálario era: ${sala} \n O reajuste foi de: ${quatro} (5%) \n  Após  a sua remuneração, o sálario ficou: ${conta}`);
            }
        }
    }
}

