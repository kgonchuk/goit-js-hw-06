function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const desrtoyBtn = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes')





function createBoxes(amount){
  for(let i = 0; i < 0; i += 1){
    let elem = document.createElement('div');
    elem.style.width = 30; 
    elem.style.height = 30;
    elem.style.backgroundColor = getRandomHexColor();
    boxEl.append(elem);
  }
}
createBtn.addEventListener('clack', onCreate);
function onCreate(){
  const quant = input.value;
  if(quant > 0){
    createBoxes(amount)
  }
};
input.addEventListener('change', onChange);
let amount = 0;
function onChange(evt){
  amount = evt.target.value
};

desrtoyBtn.addEventListener('click', onDestroy );
function onDestroy(){
  boxEl.innerHTML  = '';
}