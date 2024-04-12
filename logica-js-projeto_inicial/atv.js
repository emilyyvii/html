const produto = parseInt(prompt("Digite o Código do produto"));
 
switch (produto){
    case 1:
        alert ("Alimento não-perecível");
        break
    case 2:
        alert ("Alimento perecível");
        break
    case 3:
        alert ("Vestuário");
        break
    case 4:
        alert ("Higiene Pessoal");  
        break
    case 5:
        alert ("Limpeza e Utensilíos Domésticos");  
       break
    default:
        alert ("Código inválido");
 
}