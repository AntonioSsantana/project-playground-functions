// Desafio 1
function compareTrue(parametro1, parametro2) {

  if (parametro1 === true && parametro2 === true) {

    return true;
  } else {

    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {

  let resultado = (base * height) / 2;
  return resultado;
} console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  
  let palavraSeparada = string.split(' ');
  return palavraSeparada
} console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
