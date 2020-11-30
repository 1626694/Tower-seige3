var score=0;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
async function getBackground(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson=await response.json();
  console.log(responseJson)
  var date=responseJson.datetime;
  var hour=date.slice(11,13)
  console.log(date);
}