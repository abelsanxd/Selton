class Juegos {
  #identificador;
  #titulo;
  #descripcion;
  #imagen;
  #precio;
  #categoria;
  #requisitos;
  #desarrollador;


  constructor(
    titulo,
    descripcion,
    imagen,
    identificador,
    precio,
    categoria,
    requisitos,
    desarrolador,

  ) {
    this.#identificador = crypto.randomUUID();
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#precio = precio;
    this.#categoria = categoria;
    this.#requisitos = requisitos;
    this.#desarrollador = desarrolador;


  }

  get identificador() {
    return this.#identificador;
  }

  set identificador(identificador) {
    this.#identificador = identificador;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(titulo) {
    this.#titulo = titulo;
  }

  get descripcion() {
    return this.#descripcion;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  get imagen() {
    return this.#imagen;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  get precio() {
    return this.#precio;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  get requisitos() {
    return this.#requisitos;
  }

  set requisitos(requisitos) {
    this.#requisitos = requisitos;
  }

  get desarrolador() {
    return this.#desarrollador;
  }

  set desarrolador(desarrolador) {
    this.#desarrollador = desarrolador;
  }

  toJSON() {
    return {
      identificador: this.identificador,
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
      precio: this.precio,
      categoria: this.categoria,
      requisitos: this.requisitos,
      desarrollador: this.desarrolador,
    };
  }
}

export default Juegos;
