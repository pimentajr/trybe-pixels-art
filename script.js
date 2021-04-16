/* const mainPage = document.getElementById('main'); */
// 4
// Criar uma função que cria um board novo
function createTable(size) {
  let pixelBoard = document.getElementById('pixel-board');
  for( let line = 0; line < size; line += 1) {
    let tableLine = document.createElement('tr');
    for (let colum = 0; colum < size; colum += 1) {
      let tableColum = document.createElement('td');
      tableColum.className = 'pixel';
      tableLine.appendChild(tableColum);
    }
    pixelBoard.appendChild(tableLine);
  }
}

let input = document.getElementById('board-size');
createTable(input.value);

const colors = document.getElementsByClassName('color');

// Ex 7
function removeClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

function addClass(event) {
  event.target.classList.add('selected');

}

function configColorPallet(pallet) {
  for (let item = 0; item < pallet.length; item += 1) {
    const eventItem = pallet[item];
    eventItem.addEventListener('click', removeClass);
    eventItem.addEventListener('click', addClass);
  }
}

const colorPAllet = document.getElementsByClassName('color');
configColorPallet(colorPAllet);

// ex 8 ------ Refazer essa questão sozinho.
// criar um evento que quanto o pixel é clicado ele ganha a cor do selected
function colorPixel(self) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  const color = getComputedStyle(colorSelected).backgroundColor;
  self.target.style.backgroundColor = color;
}

function appendcolorPixelListener(pixels) {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', colorPixel);
  }
}

let pixelsBoard = document.getElementsByClassName('pixel');
appendcolorPixelListener(pixelsBoard);

/* const colorPallet = document.getElementById('color-palette');
const selectedColor = colorPallet.getElementsByClassName('selected')[0];
function colorPixel(event) {
  console.log('epaa')
  const color = getComputedStyle(selectedColor).backgroundColor;
  const pixelSelected = event.target;
 event.target.style.backgroundColor = color;
} */
// ex 9
/* const pixels = document.getElementsByClassName('pixel'); */

/* function clearPixel() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
} */

// Regras de negocio



/* for (let px = 0; px < pixels.length; px += 1) {
  pixels[px].addEventListener('click', colorPixel);
} */

/* const limpar = document.getElementById('clear-board');
limpar.addEventListener('click', clearPixel);
 */
// ex 10
// Função feita a partir da análise do codigo do colega Jonatha Braga
/* function validationNumber(number) {
  if (number < 5) {
    return 5;
  }
  if (number > 50){
    return 50;
  } 
} */
// Criar uma função que deleta o board.
/* function deleteByID(id) {
  const tagToDelete = document.getElementById(id);
  const parentNode = tagToDelete.parentNode;
  parentNode.removeChild(tagToDelete);
  return tagToDelete;
}
console.log(deleteByID('pixel-board')); */


/* console.log(boardGenerate(8));
mainPage.appendChild(boardGenerate(8)) */
// Adicionar aos pixels reação ao click para serem pintados.

// Adicionar a boardGenerate ao DOM com todas os pixels brancos - 
// Criar uma função que adiciona eventos e classes em um element criado
// Criar uma funcção que adciona o codigo no dom
// Criar evento que reage ao click do botão VQV

/* function boardGenerate() {
  const input = document.querySelector('#board-size');
  const table = document.getElementById('pixel-board');
  if (input.value === '') {
    alert('Board inválido!');
    return null;
  }
 
  for (let index = 0; index <  validationNumber(input.value); index += 1) {
    const newTable = document.createElement('tr');
    newTable.setAttribute('id','pixel-board');
    table.appendChild(newTable);
    for (let index2 = 0; index2 < input.length; index2 += 1) {
      const colum = document.createElement('td');
      colum.classList.add('pixel');
      newTable.appendChild(colum);
    }
  }
}

board.addEventListener('click', boardGenerate);
 */
// Voce parou na linha 35 colocando os loops for em funções para poder reutiliza-las na função que irá remodelar o board na tela com as reações e estilizações..............
