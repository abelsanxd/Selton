document.getElementById("loginButton").addEventListener("click", function () {
  // Obtener los valores del formulario
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  // Verificar las credenciales
  if (email === "selton89i@gmail.com" && password === "selton89i") {
    // Credenciales válidas, establecer el estado de inicio de sesión
    localStorage.setItem("usuarioAutenticado", true);

    // Redirigir al usuario a la página de administrador
    window.location.href = "./administrador.html";
  } else {
    // Credenciales inválidas, mostrar un mensaje de error
    alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
  }
});

// Función para verificar la sesión del usuario al cargar la página
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
