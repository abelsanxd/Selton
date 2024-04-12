import Juegos from "./classJuegos.js";

const juegosJSON = localStorage.getItem("listaJuegosKey");
const juegos = JSON.parse(juegosJSON);

if (juegos) {
  const article = document.getElementById("card");

  juegos.forEach((juego) => {
    article.innerHTML += `<article class="">
    <div class=" ">
    <div class="col-lg-2 col-md-4">
      <div class="card">
        <img
          src="${juego.imagen}"
          class="card-img-top"
          alt="${juego.titulo}"
        />
        <div class="card-body">
          <h5 class="card-title">${juego.titulo}</h5>
          <a
            href="./paginas/detalle.html"
            class="btn btn-primary"
            >Ver detalles</a
          >
        </div>
      </div>
    </div>
  </div>
  </article>`;
  });
}
