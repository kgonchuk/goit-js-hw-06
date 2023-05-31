const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outoutEl = document.querySelector('#name-output');
console.log(outoutEl);
inputEl.addEventListener('input', onInput);

function onInput(evt) {
    outoutEl.textContent = evt.currentTarget.value === '' ? "Anonymous" : evt.currentTarget.value;
    console.log(evt.currentTarget.value)
}

