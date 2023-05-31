function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');
console.log(colorBtn);
const body = document.querySelector('body');
console.log(body);
colorBtn.addEventListener('click', changeColor);
function changeColor() {

   
  body.style.backgroundColor = getRandomHexColor()
}