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
<div class="postcard light blue mb-3 border m-5">
    <div class="row g-0">
        <div class="col-md-4 ps-0">
            <a class="postcard__img_link" href="#">
                <img src="${juegoBuscado.imagen}" class="postcard__img img-fluid rounded-start" alt="Podcast Image">
            </a>
        </div>
        <div class="col-md-8">
            <div class="postcard__text">
                <h1 class="postcard__title blue"><a href="#" class="card-title fs-2 textoDetalle">${juegoBuscado.titulo}</a></h1>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt card-text fs-5">${juegoBuscado.descripcion}</div>
                <ul class="postcard__tagbox">
                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>Categoria: ${juegoBuscado.categoria}</li>
                    <li class="tag__item"><i class="fas fa-user mr-2"></i>Desarrollador: ${juegoBuscado.desarrollador}</li>
                    <li class="tag__item"><i class="fas fa-desktop mr-2"></i>Requisitos del sistema: ${juegoBuscado.requisitoSistema}</li>
                    <li class="tag__item"><i class="fas fa-dollar-sign mr-2"></i>Precio: ${juegoBuscado.precio} USD</li>
                </ul>
            </div>
        </div>
    </div>
</div>
`;
