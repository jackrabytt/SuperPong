//Declaring variable numbers, sprites, score.
var dx = 10;
var dy = 10;
var spr1;
var spr2;
var score = 0;
//creating canvas, paddle and ball.
function setup() {
  createCanvas(1490, 710);
  paddle = createSprite(
    width -30, height/2, 20, 100);
  paddle.shapeColor = (255);
    ball = createSprite(200,300, 50, 50);
  ball.shapeColor = (random(0, 255), random(0, 255), random(0, 255));
    
}
//Drawing background, defining ball movement.
function draw() {
    background(random(0, 255), random(0, 255), random(0, 255), 20);
    ball.position.x = (ball.position.x)+ dx;
    ball.position.y = (ball.position.y)+ dy + random(0,10);
    textSize(72);
    

//Making the paddle able to collide with the ball.
paddle.velocity.y = (mouseY-paddle.position.y)*0.2;
  ball.collide(paddle, collision)
    
//Creating barriers on the top, bottom, and left walls causing the ball to collide and bounce off of it.
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
  //Telling you if you lost. Aka the ball goes past the paddle on the right wall.
       if (ball.position.x >= width) {
           stroke(255);
           fill(255);
            text("YOU SUCK", width/2, height/2);
  //Setting up score counter.
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
//Collision
function collision (){
    dx = -dx 
    ball.position.x = ball.position.x + dx;  
}
