class Pantalla {
  constructor(imagenes, textos) {
    this.imagenes = imagenes; // array de imágenes
    this.textos = textos;     // array de textos
    this.estado = 0;          // arranca en 0
  }

  mostrar() {
    image(this.imagenes[this.estado], 0, 0, width, height);
    text(this.textos[this.estado], 50, height - 100);
  }

  siguiente() {
    this.estado++;
    if (this.estado >= this.imagenes.length) {
      this.estado = 0; // o podés trabarlo en la última
    }
  }
}
