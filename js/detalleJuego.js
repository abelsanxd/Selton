const parametrosURL = new URLSearchParams(window.location.search);
const idJuego = parametrosURL.get("id");

const juegosJSON = localStorage.getItem('listaJuegosKey');
const listaJuegos = JSON.parse(juegosJSON);

const juegoBuscado = listaJuegos.find((juego) => juego.identificador === idJuego);

// Verificar si la categoría está definida y, si no, asignar un valor predeterminado
if (!juegoBuscado.hasOwnProperty("categoria")) {
  juegoBuscado.categoria = "Sin categoría";
}

// Verificar si el desarrollador está definido y, si no, asignar un valor predeterminado
if (!juegoBuscado.hasOwnProperty("desarrollador")) {
  juegoBuscado.desarrollador = "Desconocido";
}

console.log(juegoBuscado);

const seccionDetalle = document.querySelector("#seccion-detalle");
seccionDetalle.innerHTML = `
<div class="card mb-3 border m-5">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${juegoBuscado.imagen}" class="img-fluid w-100 rounded-start" alt="...">
        </div>
        <div class="col-md-6 fs-3">
            <div class="card-body">
                <h5 class="card-title">${juegoBuscado.titulo}</h5>
                <p class="card-text">${juegoBuscado.descripcion}</p>
                <p class="card-text">Categoria: ${juegoBuscado.categoria}</p>
                <p class="card-text">Desarrollador: ${juegoBuscado.desarrollador}</p>
                <p class="card-text">Requisitos del sistema: ${juegoBuscado.requisitoSistema}</p>
                <p class="card-text">Precio: ${juegoBuscado.precio} USD</p>
            </div>
        </div>
    </div>
</div>
`;
