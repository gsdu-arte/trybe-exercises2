// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let a = 90;
let b = 60;
let c = 30;
let soma = (a + b + c);
if (a <= 0 || b <= 0 || c <= 0) {
  console.log('erro');
} 
if (soma === 180) {
  console.log('É triângulo');
} else if (soma !== 180 && a > 0 && b > 0 && c > 0) {
  console.log('Não é triângulo')
}

a = 60;
b = 60;
c = 30;
soma = (a + b + c);
if (a <= 0 || b <= 0 || c <= 0) {
  console.log('erro');
} 
if (soma === 180) {
  console.log('É triângulo');
} else if (soma !== 180 && a > 0 && b > 0 && c > 0) {
  console.log('Não é triângulo')
}

a = -90;
b = 60;
c = 30;
soma = (a + b + c);
if (a <= 0 || b <= 0 || c <= 0) {
  console.log('erro');
} 
if (soma === 180) {
  console.log('É triângulo');
} else if (soma !== 180 && a > 0 && b > 0 && c > 0) {
  console.log('Não é triângulo')
}
