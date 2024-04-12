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
    // trim para remover los espacios del inicio
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();
    const consultaValue = consulta.value.trim();

}
