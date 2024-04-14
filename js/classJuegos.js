class Juegos {
  #identificador;
  #titulo;
  #descripcion;
  #imagen;


  constructor(
    titulo,
    descripcion,
    imagen,
    identificador,

  ) {
    this.#identificador = crypto.randomUUID();
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#imagen = imagen;

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

  toJSON() {
    return {
      identificador: this.identificador,
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
    };
  }
}

export default Juegos;
