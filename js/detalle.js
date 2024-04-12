// Obtengo game id de la url
const parametrosURL = new URLSearchParams(window.location.search);
const idJuego = parametrosURL.get('id')

// Busco juego en la lista
const juegoBuscado = listaJuegos.find((juego) => juego.id == idJuego);

if (!juegoBuscado) window.location = '/404.html';

console.log(idJuego);
console.log(listaJuegos);
console.log(juegoBuscado);

const imageElement = document.querySelector('#detalle-img');
const tituloElement = document.querySelector('#detalle-titulo');
const descripcionElement = document.querySelector('#detalle-descripcion');
const precioElement = document.querySelector('#detalle-precio');
const anioElement = document.querySelector('#detalle-anio');
const generoElement = document.querySelector('#detalle-genero');

console.log(imageElement);
console.log(tituloElement)

tituloElement.innerHTML= juegoBuscado.titulo;
imageElement.src= juegoBuscado.img;
descripcionElement.innerHTML= juegoBuscado.descripcion;
precioElement.innerHTML= `$ ${juegoBuscado.precio}`;
anioElement.innerHTML= juegoBuscado.anio;
generoElement.innerHTML= juegoBuscado.genero;
