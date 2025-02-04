let numIce = 5
let x = [], y = [], w = [], h = [], r = [];
var dragging = null;
var offsetX, offsetY;

function setup() {
  createCanvas(600, 600);
  textSize(25);
  frameRate(60);

  for (let ice = 0; ice < numIce; ice++) {
    x[ice] = random(220, 350);
    y[ice] = random(250, 500);
    w[ice] = random(35, 40);
    h[ice] = random(35, 40);
    r[ice] = random(5, 10);
  }

  strawcolor = color(random(255), random(255), random(255));
}
   
function draw() {
  background(155, 255, 155);

  //Drawing the text
  strokeWeight(1);
  fill(0);
  text("Kolby Peterson", 420, 580)
  text("Iced Coffee", 10, 30);

  //Drawing the cup
  stroke(0);
  strokeWeight(4);
  fill(255,0,0,0);
  quad(150,200, 450,200, 380,575, 220,575);
  
  //Drawing the Coffee
  noStroke();
  fill(111,78,55);
  quad(160,250, 440,250, 380,575, 220,575);

  //Drawing the ice
  for (let i = 0; i < numIce; i++) {
    fill(224, 255, 255);
    rect(x[i], y[i], w[i], h[i], r[i]);
  }
  //Moving the ice
    if (dragging !== null) {
      x[dragging] = mouseX + offsetX;
      y[dragging] = mouseY + offsetY;
  }

  //Drawing the straw
  fill(strawcolor);
  rect(295, 150, 15, 400);
  arc(303, 150, 15, 15, PI, TWO_PI);
  quad(294,149, 310,149, 375,75, 360,75);

  //Drawing the lid
  stroke(0);
  strokeWeight(4);
  fill(255,0,0,0);
  quad(140,200, 460,200, 465,210, 135,210);
}
  //TADA You have an Iced Coffee


function mousePressed() {
    for (let i = numIce - 1; i >= 0; i--) {
      if (mouseX > x[i] && mouseX < x[i] + w[i] && 
        mouseY > y[i] && mouseY < y[i] + h[i]) {
        dragging = i;
        offsetX = x[i] - mouseX;
        offsetY = y[i] - mouseY;
        break;
      }
    }
  }

function mouseReleased() {
  dragging = null;
}