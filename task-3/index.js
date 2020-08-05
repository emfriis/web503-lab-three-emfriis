function setup() {
    createCanvas(600, 600, WEBGL); // Creates the canvas.
    background(0, 0, 255); // Selects a blue background colour.
}

function draw() {
    fill(255); // Selects a white fill colour.
    noStroke(); // Removes stroke from shape.
    cylinder(100, 200); // Draws a cylinder with specified dimensions.
    fill(255, 204, 0); // Selects a yellow fill colour.
    noStroke(); // Removes stroke from shape.
    ellipsoid(80, 120, 120); // Draws an ellipsoid with specified dimensions.
}