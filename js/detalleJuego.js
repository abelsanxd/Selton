const parametrosURL = new URLSearchParams(window.location.search);
const idJuego = parametrosURL.get('codigo')
const listaJuegos = JSON.parse(localStorage.getItem('listaJuegosKey')) || [];

const juegoBuscado = listaJuegos.find((itemJuego)=> itemJuego.id === idJuego)

const seccionDetalle = document.querySelector('#seccionDetalle')
seccionDetalle.innerHTML = ` <div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img
      id="detalle-img"
      src=${juegoBuscado.imagen}
      class="img-fluid rounded-start"
      alt=${juegoBuscado.imagen}
    />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 id="detalle-titulo" class="card-title">${juegoBuscado.imagen}</h5>
      <p id="detalle-descripcion" class="card-text">${juegoBuscado.imagen}</p>
      <p class="card-text">
        <b>Precio: </b>
        <span id="detalle-precio"></span>
      </p>
      <p class="card-text">
        <b>Año:</b>
        <span id="detalle-anio"></span>
      </p>
      <p class="card-text">
        <b>Género:</b>
        <span id="detalle-genero"></span>
      </p>
      <div class="text-center">
        <button class="btn btn-dark" type="click">
          COMPRAR JUEGO
        </button>
      </div>
    </div>
  </div>
</div>
</div>`