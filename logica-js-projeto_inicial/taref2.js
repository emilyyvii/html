let peso = parseFloat(prompt("Digite o peso dos peixes"))
let sobra
let multa
if (peso >50){
    sobra= peso-50
   multa= sobra*4
   alert (`João passou ${sobra} quilos do limite e recebrá uma multa de: ${multa}`)
}
