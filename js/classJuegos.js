class Juegos {
  #identificador;
  #titulo;
  #descripcion;
  #imagen;
  #categoria;
  #requisitoSistema;
  #desarrollador;
  #resenias;

  constructor(
    identificador,
    titulo,
    descripcion,
    imagen,
    categoria,
    requisitoSistema,
    desarrollador,
    resenias
  ) {
    this.#identificador = crypto.randomUUID();
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#categoria = categoria;
    this.#requisitoSistema = requisitoSistema;
    this.#desarrollador = desarrollador;
    this.#resenias = resenias;
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
  get categoria() {
    return this.#categoria;
  }

  set categoria(categoria) {
    this.#categoria = categoria;
  }

  get requisitoSistema() {
    return this.#requisitoSistema;
  }

  set requisitoSistema(requisitoSistema) {
    this.#requisitoSistema = requisitoSistema;
  }
  get desarrollador() {
    return this.#desarrollador;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }
  get resenias() {
    return this.#resenias;
  }

  set resenias(resenias) {
    this.#resenias = resenias;
  }

  toJSON() {
    return {
      identificador: this.identificador,
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
      categoria: this.categoria,
      requisitoSistema: this.requisitoSistema,
      desarrollador: this.desarrollador,
      resenias: this.resenias,
    };
  }
}

export default Juegos;
