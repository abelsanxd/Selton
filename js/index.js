import Juegos from "./classJuegos.js";

const juegosJSON = localStorage.getItem("listaJuegosKey");
const juegos = JSON.parse(juegosJSON);

if (juegos) {
  const article = document.getElementById("card");

  juegos.forEach((juego) => {
    article.innerHTML += /* HTML */ `<article class="col-md-3">
    <div class="card-sl">
        <div class="card-image mt-4">
            <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}" />
        </div>
        <div class="card-content">
            <div class="card-heading">
                ${juego.titulo}
            </div>
            <div class="card-text">
                Descripción: ${juego.descripcion}
            </div>
            <div class="card-text">
                Precio: ${juego.precio} Usd$
            </div>
            <a href="../paginas/detalle.html?id=${juego.identificador}" class="card-button"> Ver detalles</a>
        </div>
    </div>
</article>

`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const formBusqueda = document.querySelector("#formBusqueda");
  const inputBusqueda = document.querySelector("#inputBusqueda");

  inputBusqueda.addEventListener("input", () => {
    const terminoBusqueda = inputBusqueda.value.trim();
    buscarJuego(terminoBusqueda);
  });

  formBusqueda.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

function buscarJuego(terminoBusqueda) {
  const juegosFiltrados = juegos.filter((juego) =>
    juego.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  const article = document.getElementById("card");
  article.innerHTML = "";

  juegosFiltrados.forEach((juego) => {
    article.innerHTML += `<article class="col-md-3">
    <div class="card-sl">
        <div class="card-image">
            <img src="${juego.imagen}" class="card-img-top" alt="${juego.titulo}" />
        </div>
        <div class="card-content">
            <div class="card-heading">
                ${juego.titulo}
            </div>
            <div class="card-text">
                Descripción: ${juego.descripcion}
            </div>
            <div class="card-text">
                Precio: ${juego.precio} Usd$
            </div>
            <a href="../paginas/detalle.html?id=${juego.identificador}" class="card-button"> Ver detalles</a>
        </div>
    </div>
</article>`;
  });
}
