let numeroSecreto = gerarNumeroSecreto();
let tentativa = 1;

function exibirTextoNaTela (tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto;
}

function exibirTextoInicial(){
exibirTextoNaTela('h1', 'Jogo do Número Secreto da Ari');
exibirTextoNaTela('p', 'Insira um número de 1 a 10');
}
exibirTextoInicial();

function validarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa>1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto){
       exibirTextoNaTela('h1', 'Parabéns diva!');
       exibirTextoNaTela ('p', `Você acertou o número secreto da Ari com ${tentativa} ${palavraTentativa} `);
       document.getElementById('reiniciar').removeAttribute('disabled');
         alterarImagem('img1','./img/feliz.png')
    }
    else if (chute < numeroSecreto){
            exibirTextoNaTela ('h1', 'Errou!');
            exibirTextoNaTela ('p','O número secreto é maior, amore');
            alterarImagem('img1','./img/erro.png')
    }
        else{
            exibirTextoNaTela ('h1', 'Errou!');
            exibirTextoNaTela ('p', 'O número secreto é menor, amore');
            alterarImagem('img1','./img/erro.png')
    }    
    tentativa++;
    limparCampo();
 
}
   
function gerarNumeroSecreto(){
   return parseInt(Math.random() * 10+1);
 
}
 
function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    tentativa = 1;
    exibirTextoInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
    alterarImagem('img1','./img/ari-removebg-preview (2).png')
}
function alterarImagem(objeto, caminhoImagem) {
    document.getElementById(objeto).src = caminhoImagem;
}