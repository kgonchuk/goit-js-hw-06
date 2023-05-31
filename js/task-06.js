const input = document.querySelector('#validation-input');
console.log(input);


input.addEventListener('blur', onBlur);
function onBlur() {
    console.log(this.value.length);
    if (String(input.value).length != input.dataset.length) {
        this.classList.add('invalid');
    } else {
       this.classList.add('valid');
    }
}
console.log(input)





