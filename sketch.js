let font;
let points;

function preload (){
  font= loadFont ('assets/ABCGravity-ExtraCondensed.woff');
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  //Get the point array. 
  points = font.textToPoints('A', width/2, height/2, 500, {sampleFactor: 0.5});
}

function draw() {
  background(0);

  randomSeed(99);

stroke (255);
noFill();

    // Draw a dot at each point.
    for (let p of points) {
      //ellipse(p.x, p.y, 100, 100);
      let distX = random (-50,50);
    let distY = random (-50,50);

    line (p.x, p.y, p.y + distX, p.y + distY)
    }

    
  }



