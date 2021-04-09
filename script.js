const divColors = document.getElementsByClassName('.color');

function setColorToPalette() {
  for (let index = 0; index < divColors.length; index += 1) {
    const idColorDivs = divColors[index].id;
    if (divColors[index].getElementsByClassName.backgroundColor !== 'black') {
      divColors[0].getElementsByClassName.backgroundColor = 'black';  
    }
    divColors[index].getElementsByClassName.backgroundColor = idColorDivs;        
  }
}
setColorToPalette();

window.onload = setBlack

function setBlack() {
  const elementBlack = document.getElementById('black');
  elementBlack.addEventListener("onload", setBlack);
}
