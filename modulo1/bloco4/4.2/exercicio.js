// Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (let number of numbers){
  console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log('A soma é: ' + soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let media = (soma / numbers.length);
console.log('A média é: ' + media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
if(media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o
let maiorNum = numbers[0];
for (let index1 = 1; index1 < numbers.length; index1 += 1) {
  if (numbers[index1] > maiorNum) {
    maiorNum = numbers[index1];
  }
}
console.log('O maior valor do array é: ' + maiorNum);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let impar = 0;
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  if (numbers[index2] % 2 !== 0) {
    impar += 1;    
  }  
}
if (impar === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else{
  console.log(impar + ' números desse array são ímpares');
}
// Utilizando for , descubra qual o menor valor contido no array e imprima-o
let menorNum = numbers[0];
for (let index3 = 1; index3 < numbers.length; index3 += 1) {
  if (numbers[index3] < menorNum) {
    menorNum = numbers[index3];
  }
}
console.log('O menor número do array é: ' + menorNum);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado
let numeros = [];
for (let index4 = 1; index4 <= 25; index4 += 1) {
  numeros.push(index4);
}
console.log(numeros);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
let somaTodos = 0;
for(let index5 = 0; index5 < numeros.length; index5 += 1) {
  somaTodos += numeros[index5];
}
let divide = somaTodos / 2;
console.log(divide);
