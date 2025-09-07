class Juego {
  constructor() {
    this.indicePantalla = 0; //te dice cual estamos viendo ahora
    this.pantallas = []; //guarda todas las pantallas en este arreglo

    // Crear pantallas con su imagen y texto
    for (let i = 0; i < textos.length; i++) {
      this.pantallas.push(new Pantalla(imagenes[i], textos[i]));
    }
  }

  mostrar() {
    this.pantallas[this.indicePantalla].mostrar();
  }

  mousePressed() {
    let actual = this.pantallas[this.indicePantalla];
    actual.mousePressed();

    // Si apretaron el botón siguiente, avanzar pantalla
    if (actual.botonSiguiente.fuePresionado) {
      this.indicePantalla++;
      if (this.indicePantalla >= this.pantallas.length) {
        this.indicePantalla = 0; // volver a la primera
      }
    }
  }
}
