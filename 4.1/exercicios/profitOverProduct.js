// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let custo = 100;
let precoVenda = 200;
let impostoSobreCusto = (custo * 0.2);
let valorCustoTotal = custo + impostoSobreCusto;
let lucro = precoVenda - valorCustoTotal;
if (custo < 0 || precoVenda < 0) {
  console.log('erro');
} else {
  let vendeMil = 1000 * lucro;
  console.log(vendeMil);
}
