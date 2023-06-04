const input = document.querySelector('#validation-input');



input.addEventListener('blur', onBlur);
function onBlur() {
    
    console.log(this.value.length);
    if (String(input.value).length != input.dataset.length) {
        this.classList.add('invalid');
this.classList.remove('valid')

    } else {
        this.classList.add('valid');
        this.classList.remove('invalid')
    }

}





