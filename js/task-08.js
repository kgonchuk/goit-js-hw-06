const formEl = document.querySelector('.login-form');

const inputs = document.querySelectorAll('input');


formEl.addEventListener('submit', onSubmit);
function onSubmit(evt) {
   
    evt.preventDefault();

const {email, password } = evt.currentTarget.elements;
console.log(email.value);
console.log(password.value);
    
    const inpEl = {
        name: email.value,
        name: password.value,
        
    };
   inputs.forEach(input => {
    if (input.value.trim() === ''){
    alert ("Порожні рядки!")
    }
   }) 
     evt.target.reset();
}


