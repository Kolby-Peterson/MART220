function setup() {
  createCanvas(400, 400);
  background(220);

  // Draw glass
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
}

function draw() {
  // No animation in this sketch
}

