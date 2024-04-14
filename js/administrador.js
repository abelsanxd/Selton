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
  dibujarFila(juegoNuevo);
  Swal.fire({
    title: `Juego agregado!`,

    text: `El Juego '${juegoNuevo.titulo}' fue agregado correctamente`,

    icon: "success",
  });
}

function guardarLocalStorage() {
  localStorage.setItem("listaJuegosKey", JSON.stringify(juegos));
}

function limpiarFormulario() {
  formularioJuego.reset();
}

function cargaInicial() {
  if (juegos.length > 0) {
    juegos.map((juego) => dibujarFila(juego));
  }
}

function dibujarFila(juego) {
  console.log(juego);
  const tbody = document.querySelector("#tablajuegos");
  console.log(tbody);
  tbody.innerHTML += /* HTML */ `<tr>
    <th class="col-1" scope="row">${juego.identificador}</th>
    <td class="col-2 text-center">${juego.titulo}</td>
    <td class="col-descripcion ">${juego.descripcion}</td>
    <td class="text-center">
      <img
        class="img-thumbnail rounded img-fluid thumbnail "
        src=${juego.imagen}
        alt=${juego.titulo}
      />
    </td>
    <td class="text-center">
      <button
        class="btn btn-warning m-1"
        onclick="prepararEditarJuego('${juego.identificador}')"
      >
        <i class="bi bi-pencil-square fs-4"></i>
      </button>
      <button
        class="btn btn-danger m-1"
        onclick="borrarjuego('${juego.identificador}')"
      >
        <i class="bi bi-x-square fs-4"></i>
      </button>
    </td>
  </tr>`;
}

window.prepararEditarJuego = function (identificador) {
  mostrarModalJuego();
  crearJuego = false;
  const juegoBuscado = juegos.find(
    (juego) => juego.identificador === identificador
  );
  document.querySelector("#identificador").value = juegoBuscado.identificador;
  document.querySelector("#titulo").value = juegoBuscado.titulo;
  document.querySelector("#descripcion").value = juegoBuscado.descripcion;
  document.querySelector("#imagen").value = juegoBuscado.imagen;
};

function editarJuego() {
  const identificador = document.querySelector("#identificador").value;

  const posicionJuego = juegos.findIndex(
    (juego) => juego.identificador === identificador
  );

  juegos[posicionJuego].titulo = document.querySelector("#titulo").value;
  juegos[posicionJuego].descripcion =
    document.querySelector("#descripcion").value;
  juegos[posicionJuego].imagen = document.querySelector("#imagen").value;

  guardarLocalStorage();

  const tbody = document.querySelector("#tablajuegos");
  const row = tbody.children[posicionJuego];
  row.children[1].textContent = juegos[posicionJuego].titulo;
  row.children[2].textContent = juegos[posicionJuego].descripcion;

  Swal.fire(
    "Juego modificado",
    "El juego fue modificado exitosamente",
    "success"
  );

  limpiarFormulario();
  modalJuego.hide();
}

botonAgregarJuego.addEventListener("click", mostrarModalJuego);
formularioJuego.addEventListener("submit", administrarFormularioJuego);
cargaInicial();
