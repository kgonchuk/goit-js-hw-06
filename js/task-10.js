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
  for(let i = 0; i < amount; i += 1){
    const elem = document.createElement('div');
    elem.style.width = 30 + (10 * i)+'px'; 
    elem.style.height = 30 +(10 * i)+'px';
    elem.style.backgroundColor = getRandomHexColor();
    
  }boxEl.append(elem);
}
createBtn.addEventListener('click', onCreate);
function onCreate(){
  const amount = input.value;
  if(amount > 0){
    createBoxes(amount)
  }
};
desrtoyBtn.addEventListener('click', onDestroy );
function onDestroy(){
  boxEl.innerHTML  = '';
}