import Juegos from "./classJuegos.js";

const botonAgregarJuego = document.querySelector("#botonAgregarJuego");
const modalJuego = new bootstrap.Modal(document.getElementById("modalAgregar"));
let crearJuego = true;
const formularioJuego = document.querySelector("#formAgregar");
const identificador = document.querySelector("#identificador");
const imagen = document.querySelector("#imagen");
const descripcion = document.querySelector("#descripcion");
const titulo = document.querySelector("#titulo");
const juegos = JSON.parse(localStorage.getItem("listaJuegosKey")) || [];

function mostrarModalJuego() {
  crearJuego = true;
  limpiarFormulario();
  modalJuego.show();
}

function administrarFormularioJuego(e) {
  e.preventDefault();

  if (crearJuego) {
    agregandoJuego();
  } else {
    editarJuego();
  }
}

function agregandoJuego() {
  const juegoNuevo = new Juegos(
    titulo.value,
    descripcion.value,
    imagen.value,
    identificador.value
  );
  console.log(juegoNuevo);
  juegos.push(juegoNuevo);
  guardarLocalStorage();
  limpiarFormulario();
  Swal.fire({
    title: `Pelicula creada!`,

    text: `La pelicula '${juegoNuevo.titulo}' fue creada correctamente`,

    icon: "success",
  });
}

function guardarLocalStorage() {
  localStorage.setItem("listaJuegosKey", JSON.stringify(juegos));
}

function limpiarFormulario() {
  formularioJuego.reset();
}


botonAgregarJuego.addEventListener("click", mostrarModalJuego);
formularioJuego.addEventListener("submit", administrarFormularioJuego);
