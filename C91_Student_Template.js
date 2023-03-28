canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racing.jpg";

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, fazendo o onload desta variável
	backgroundImgTag.src = backgroundImage;   // carregando a imagem

	car1ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car1ImgTag.onload = uploadcar1; // ajustando uma função, fazendo o onload desta variável
	car1ImgTag.src = car1Image;   // carregando a imagem

	car2ImgTag = new Image(); //definindo uma variável com uma nova imagem
	car2ImgTag.onload = uploadcar2; // ajustando uma função, fazendo o onload desta variável
	car2ImgTag.src = car2Image;   // carregando a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}


window.addEventListener("keydown", my_keydown);

function car1_up()
{ 
	if(car1Y >=0) 
	{
		car1Y = car1Y - 10; 
		console.log("Quando a seta para cima é pressionada, x = "+ car1X + "| y = "+ car1Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
	}

function car1_down()
{ 
	if(car1Y <=500)
	{
		car1Y = car1Y + 10; 
		console.log("Quando a seta para baixo é pressionada, x = "+ car1X + "| y = "+ car1Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
}

function car1_left()
{ 
	if(car1Y >=0)
	{
		car1Y = car1Y - 10; 
		console.log("Quando a seta para esquerda é pressionada, x = "+ car1X + "| y = "+ car1Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
}

function car1_right()
{ 
	if(car1Y <=700)
	{
		car1Y = car1Y + 10; 
		console.log("Quando a seta para direita é pressionada, x = "+ car1X + "| y = "+ car1Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
}

function car2_up()
{ 
	if(car2Y >=0) 
	{
		car2Y = car2Y - 10; 
		console.log("Quando a seta para cima é pressionada, x = "+ car2X + "| y = "+ car2Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
	}

function car2_down()
{ 
	if(car2Y <=500)
	{
		car2Y = car2Y + 10; 
		console.log("Quando a seta para baixo é pressionada, x = "+ car2X + "| y = "+ car2Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
}

function car2_left()
{ 
	if(car2Y >=0)
	{
		car2Y = car2Y - 10; 
		console.log("Quando a seta para esquerda é pressionada, x = "+ car2X + "| y = "+ car2Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
}

function car2_right()
{ 
	if(car2Y <=700)
	{
		car2Y = car2Y + 10; 
		console.log("Quando a seta para direita é pressionada, x = "+ car2X + "| y = "+ car2Y); 
		uploadBackground(); 
		uploadcar1(); 
		uploadcar2();}
}

function my_keydown()
{ 
	if(car1X > 700)
	{ 
		console.log("car1"); 
		document.getElementeById('gameStatus').innerHTML = "Carro 1 Venceu!!";
	}
}

function my_keydown()
{ 
	if(car2X > 700)
	{ 
		console.log("car2"); 
		document.getElementeById('gameStatus').innerHTML = "Carro 2 Venceu!!";
	}
}