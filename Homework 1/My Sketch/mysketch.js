function setup() {
  createCanvas(600, 600);
}

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
}
