function setup() {
    createCanvas(600,600); // Creates the canvas.
    background(255); // Selects white background colour.
}

function draw() {
    fill(255, 204, 100); // Selects blue fill colour.
    noStroke(); // Removes stroke from draw function.
    quad(38, 31, 86, 20, 69, 63, 30, 76); // Draws a quad with corners at specified coords.
    rotate(35); // Rotates the shape by 35 degrees.
}