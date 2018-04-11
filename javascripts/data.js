const loadDinos = require('./dinosaurs');

let dinoArray = [];

function whenDinoesLoad () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  console.log('dinoArray: ', dinoArray);
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
