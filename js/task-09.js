function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const textColor = document.querySelector('.color');
colorBtn.addEventListener('click', changeColor);
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = body.style.backgroundColor;
  
}