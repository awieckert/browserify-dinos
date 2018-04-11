const loadDinos = (loadFun, errorFun) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFun);
  myRequest.addEventListener('error', errorFun);
  myRequest.open('GET', '../db/dinosaurs.json');
  myRequest.send();
};

module.exports = loadDinos;
