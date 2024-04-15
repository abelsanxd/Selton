document.getElementById("loginButton").addEventListener("click", function () {

  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;

  if (email === "selton89i@gmail.com" && password === "selton89i") {
    localStorage.setItem("usuarioAutenticado", true);

    window.location.href = "./administrador.html";
  } else {
    alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
  }
});

window.onload = function () {
  verificarSesion();
};

function verificarSesion() {
  let usuarioAutenticado = localStorage.getItem("usuarioAutenticado");

  if (usuarioAutenticado) {
    document.getElementById("logoutLink").style.display = "block";
    document.getElementById("loginLink").style.display = "none";
    document.getElementById("adminLink").style.display = "block";
  } else {
    document.getElementById("logoutLink").style.display = "none";
    document.getElementById("loginLink").style.display = "block";
    document.getElementById("adminLink").style.display = "none";
  }
}


document.getElementById("logoutLink").addEventListener("click", function () {
  localStorage.removeItem("usuarioAutenticado");
  verificarSesion();
  window.location.href = "./entrar.html";
});
