let food;
let score;
let button;
let gameisover = false;
let snake ;
const scl = 20 ;
let canvas;
function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	snake = new Snake;
	frameRate(15);
	foodloc();
}
function draw(){
	background(50);
	snake.foul();
	if (!gameisover){
		snake.update();
	}
	snake.show();
	fill(50, 100, 255);
	noStroke();
	rect(food.x, food.y, scl, scl);
	if (snake.eatsfood(food)){
		food = foodloc();
	}
	fill(255);
	text('Score : ', 60, 100, 200, 200);
	text(score, 100, 100, 100, 100);	
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		snake.dir(0, -1) ;
	}
	else if (keyCode === DOWN_ARROW){
		snake.dir(0, 1) ;
	}
	else if (keyCode === RIGHT_ARROW){
		snake.dir(1, 0) ;
	}
	else if (keyCode === LEFT_ARROW){
		snake.dir(-1, 0) ;
	}
}
function foodloc(){
	row = floor(width/scl);
	col = floor(height/scl);
	food = createVector(floor(random(row)), floor(random(col)));
	food.mult(scl);
	return(food);
}
function gameover(){
	gameisover = true ;
	console.log('gameover');
	//rectMode(CENTER);
	fill(255);
	text('GAMEOVER!  Refresh the page to play again.', 30, 15, 500, 500);
}
