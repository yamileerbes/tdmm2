let objJuego;
let imagenes = [];
let textos = [];

function preload() {
  // Cargar imágenes
  imagenes[0] = loadImage("data/robot1.jpg");
  imagenes[1] = loadImage("data/robot2.jpg");
  imagenes[2] = loadImage("data/reloj.jpg");

  // Cargar textos
  textos = [
    "Bienvenido a la novela visual.",
    "Capítulo 1: empieza la historia...",
    "Una encrucijada aparece."
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  objJuego = new Juego();
}

function draw() {
  background(0);
  objJuego.mostrar(); //se muestra la pantalla actualizada
}

function mousePressed() {
  objJuego.mousePressed();
}
