const fontSize = document.querySelector('#font-size-control')
console.log(fontSize);
const text = document.querySelector('#text');
console.log(text)
fontSize.addEventListener('input', sizeChange);
function sizeChange() {
    text.style.fontSize  = `${fontSize.value}px`
}
