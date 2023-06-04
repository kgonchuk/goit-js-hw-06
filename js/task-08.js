const formEl = document.querySelector('.login-form');

const inputs = document.querySelectorAll('input');


formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
   
    evt.preventDefault();

const {email, password } = evt.currentTarget.elements;

    if (email.value.trim() === ''|| password.value.trim() === ''){
    return alert ("Будь ласка, заповніть порожні рядки!")
    }
   const userDetails = {email:email.value, password: password.value}
console.log(userDetails)
     evt.target.reset();
}


