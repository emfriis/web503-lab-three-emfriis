function setup() {
    createCanvas(600, 600); // Creates the canvas.
    background(255, 204, 0); // Selects yellow background colour.
}

function draw() {
    stroke('red'); // Selects red stroke colour.
    strokeWeight(6); // Selects stroke weight of 6.
    rect(300, 300, 200, 100, 45); // Draws a rectangle with specified coords and dimensions, and corner angles of 45 degrees.
}