// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

let piece = 'KniGHt'
let chessPiece = piece.toLowerCase()
switch (chessPiece) {
  case 'king':
    console.log('move one square in any direction');
    break;
  case 'queen':
    console.log('It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically (like a rook), can also move as many squares as it likes diagonally (like a bishop)');
    break;
  case 'bishop':
    console.log('Move diagonally as many squares as it likes');
    break;
  case 'knight':
    console.log('moves in an "L-shape"');
    break;
  case 'rook':
    console.log('Move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically');
    break;
  case 'pawn':
    console.log('Move forward one or two squares');
    break;
  default:
    console.log('Wrong entry');
    break;
}
