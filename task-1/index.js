function setup() {
    createCanvas(600,600); // Creates the canvas.
    background(255); // Selects white background colour.
}

function draw() {
    fill('blue'); // Selects blue fill colour.
    noStroke(); // Removes stroke from draw function.
    rotate(PI / 35.0); // Rotates the shape by 35 degrees.
    quad(158, 180, 306, 70, 431, 515, 480, 526); // Draws a quad with corners at specified coords.
}