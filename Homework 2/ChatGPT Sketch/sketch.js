let iceCubes = [];
let strawColor;

function setup() {
  createCanvas(400, 600);
  
  // Generate a random color for the straw
  strawColor = color(random(255), random(255), random(255));
  
  // Create five ice cubes at random positions
  for (let i = 0; i < 5; i++) {
    iceCubes.push(new IceCube(random(150, 250), random(250, 400)));
  }
}

function draw() {
  background(220);
  
  drawIcedCoffee();
  
  // Draw and update ice cubes
  for (let cube of iceCubes) {
    cube.update();
    cube.display();
  }
}

function drawIcedCoffee() {
  // Draw cup
  fill(139, 69, 19, 150); // Brownish coffee color
  stroke(100);
  rect(125, 200, 150, 250, 20); // Cup
  
  // Draw straw
  fill(strawColor);
  noStroke();
  rect(180, 120, 20, 100); // Straw
}

class IceCube {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  
  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  
  display() {
    fill(200, 255, 255, 150);
    stroke(0);
    rect(this.x, this.y, this.size, this.size, 5);
  }
  
  pressed() {
    if (mouseX > this.x && mouseX < this.x + this.size &&
        mouseY > this.y && mouseY < this.y + this.size) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }
  
  released() {
    this.dragging = false;
  }
}

function mousePressed() {
  for (let cube of iceCubes) {
    cube.pressed();
  }
}

function mouseReleased() {
  for (let cube of iceCubes) {
    cube.released();
  }
}

