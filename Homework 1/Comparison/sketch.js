function setup() {
  createCanvas(800, 600);
}

//MY SKETCH
function draw() {
  background(155, 255, 155);

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
  fill(224, 255, 255)
  rect(350, 310, 40, 40, 10);
  rect(240, 500, 35, 35, 10);
  rect(320, 400, 30, 30, 7);
  rect(200, 280, 35, 35, 7);
  rect(250, 360, 35, 35, 7);
  //Drawing the straw
  fill(138,154,91);
  rect(295, 150, 15, 400);
  arc(303, 150, 15, 15, PI, TWO_PI);
  quad(294,149, 310,149, 375,75, 360,75);
  //Drawing the lid
  stroke(0);
  strokeWeight(4);
  fill(255,0,0,0);
  quad(140,200, 460,200, 465,210, 135,210);
  //TADA You have an Iced Coffee

//ChatGPT SKETCH
  // Draw glass
  push();
  translate(400,200);
  fill(255); // White color for glass
  rect(150, 100, 100, 200, 10); // Rounded rectangle for the glass

  // Draw coffee
  fill(139, 69, 19); // Coffee color (brown)
  rect(155, 150, 90, 140, 5); // Slightly smaller than the glass to create a border effect

  // Draw ice cubes
  fill(200); // Light gray for ice cubes
  rect(160, 160, 20, 20, 5); // Ice cube 1
  rect(200, 170, 20, 20, 5); // Ice cube 2
  rect(180, 200, 20, 20, 5); // Ice cube 3

  // Draw straw
  fill(255, 0, 0); // Red color for straw
  rect(230, 50, 10, 80); // Straw outside the glass
  rect(230, 100, 10, 50); // Straw inside the glass
  pop();
}
