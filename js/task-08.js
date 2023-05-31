const formEl = document.querySelector('.login-form');
console.dir(formEl);
formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();

    if ( formEl.value === '') {
        alert ('Порожні поля!') 
    
    } else {
        const {email, password } = evt.currentTarget.elements;
console.log(email.value);
    console.log(password.value);
    
    const inpEl = {
        name: email.value,
        name: password.value
        
}
}



}

