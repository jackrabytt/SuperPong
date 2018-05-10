var dx = 10;
var dy = 10;
var spr1;
var spr2;
var score = 0;
function setup() {
  createCanvas(1490, 710);
  paddle = createSprite(
    width -30, height/2, 20, 100);
  paddle.shapeColor = (255);
    ball = createSprite(200,300, 50, 50);
  ball.shapeColor = (random(0, 255), random(0, 255), random(0, 255));
    
}
function draw() {
    background(random(0, 255), random(0, 255), random(0, 255), 20);
    ball.position.x = (ball.position.x)+ dx;
    ball.position.y = (ball.position.y)+ dy + random(0,10);
    textSize(72);
    


paddle.velocity.y = (mouseY-paddle.position.y)*0.2;
  ball.collide(paddle, collision)
    
    
if(ball.position.x > width){
//    dx = -dx 
//    ball.position.x = ball.position.x + dx;
}
if(ball.position.y > height){
    dy = -dy 
    ball.position.y = ball.position.y + dy;
}
if(ball.position.x < 0){
    dx = -dx 
    ball.position.x = ball.position.x + dx;
}
if(ball.position.y < 0){
    dy = -dy 
    ball.position.y = ball.position.y + dy;
} 
    
    if(ball.position.x < width){
     ball.position.x = ball.position.x + dx;
} 
       if (ball.position.x >= width) {
           stroke(255);
           fill(255);
            text("YOU SUCK", width/2, height/2);
        }
    if(ball.position.x <= 10){
        score += 1;
        textSize(150)
         stroke(255);
           fill(255);
            text(score, width/2 -75, height/2 +75);      
    }
       
  drawSprites();
}
function collision (){
    dx = -dx 
    ball.position.x = ball.position.x + dx;  
}
