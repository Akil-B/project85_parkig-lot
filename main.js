//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext ("2d");
//Give specific height and width to the car image
greencar_height=100;
greencar_width=75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=255

function add() {
	background_imgTag = new Image();
	background_imgTag.onload =uploadBackground;
	background_imgTag.src = background_image;
    greencar_imgTag = new Image();
	greencar_imgTag.onload =uploadgreencar;
	greencar_imgTag.src = greencar_image;
    
}

function uploadgreencar() {
     ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);

}

function uploadBackground() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y>=0)
	{
      greencar_y=greencar_y-10;
	  console.log("When Up Arrow is pressed,x="+greencar_x +" and y ="+greencar_y);
	  uploadBackground();
	  uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
   	greencar_y=greencar_y+10;
	console.log("When Down Arrow is pressed,x="+greencar_x +" and y ="+greencar_y);
	uploadBackground();
	uploadgreencar();
}

function left()
{
	//Define function to move the car left side
    
	greencar_x=greencar_x-10;
	console.log("When Left Arrow is pressed,x="+greencar_x +" and y ="+greencar_y);
	uploadBackground();
	uploadgreencar(); 
}

function right()
{
	//Define function to move the car right side
	
	greencar_x=greencar_x+10;
	console.log("When Right Arrow is pressed,x="+greencar_x +" and y ="+greencar_y);
	uploadBackground();
	uploadgreencar();
}
