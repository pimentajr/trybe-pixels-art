window.onload = function loading() {
  function addClassPixels() {
    const pixels = document.getElementById('pixel-board').children;
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].className = 'pixel';
    }
  }
  addClassPixels();

  function blackSelector() {
    const blackColor = document.getElementById('black');
    blackColor.classList.add('selected');
  }
  blackSelector();

  function classSelector() {
    const colorSelected = document.getElementsByClassName('selected');
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', function (event) {
      for (let index = 0; index < colorSelected.length; index += 1) {
        colorSelected[index].classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  classSelector();

  const pixelBoard = document.getElementById('pixel-board');
  
  pixelBoard.addEventListener('click', function (event) {
    const newColor = document.getElementsByClassName('color selected')[0];
    const color = getComputedStyle(newColor).backgroundColor;
    const eventClick = event.target;
    eventClick.style.backgroundColor = color;
  });


}


  


