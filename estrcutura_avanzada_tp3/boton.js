
class Boton {
  constructor(x, y, w, h, etiqueta) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.etiqueta = etiqueta;
    this.fuePresionado = false;
  }

  mostrar() {
    fill(100, 150, 200);
    rect(this.x, this.y, this.w, this.h, 10);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.etiqueta, this.x + this.w / 2, this.y + this.h / 2);
  }

  revisarClick() {
    if (mouseX > this.x && mouseX < this.x + this.w &&
        mouseY > this.y && mouseY < this.y + this.h) {
      this.fuePresionado = true;
    } else {
      this.fuePresionado = false;
    }
  }
}
