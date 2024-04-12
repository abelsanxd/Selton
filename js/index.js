import Juegos from "./classJuegos.js";

const juegosJSON = localStorage.getItem("listaJuegosKey");
const juegos = JSON.parse(juegosJSON);

if (juegos) {
  const article = document.getElementById("card");

  juegos.forEach((juego) => {
    article.innerHTML += `<article class="col-lg-4 col-md-4 row  ">
    <div class="col-12 col-md-12 col-lg-12 m-2">
      <div class="card h-100 ">
        <img
          src="${juego.imagen}"
          class="card-img-top "
          alt="${juego.titulo}"
        />
        <div class="card-body ">
          <h5 class="card-title tamanioTitulo">${juego.titulo}</h5>
          <a
            href="./paginas/detalle.html"
            class="btn btn-primary botonCardIndex "
            >Ver detalles</a
          >
        </div>
      </div>
    </div>
  </article>`;
  });
}
