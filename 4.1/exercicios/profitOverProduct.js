let custo = 100;
let precoVenda = 200;
let impostoSobreCusto = (custo * 0.2)
let valorCustoTotal = custo + impostoSobreCusto
let lucro = precoVenda - valorCustoTotal
if (custo < 0 || precoVenda < 0) {
  console.log('erro')
}
let vendeMil = 1000 * lucro
console.log(vendeMil)
