function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const confirma = document.querySelector('input[name=confirma]');

    if (confirma.value === senha.value) {
        confirma.setCustomValidity('');
    } else {
        confirma.setCustomValidity('As senhas não conferem');

    }
}
function senhaOK() {
    alert ("senhas conferem!")
}

function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('error.email');

    if(!email.checkValidity()){
        error.innerHTML = "Email invalido";

    }
}

function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == 'Email invalido'){
        error.innerHTML = '';
    }
}