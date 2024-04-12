let metro = prompt ("digite o tamanho em m² a ser pintado");
let tinta = (metro/3);
let galão = Math.ceil (tinta/18);
alert(`você terá que comprar ${tinta}L e isso é equivalente a ${galão} galão`);