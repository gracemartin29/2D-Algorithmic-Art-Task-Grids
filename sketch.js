const CELLSIZE = 50
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"]

function setup() {
  createCanvas(500, 500);
  // noLoop();
  frameRate(3)
}

function draw() {
  background(0);

  // basic heart grid
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      
      arc(x + CELLSIZE/4, y + CELLSIZE/3, CELLSIZE/2, CELLSIZE/2, PI, 0)
      arc(x + 3*CELLSIZE/4, y + CELLSIZE/3, CELLSIZE/2, CELLSIZE/2, PI, 0)
      triangle(x, y+CELLSIZE/3, x+CELLSIZE/2, y+CELLSIZE, x+CELLSIZE, y+CELLSIZE/3)
     
      fill(random(COLOURS))
      noStroke()

    }
  }
}
