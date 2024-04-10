const juegosPorDefecto = [
    {
        id: 1,
        titulo: 'FIFA',
        precio: 18400,
        descripcion: 'EA SPORTS FC 24 es un increíble juego de fútbol que te sumerge en una experiencia realista y auténtica. Con 3 nuevas tecnologías revolucionarias, cada partido se siente más cercano a la realidad que nunca. Más de 19.000 jugadores, 700 equipos y 30 ligas, el juego te ofrece una autenticidad sin igual en el campo de juego.',
        img: 'https://dixgamer.com/wp-content/uploads/2023/07/EA-SPORTS-FC%E2%84%A2-24-Standard-Edition-330x404.jpg',
        anio: 2024,
        genero: 'Deporte'
    },
    {
        id: 2,
        titulo: 'Call Of Duty',
        precio: 16790,
        descripcion: 'En esta aventura bélica, los mapas brindan una variedad impresionante a medida que los jugadores se enfrentan en escenarios únicos con una mecánica de armas que da a cada una la sensación de máxima autenticidad y un manejo inigualable.',
        img: 'https://dixgamer.com/wp-content/uploads/2021/08/call-of-duty-black-ops-4-ps5-330x404.jpg',
        anio: 2023,
        genero: 'accion',
    },
]

// Obtengo lista de juegos del local storage
const listaJuegos = JSON.parse(localStorage.getItem('listaJuegos')) || juegosPorDefecto;
