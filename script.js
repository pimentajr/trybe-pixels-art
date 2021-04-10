const linesUsed = 5;

function colorBoxes() {
  const boxes = document.querySelectorAll('.color');
  const black = boxes[0];
  black.style.backgroundColor = 'black';
  const blue = boxes[1];
  blue.style.backgroundColor = 'lightblue';
  const grey = boxes[2];
  grey.style.backgroundColor = 'lightgrey';
  const green = boxes[3];
  green.style.backgroundColor = 'lightgreen';
}

colorBoxes();

function pixelBoard() {
  const lineBoard = document.querySelectorAll('.line');
  for (let i = 0; i < linesUsed; i += 1){
    const pixelBox = document.createElement('div');
    pixelBox.className = 'pixel';
    pixelBox.style.backgroundColor = 'white';
    lineBoard[i].appendChild(pixelBox);
  }
}

for (let i = 0; i < linesUsed; i += 1) {
  pixelBoard();
}

window.onload = function() {
  let locateBlack = document.querySelector('.color');
  locateBlack.classList.add('selected');
  let selectedColor = document.querySelector('.selected');
  selectedColor.addEventListener('click',function() {
    //document.body.style.backgroundColor =  'black';
  })
}

function giveAndRemoveSelec() {
  function removeSelected() {
    let boxes = document.querySelectorAll('.color');
    for (let i = 0; i < boxes.length; i += 1) {
      boxes[i].addEventListener('click', function() {
        let boxWithSelec = document.querySelector('.selected');
        boxWithSelec.classList.remove('selected');
          
      })
    }
      
  }
  removeSelected();

  function giveSelected() {
    let boxes = document.querySelectorAll('.color');
    for (let i = 0; i < boxes.length; i +=1) {
      boxes[i].addEventListener('click', function() {
        boxes[i].classList.add('selected');
      })
    }
  }
  giveSelected();
}
giveAndRemoveSelec();

// let locateSelected = document.querySelector('.')
// let locatePixel = document.querySelectorAll('.pixel');
// let locateLine = document.querySelectorAll('.line');
// for (let i = 0; i < locatePixel.length; i +=1) {
//     for (let i = 0; i < locatePixel.length; i +=1) {
//             for (let i = 0; i <= locatePixel.length; i += 1){
//                 locatePixel[i].addEventListener('click', function() {
//                     locatePixel[i].style.backgroundColor = 'red';
//                 }
//             )
//         }

//     }
// }

// //locateSelected.style.backgroundColor = 'red';
