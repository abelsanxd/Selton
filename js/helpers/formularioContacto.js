const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const consulta = document.getElementById ('consulta')

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();
    const consultaValue = consulta.value.trim();
    
    if(usuarioValue === '') {
        setErrorFor(usuario, 'No puede dejar el usuario en blanco');
    } else {
        setSuccessFor(usuario);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'No puede dejar el email en blanco');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }
    
    if(telefonoValue === '') {
        setErrorFor(telefonoValue, 'Telefono no debe ingresar en blanco.');
    } else {
        setSuccessFor(telefono);
    }
    if(consultaValue === '') {
        setErrorFor(consultaValue, 'Consulta no debe ingresar en blanco.');
    } else {
        setSuccessFor(consulta);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
