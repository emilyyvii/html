let nomeUser = prompt("Digite o seu nome de usuário:")
let senha = prompt("Digite sua senha:")

while (senha == nomeUser){
    alert ("Erro")
    nomeUser = prompt ("Digite o seu nome de usuário:")
    senha = prompt("Digite sua senha:")
}
