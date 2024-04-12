const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const consulta = document.getElementById ('consulta')

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
});
