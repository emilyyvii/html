let valorProduto = parseInt (prompt ("Qual valor do seu produto?"));
alert("Se a forma de pagamento for no dinheiro ou pix digá 1, se for a vista no cartão diga 2, se for parcelado duas vezes diga 3, e se for mais do que duas vezes diga 4")
let formaPagament = prompt ("Qual será a forma de pagamento?");
if (formaPagament == "1"){ 
   valorProduto = valorProduto - valorProduto*0.15
   alert (`O valor à pagar será de: ${valorProduto}`) 
}
else{
    if (formaPagament == "2" ){
        valorProduto =valorProduto - valorProduto*0.1
        alert(`O valor à pagar será de: ${valorProduto}`)
    }
    else{
        if (formaPagament == "3"){
        valorProduto= valorProduto/2 
         alert (`O valor da parcela será de: ${valorProduto}`)
        }
        else{
            let juro 
            juro = valorProduto *10/100 
            valorProduto = valorProduto + juro
            alert (`O valor à pagar será de: ${valorProduto}`)
    
        }
    }
}
 