var Q1
var Q1grade
var Q2
var Q2grade
var final
var finalgrade
var average

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor("http://www.texasenvironmentalnews.com/wp-content/themes/rt_enigma_wp/images/custom/green-leaf2.png?09caa4");
  
  // quarter 1 slider
    Q1 = createSlider(0, 100, 65);
    Q1.position(windowWidth*1/9, 225);
    
  // quarter 2 slider
    Q2 = createSlider(0, 100, 65);
    Q2.position(windowWidth*1/9, 275);
    
  // quarter 2 slider
    final = createSlider(0, 100, 80);
    final.position(windowWidth*1/9, 325);
}

function draw() {
    background(220);
    textFont("Trebuchet MS", 32);
    fill("green");
    // textAlign(CENTER);
    
    Q1grade = Q1.value();
    text("Quarter 1 Grade (40%): " + Q1grade, Q1.x * 2, 150);
    
    Q2grade = Q2.value();
    text("Quarter 2 Grade (40%): " + Q2grade, Q2.x * 2, 200);
    
    finalgrade = final.value();
    text("Final Exam Grade (20%): " + finalgrade, final.x * 2, 250);
    
    var average = ((Q1grade*0.40 + Q2grade*0.40 + finalgrade*0.20));
    text("Semester Average: " + average.toFixed(2), final.x * 2, 300)
}

