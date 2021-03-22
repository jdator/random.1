let chakras = [{

  //crown
  affirm1: "I am connected to the universe.",
  affirm2: "I forgive myself and others."
}, {
  //third eye
  affirm1: "I am insightful and intuitive.",
  affirm2: "I open myself to inner guidance and wisdom."
}, {
  //throat
  affirm1: "I speak my truth and express myself honestly.",
  affirm2: "I can say no when necessary."
}, {
  //heart
  affirm1: "I accept myself and others as we are.",
  affirm2: "I am open to healthy and nourishing relationships."
}, {
  //solar plexus
  affirm1: "I step fully into my personal power.",
  affirm2: "My potential is unlimited."
}, {
  //sacral
  affirm1: "I am creative and joyful.",
  affirm2: "I honor my desires."
},{
  //root
  affirm1: "I accept the abundance in my life.",
  affirm2: "I am grounded and connected to earth."
}
  ];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(500, 500);


  colorMode(HSL, 125);
  rainbow = createImage(width, height)
  rainbow.loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let h = map(i, 0, width, 0, 100)
      rainbow.set(i, j, color(h, 100, 70));
    }
  }
  rainbow.updatePixels();

  background(220);
  image(rainbow, 0, 0);
  textSize(30);

  text("Click to receive your affirmation", 40, 240);


}

function draw() {

  if (animating == true){

   colorMode(RGB, 255)

  fill(0,0,255);
  stroke(0,0,255);
ellipse(random(width),random(height),random(50,150));

  fill(255);
  stroke(255);
ellipse(random(width),random(height),random(50,100));

  fill(153,204,255);
  stroke(153,204,255);
ellipse(random(width),random(height),random(50,50));

  fill(0);
  stroke(0);
ellipse(random(width),random(height),random(50,25));
  }
}


function randomizer(){
  animating = false;

   if (chakras[0]){

  background(220);
  image(rainbow, 0, 0);
  fill(0)
  stroke(0)
  textSize(20);
  randomIndex = int(random(chakras.length));

text(`${chakras[randomIndex].affirm1}

${chakras[randomIndex].affirm2}`, 50, 240);

}
}

function mousePressed(){

  animating = true;

  setTimeout(randomizer, 2000);

}
