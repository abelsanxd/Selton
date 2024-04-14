class Juegos {
  #identificador;
  #titulo;
  #descripcion;
  #imagen;
  #categoria;
  #requisitoSistema;
  #desarrollador;
  #precio;

  constructor(
    titulo,
    descripcion,
    imagen,
    categoria,
    requisitoSistema,
    desarrollador,
    precio
  ) {
    this.#identificador = crypto.randomUUID();
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#categoria = categoria;
    this.#requisitoSistema = requisitoSistema;
    this.#desarrollador = desarrollador;
    this.#precio = precio;
  }

  get identificador() {
    return this.#identificador;
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

  get requisitoSistema() {
    return this.#requisitoSistema;
  }

  get desarrollador() {
    return this.#desarrollador;
  }

  set desarrollador(desarrollador) {
    this.#desarrollador = desarrollador;
  }

  get precio() {
    return this.#precio;
  }

  set precio(precio) {
    this.#precio = precio;
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
      precio: this.precio,
    };
  }
}

export default Juegos;
