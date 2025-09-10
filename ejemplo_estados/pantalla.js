class Pantalla {
  constructor(index) {
    this.index = index;


    if (this.index === 4) {
      this.muestraRect = true;
      this.rectColor ='red';
      this.rectX = width-70;
      this.rectY = 20;
      this.rectTam =  50;
    } else {
      this.muestraRect = false;
    }
  }

  mostrar() {
    // Draw text
    if (this.index === 0) { //image(this.imagenes[0],0,height/2);
      textAlign(LEFT);
      textSize(24);
      fill(0);
      //TITULO
      push();

      fill(61, 52, 157);
      text( "CHATBOTS", 110, 50);
      pop();
      //SUBTITULO
      text("Salud mental, beneficios y riesgos de los sistemas conversacionales \n como soporte psicológico.", 110, 70, width-200, 100);
      //INTEGRANTES Y DATOS DEL TP
     
      image( imagenes[0], 0, 300, width, 250);
      image(imagenes[1], width/2 + 200, 250, 200, 300);
      push();
      textFont(fuenteT);
      text("Yamile Nazarena Erbes - Ara Martino - Ezequiel Andrés Casale - \n María Clara Saloña - Mauricio Aguirre \n FDA UNLP Taller de diseño de la información 2025 TP 3 ", 110, 130, width-200, 150);
       text("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZ......", 120, 350);
      pop();
    } else if (this.index === 1) { //image(this.imagenes[1],0,height/2);

      textSize(24);
      fill(0);
      text( "pantalla 1 de chatbots", 100, 100, width-100, height- 100);
    } else if (this.index === 2) { //image(this.imagenes[2],0,height/2);

      textSize(24);
      fill(0);
      text( "pantalla 2 de chatbots", 100, 100, width-100, height- 100);
    } else {
      circle(100, 100, 100);
    }
    console.log(this.index);
    // Draw the rectangle if active
    if (this.muestraRect) {
      fill(this.rectColor);
      rect(this.rectX, this.rectY, this.rectTam, this.rectTam, 8);
    }
  }


  presionar() {
    if (this.muestraRect) {

      if (
        mouseX > this.rectX &&
        mouseX < this.rectX + this.rectTam &&
        mouseY > this.rectY &&
        mouseY < this.rectY + this.rectTam
        ) {

        this.rectColor = this.rectColor === 'red' ? 'blue' : 'red';
      }
    }
  }
}
