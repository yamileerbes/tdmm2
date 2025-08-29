let objestado;
let objfondo;
let imagenes= [];
function preload(){
imagenes[0] = loadImage("data/mosaico4.png");
  imagenes[1] = loadImage("data/mosaico5.png");
  imagenes[2] = loadImage("data/mosaico6.png");
}


function setup() {
  createCanvas(400, 400);
  objestado = new Estados();   
  objfondo = new Fondo(objestado); 
  console.log(objfondo);
console.log(typeof objfondo.mostrar);
}

function draw() {
objfondo.mostrar();

  boton();
}


function mousePressed() {
  objestado.presionaMouse();  
}

function boton() {
  circle(350, 350, 50);
}

class Estados { 
  constructor() {
    this.nucleo = 1; 
  }
  
  presionaMouse() {
   if(mouseIsPressed) {this.nucleo++;}
    if (this.nucleo > 3) { 
      this.nucleo = 1;
    }
  }
}

class Fondo { 
  constructor(estado) {
    this.estado = estado; 
  }
  
  mostrar() {
    if (this.estado.nucleo === 1) {  
      image(imagenes[0],0,0, width, height); 
    } else if (this.estado.nucleo === 2){
      image(imagenes[1],0,0, width, height); 
    } else if (this.estado.nucleo === 3){
      image(imagenes[2],0,0, width, height); 
    }
  }
}
