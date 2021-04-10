function setFirstElement() {
  const paletteList = document.querySelector('#color-palette');
  const firstItem = paletteList.firstElementChild;
  firstItem.className = 'color selected';
}

setFirstElement();

function setNewClass() {
  const colorPalette = document.querySelector('#color-palette');
  const childColorPalette = colorPalette.children;

  colorPalette.addEventListener('click', (event) => {
    for (let index = 0; index < childColorPalette.length; index += 1) {
      childColorPalette[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

setNewClass();

function selectNewColor() {
  const pixelTable = document.querySelector('#pixel-board');

  pixelTable.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('.selected');
    const backgroundColor = getComputedStyle(selectedItem).getPropertyValue('background-color');
    event.target.style.backgroundColor = backgroundColor;
  })
}

selectNewColor();
