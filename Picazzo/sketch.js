
var canvas1;
var bgcolor;
var genbutton;
var canvas = document.getElementById('your-canvas');
var ctx = canvas.getContext('2d');


function setup() {
  canvas1 = createCanvas(480, 480);
  canvas1.position()
  
  //random background color
  bgcolor = color(220); 
  
}



function changeColor() {
	bgcolor = color(random(256),random(256),random(256));
}


function draw() {
  
  //Random Background
  background(bgcolor);
  
}