let letra = prompt ("Digite M para mascilino ou F para feminino:");
letra = letra.toUpperCase
switch (letra){
    case "M":
        alert ("Você é do sexo Masculino!");
    break;
    case "F":
        alert ("Você é do sexo Feminino!");
        break;
    default:
        alert ("Sexo inválido!");
}
 