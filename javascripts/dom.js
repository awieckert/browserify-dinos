const outputDiv = document.getElementById('dinos');

const domString = (dinos) => {
  let stringToPrint = '';
  dinos.forEach((dino) => {
    stringToPrint += `<h2>${dino.type}</h2>`;
  });
  return stringToPrint;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
};

module.exports = printToDom;
