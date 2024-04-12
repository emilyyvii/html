let mês = prompt("Digite um mês sendo \n 01 janeiro \n 02 fevereiro \n 03 março \n 04 abril \n 05 maio \n 06 junho \n 07 julho \n 08 agosto \n 09 setembro \n 10 outubro \n 11 novembro \n 12 dezembro")
switch (mês){
    case "02":
        alert ("Este mês tem 28 dias")
        break;
    case "04":
    case "06":
    case "09":
    case "11":
        alert ("Este mês tem 30 dias")
        break;
    default:
        alert ("Este mês tem 31 dias")
        break;
    }


