window.onload = function () {
  verificarSesion();
};

// Función para verificar la sesión del usuario
function verificarSesion() {
  var usuarioAutenticado = localStorage.getItem("usuarioAutenticado");

  if (usuarioAutenticado) {
    // Si el usuario está autenticado, mostrar el botón de log out y la pestaña de admin
    document.getElementById("logoutLink").style.display = "block";
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("adminLink").style.display = "block";
  } else {
    // Si el usuario no está autenticado, mostrar el botón de log in y ocultar la pestaña de admin
    document.getElementById("logoutLink").style.display = "none";
    document.getElementById("loginLink").style.display = "block";
    document.getElementById("adminLink").style.display = "none";
  }
}

// Manejar el evento click del botón de log out
document.getElementById("logoutLink").addEventListener("click", function () {
  // Eliminar la información de inicio de sesión del localStorage
  localStorage.removeItem("usuarioAutenticado");

  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = "./entrar.html";
});
