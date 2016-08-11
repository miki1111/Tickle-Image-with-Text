
// This program displays an image that is stored in your project folder

var img;
var x,y,maxX,maxY,minX,minY;
var txt="Thank you, Neil!";

function preload() {
  img = loadImage("neil.JPG"); // Make sure the spelling matches exactly!
}

function setup() {
  createCanvas(800, 600);
  
  x=width/3;
  y=height/4;
}

function draw() {

  background(240,260,160);
  
  // Display text
  textSize(30);
  textStyle(BOLD);
  fill(0);
  text(txt,230,40);
  
  //Display image, at (x,y) - make the size a rect that is smaller than the canvas
  image(img,x,y,width/4,height/3);
  
  maxX = x + width/4;
  maxY = y + width/4;
  minX = x - height/3;
  minY = y - height/3;

  // check if the mouse is inside the photo and tickle if so
  // tickle by moving the image just a little bit
  // by some small distance (a random number between -5 and 5)
  if ( mouseX >= minX && mouseX <= maxX &&
    mouseY >= minY && mouseY <= maxY) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}

