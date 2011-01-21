//Canvas size
var width = 1000
var height = 500;

var rocketx = 200;
var rockety = 200;

var gloop;

//Images
var rocketImg = new Image();

//Setting up canvas
var canV = document.getElementById('c');
var ican = canV.getContext('2d');

//Set Canvas size
canV.width = width;  
canV.height = height;

//Keypress event
document.onkeydown = pressRocket;
document.onkeyup = releaseRocket;

//Rockect direction variables
var upRocket = false;
var downRocket = false;
var leftRocket = false;
var rightRocket = false;

var rotation = 0;

var speed = 0;

function init()
{
loadImages();
loopGame();
}
 
function loadImages()
{
    rocketImg.src = "images/rocket.png";
}

function clear()
{
    ican.clearRect(0, 0, width, height);
}

function loopGame()
{
    
    clear();
    ican.save();
    ican.translate(rocketx/2, rockety/2);
    ican.rotate(rotation * Math.PI / 180);
    ican.drawImage(rocketImg, -50, -50, 100, 100);
    ican.restore();
    moveTest()
    
    gLoop = setTimeout(loopGame, 1000 / 50);
    
}

function moveTest()
{
    if (upRocket)
    {
        speed++;
    }
    
    if (downRocket)
    {
        speed = 0;
    }
    
    if (leftRocket)
    {
        
        rotation -= 5;
    }
    
    if (rightRocket)
    {
        rotation += 5;
    }
    
    //calculate spaceships new position via trigonometry
    rocketx += Math.sin(rotation * Math.PI / 180) * speed;
	rockety += Math.cos(rotation * Math.PI / 180) * -speed;
    
    if (Math.abs(speed) > 10)
        speed = 10;   
	if (speed == -2)
        speed = -2;
    
}
        

function pressRocket(e)
{
    if (!e) e = window.event;
    
    var code;
    if ((e.charCode) && (e.keyCode==0))
    {
        code = e.charCode
    }
    else
    {
        code = e.keyCode;   
    }
    
    switch(code)
    {
        // key down
        case 40: downRocket = true;
                 break;
        case 90: downRocket = true;
                 break;
        //key up
        case 38: upRocket = true;
                 break;
        case 65: upRocket = true;
                 break;
        //key left
        case 37: leftRocket = true;
                 break;
        //key right
        case 39: rightRocket = true;
                 break;
    }
}

function releaseRocket(e)
{
    if (!e) e = window.event;
    
    var code;
    if ((e.charCode) && (e.keyCode==0))
    {
        code = e.charCode
    }
    else
    {
        code = e.keyCode;
    }
    
    switch(code)
    {
        // key down
        case 40: downRocket = false;
                 break;
        case 90: downRocket = false;
                 break;
        //key up
        case 38: upRocket = false;
                 break;
        case 65: upRocket = false;
                 break;
        //key left
        case 37: leftRocket = false;
                 break;
        //key right
        case 39: rightRocket = false;
                 breakl
    }
}

//Engage!!!
init();

