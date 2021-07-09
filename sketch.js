let x = 5
let y = 5
let z = 5
let c = 30
function setup() {
  createCanvas(700, 500);
  textSize(20);
  background(2, 2, 0);
}

function draw() {
  if (mouseIsPressed) {
      background(2, 2, 0);
  }
 
  
 if (keyIsPressed == true && key == "1") {
    background(100, 0, 0);
  }
  if (keyIsPressed == true && key == "2") {
    background(0, 100, 0);
  }
 
  if (keyIsPressed == true && key == "3") {
    background(0, 0, 100);
  }
  if (keyIsPressed == true && key == "4") {
    background(100, 0, 100);
  }
  if (keyIsPressed == true && key == "5") {
    background(200, 200, 0);
  }
 if (keyIsPressed == true && key == "6") {
    background(200, 100, 0);
  }
 if (keyIsPressed == true && key == "7") {
    background(200, 200, 200);
  }
  if (keyIsPressed == true && key == "8") {
    background(0, 100, 100);
  }
 
  
  if (keyIsPressed == true && key == "z") {
    x=x+1
  }
  if (keyIsPressed == true && key == "x") {
    y=y+1
  } 
  if (keyIsPressed == true && key == "c") {
    z=z+1
  }
  
  if (keyIsPressed == true && key == "v") {
    x=x-1
  }
  if (keyIsPressed == true && key == "b") {
    y=y-1
  } 
  if (keyIsPressed == true && key == "n") {
    z=z-1
  }
 


 
  noStroke();
   if (keyIsPressed == true && key == "p") { c=0 }
  if (keyIsPressed == true && key == "r") { c=30 }
  fill(x, y, z);
                  ellipse(mouseX, mouseY, c, c);
  
 
  fill(100,0,0)
                 rect(0,470,30,30)
  fill(0,100,0)
                 rect(30,470,30,30)              
  fill(0,0,100)
                 rect(60,470,30,30)
  fill(100,0,100)
                 rect(90,470,30,30)
  fill(200,200,0)
                 rect(120,470,30,30)
  fill(200,100,0)
                 rect(150,470,30,30)
  fill(200,200,200)
                 rect(180,470,30,30)
  fill(0,100,100)
                 rect(210,470,30,30)
  fill(100,100,100);
   //text(key,50,50)
  text(1, 10, 489);
  text(2, 40, 489);
  text(3, 70, 489);
  text(4, 100,489);
  text(5, 130,489);
  text(6, 160,489);
  text(7, 190,489);
  text(8, 220,489);
}
