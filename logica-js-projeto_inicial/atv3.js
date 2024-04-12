let letra = prompt("Digite uma letra:");
    letra = letra.toLowerCase();
    switch (letra){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            alert(`${letra} é uma vogal.`);
        break;
        default:
            alert(`${letra} é uma consoante.`);  
    }