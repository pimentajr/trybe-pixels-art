const colorPalete = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');

function changesToBlack() {
  if (colors[0].style.backgroundColor !== 'black') {
    colors[0].style.backgroundColor = 'black';
  }
}
changesToBlack();

function defineInitialSelectedColor() {
  colors[0].className = 'color selected';
}
defineInitialSelectedColor();

function colorChangeForBlack(event) {
  const selecionedColor = document.querySelector('#color-palette').children;
  const selectedClassEvent = event;
  for (let index = 0; index < selecionedColor.length; index += 1) {
    selecionedColor[index].setAttribute('class', 'color');
  }
  selectedClassEvent.target.className += ' selected';
}
colorPalete.addEventListener('click', colorChangeForBlack);

const coloringTable = document.querySelector('#pixel-board');
function addColorPixel(event) {
  const color = document.querySelector('.selected');
  const changeColor = getComputedStyle(color).backgroundColor;
  const coloringTableEvent = event.target;
  coloringTableEvent.style.backgroundColor = changeColor;
}
coloringTable.addEventListener('click', addColorPixel);

const cleanButton = document.querySelector('#clear-board');
const pixel = document.querySelectorAll('.pixel');
const whithoutColor = 'white';
function cleanColor() {
  for (let index = 0; index < pixel.length; index += 1) {
    while (pixel[index].style.backgroundColor !== whithoutColor) {
      pixel[index].style.backgroundColor = whithoutColor;
    }
  }
}
cleanButton.addEventListener('click', cleanColor);

window.onload = function () {
  function removeTable() {
    const table = document.querySelector('#pixel-board');
    document.body.removeChild(table);
  }
  removeTable();

  function reinsertTable() {
    
  }
  reinsertTable();
}
