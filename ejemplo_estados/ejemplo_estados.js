let juego;
 let textos = [];
 let imagenes = [];
 let fuente;
 let fuenteT;
function preload () {
  imagenes[0]= loadImage("data/pantalla1.png");
 imagenes[1]= loadImage("data/dormido.png");
 fuente = loadFont("data/orbitron.ttf");
 fuenteT = loadFont("data/orbit.ttf");
    textos = [
    "pantalla 0 de chatbots",
    "pantalla 1 presentacion de pipo",
    "Pantalla 2 arranca nucleo 1",
    "pantalla 3 nucleo 1 parte 2 ",
      "pantalla 4 nucleo 1 parte 3 ",
      "pantalla 5nucleo 2 parte 1 promesas ",
     "pantalla 5nucleo 2 parte 2 promesas ",
   "pantalla 5nucleo 2 parte 3 promesas ",
     "pantalla 5nucleo 3 parte 1 riesgos",
    "este es el final, esto es un codigo de prueba, esperabas más? no, la vida es asi, cuando te sabes las respuestas cambian las preguntas, un bajon."
  ];

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  juego = new Juego();
}

function draw() {
  textFont(fuente);
 background(255);
  juego.mostrar();
 
}

function mousePressed() {
  juego.presionar();
}

// ------------ CLASESSSSSS ------------

class Juego {
  constructor() {
    this.pantallaActualizada = 0;
    this.pantallas = [];

    for (let i = 0; i < 10; i++) {
      this.pantallas.push(new Pantalla(i));
    }
  }

  mostrar() {
    this.pantallas[this.pantallaActualizada].mostrar();
    this.dibujaBoton();
  }

  dibujaBoton() {
    fill(180);
    rect(width-120, height-60, 100, 40, 8);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Next", width-70, height-40);
  }

  presionar() {

    if (
      mouseX > width- 120 &&
      mouseX<width - 20 &&
      mouseY > height - 60 &&
      mouseY< height - 20
      ) {
      this.siguientePantalla();
    }

  
    this.pantallas[this.pantallaActualizada].presionar();
  }
  
    siguientePantalla() {
    this.pantallaActualizada++;
    if (this.pantallaActualizada >= this.pantallas.length) {
   this.pantallaActualizada = 0; // loop back to start
    }
  }
}
