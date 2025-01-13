// pressing mouse interactive heart grid
/*
const CELLSIZE = 50
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"]

let isPressing = false;

function setup() {
  createCanvas(500, 500);
  // noLoop();
  frameRate(4)
}

function draw() {
  background(0);

  // sets up grid
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {

  // sets colours
      fill(random(COLOURS))
      noStroke()

  // calculate heart position
      var heartX = x * CELLSIZE;
      var heartY = y * CELLSIZE;

  // calculate distance from heart to mouse position
      var mouseDistance = dist(heartX, heartY, mouseX, mouseY)

      // simple mouse interactivity
      if (isPressing && mouseX >= x && mouseX <= x + CELLSIZE && mouseY >= y && mouseY <= y + CELLSIZE) {
        stroke(random(COLOURS))
        strokeWeight(10)
        strokeCap(SQUARE)
        line(x, y, x + CELLSIZE, y + CELLSIZE)
        line(x + CELLSIZE, y, x, y + CELLSIZE)
      } else {
        arc(x + CELLSIZE / 4, y + CELLSIZE / 3, CELLSIZE / 2, CELLSIZE / 2, PI, 0)
        arc(x + 3 * CELLSIZE / 4, y + CELLSIZE / 3, CELLSIZE / 2, CELLSIZE / 2, PI, 0)
        triangle(x, y + CELLSIZE / 3, x + CELLSIZE / 2, y + CELLSIZE, x + CELLSIZE, y + CELLSIZE / 3)
      }
    }
  }
}

function mousePressed(){
  isPressing = true;
}
function mouseReleased(){
  isPressing = false;
}
*/

// non pressing mouse interactive heart grid (helped from chat gpt)

const CELLSIZE = 50; 
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"];


function setup() {
  createCanvas(700, 500);
  frameRate(5);

  rectMode(CENTER)
}

function draw() {
  background(0);

  // draw grid
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {

      // set fill color
      fill(random(COLOURS));
      noStroke();

      // calculate the center of the current heart
      let centerX = x + CELLSIZE/ 2;
      let centerY = y + CELLSIZE/ 2;

      // calculate distance from heart center to mouse position
      let mouseDistance = dist(centerX, centerY, mouseX, mouseY);

      // scale cell size based on distance (closer = larger, farther = smaller)
      let scaledSize = map(mouseDistance, 0, width/2, CELLSIZE * 1.5, CELLSIZE * 0.5);
      scaledSize = constrain(scaledSize, CELLSIZE * 0.5, CELLSIZE * 1.5);

      // drawing the heart
      let heartWidth = scaledSize;
      let heartHeight = scaledSize * 0.6;

      arc(centerX - heartWidth/ 4, centerY - heartHeight/ 4, heartWidth/ 2, heartHeight/ 2, PI, 0);
      arc(centerX + heartWidth/ 4, centerY - heartHeight/ 4, heartWidth/ 2, heartHeight/ 2, PI, 0);
      triangle(centerX - heartWidth/ 2, centerY - heartHeight/ 4, centerX + heartWidth/ 2, centerY - heartHeight/ 4, centerX, centerY + heartHeight/ 2);

    }
  }

  // silly added text
  // fill(255,0,0)
  // textSize(50)
  // textStyle(BOLD)
  // text("mwah", width/2, height/2)

}

// random shapes
/*
const CELLSIZE =25
const SHAPES = [1, 2, 3]

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255);

  // draw grid
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {

    // set colour and outline
      fill(random(100,255), random(100,150), 0)
      strokeWeight(2)

      // draws initial map of grid
      rect(x,y,CELLSIZE)

      // randomly selects extra shapes to draw 
      if (random(SHAPES) == 1) {
        circle(x, y, CELLSIZE/2)
      } else if (random(SHAPES) == 2) {
      triangle(x, y + CELLSIZE / 3, x + CELLSIZE / 2, y + CELLSIZE, x + CELLSIZE, y + CELLSIZE / 3)
      } else if (random(SHAPES) == 3){
        ellipse(x+CELLSIZE/2, y+CELLSIZE/2, CELLSIZE/2, CELLSIZE-5)
      }

    }
  }
}
*/
