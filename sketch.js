/* 
const CELLSIZE = 50
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"]

function setup() {
  createCanvas(500, 500);
  // noLoop();
  frameRate(3)

  // rectMode(CENTER)
}

function draw() {
  background(0);

  // basic heart grid
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

      arc(x + CELLSIZE / 4, y + CELLSIZE / 3, CELLSIZE / 2, CELLSIZE / 2, PI, 0)
      arc(x + 3 * CELLSIZE / 4, y + CELLSIZE / 3, CELLSIZE / 2, CELLSIZE / 2, PI, 0)
      triangle(x, y + CELLSIZE / 3, x + CELLSIZE / 2, y + CELLSIZE, x + CELLSIZE, y + CELLSIZE / 3)

      // simple mouse interactivity
      // if (mouseX >= x && mouseX <= x + CELLSIZE && mouseY >= y && mouseY <= y + CELLSIZE) {
      //   // stroke(random(COLOURS))
      //   stroke(200, 0, 0)
      //   strokeWeight(10)
      //   strokeCap(SQUARE)
      //   line(x, y, x + CELLSIZE, y + CELLSIZE)
      //   line(x + CELLSIZE, y, x, y + CELLSIZE)
      // } else {
      //   arc(x + CELLSIZE / 4, y + CELLSIZE / 3, CELLSIZE / 2, CELLSIZE / 2, PI, 0)
      //   arc(x + 3 * CELLSIZE / 4, y + CELLSIZE / 3, CELLSIZE / 2, CELLSIZE / 2, PI, 0)
      //   triangle(x, y + CELLSIZE / 3, x + CELLSIZE / 2, y + CELLSIZE, x + CELLSIZE, y + CELLSIZE / 3)
      // }
    }
  }
}

*/

/*
const BASE_CELLSIZE = 50; // Base cell size
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"];

let isPressing = false;

function setup() {
  createCanvas(700, 500);
  frameRate(5);

  rectMode(CENTER)
}

function draw() {
  background(0);

  // Heart grid with interactive scaling
  for (let y = 0; y < height; y += BASE_CELLSIZE) {
    for (let x = 0; x < width; x += BASE_CELLSIZE) {

      // Set fill color
      fill(random(COLOURS));
      noStroke();


      // Calculate the center of the current heart
      let centerX = x + BASE_CELLSIZE / 2;
      let centerY = y + BASE_CELLSIZE / 2;

      // Calculate distance from heart center to mouse position
      let mouseDistance = dist(centerX, centerY, mouseX, mouseY);

      // Scale cell size based on distance (closer -> larger, farther -> smaller)
      let scaledSize = map(mouseDistance, 0, width, BASE_CELLSIZE * 1.5, BASE_CELLSIZE * 0.5);
      scaledSize = constrain(scaledSize, BASE_CELLSIZE * 0.5, BASE_CELLSIZE * 1.5);

      // Draw the heart
      let heartWidth = scaledSize;
      let heartHeight = scaledSize * 0.6;

      // Top-left arc
      arc(centerX - heartWidth / 4, centerY - heartHeight / 4, heartWidth / 2, heartHeight / 2, PI, 0);
      // Top-right arc
      arc(centerX + heartWidth / 4, centerY - heartHeight / 4, heartWidth / 2, heartHeight / 2, PI, 0);
      // Bottom triangle
      triangle(
        centerX - heartWidth / 2, centerY - heartHeight / 4,
        centerX + heartWidth / 2, centerY - heartHeight / 4,
        centerX, centerY + heartHeight / 2
      );

    }
  }
}

*/

const CELLSIZE = 50
const COLOURS = ["#330019", "#660033", "#99004C", "#CC0066", "#FF007F", "#FF3399", "#FF66B2", "#FF99CC", "#FFCCE5"]
const SHAPES = [1, 2, 3]

function setup() {
  createCanvas(500, 500);
  // noLoop();
  frameRate(3)

  // rectMode(CENTER)
}

function draw() {
  background(255);

  // basic heart grid
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {

      rect(x,y,CELLSIZE)
      // sets colours
      fill(random(255), random(255), random(255))
      // noStroke()



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

