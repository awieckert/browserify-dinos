const loadDinos = require('./dinosaurs');
const printToDom = require('./dom');

let dinoArray = [];

function whenDinoesLoad () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
};

function badDinos () {
  console.error('shit broke');
};

const initializer = () => {
  loadDinos(whenDinoesLoad, badDinos);
};

const getDinos = () => {
  return dinoArray;
};

module.exports = {
  initializer,
  getDinos,
};
