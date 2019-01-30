

// Variabler
//Tre rader som byter färg till gul när man trycker på den raden
var rad1 = document.getElementById("rad1");
var rad2 = document.getElementById("rad2");
var rad3 = document.getElementById("rad3");


rad1.addEventListener("click",function(){
rad1.style.backgroundColor="yellow";
rad2.style.backgroundColor="white";
rad3.style.backgroundColor="white";
},false);

rad2.addEventListener("click",function(){
    rad1.style.backgroundColor="white";
    rad2.style.backgroundColor="yellow";
    rad3.style.backgroundColor="white";
},false);

rad3.addEventListener("click",function(){
    rad1.style.backgroundColor="white";
    rad2.style.backgroundColor="white";
    rad3.style.backgroundColor="yellow";
},false);

//Rutan där man klickar för att byta bakgrundsfärg i rutan
var ruta = document.getElementById("box");
var nr = 0;

 ruta.addEventListener("click",function()
{ 
    if(nr == 0){
        ruta.style.backgroundColor=getRandomColor();
        nr = 1;
    }
    else{
        ruta.style.backgroundColor=getRandomColor();
        nr=0;
    }

},false);  

//funktion för att slumpa färg
function getRandomColor () {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 return bgColor;
  }
 
/*   window.addEventListener("keydown",function(){
    var key = event.keyCode;
    var alfa;
    switch (key) {
        case 32:
            alfa = "Space";
            break;
        case 27:
            alfa = "ESC";
            break;
        default: alfa = String.fromCharCode(key);
    }
    ruta.innerHTML+="Du tryckte på"+alfa+"<br>";
}); */

//Ruta2 vilket är rutan med mouseover och mouseout event
var ruta2 = document.getElementById("box2");


ruta2.addEventListener("mouseover",function(){
    ruta2.style.backgroundColor="red";
    ruta2.style.color="white";
    
    ruta2.innerHTML="<h3>Mouseover</h3>"
},false);

ruta2.addEventListener("mouseout",function(){
    ruta2.style.backgroundColor="green";
    ruta2.style.color="black";
    ruta2.innerHTML="<h3>Mouseout</h3>"
},false);

// Rutan där man kan rita vad man vill
canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

//variabler som används inom diverse funktioner
var pos;   //position
var klottra = false;
var lw=1; //lineWidth

window.addEventListener("keydown",function()
{
	key=event.keyCode;
	if(key==38) lw=lw+1;
	if(key==40 && lw>1) lw=lw-1;
});

canvas.addEventListener("mousedown",function(evt)
{
	//börja rita
	klottra=true;  //ok att börja rita
	pos=mPos(evt);  //hämta in som en array med x och y position

	c.moveTo(pos.x,pos.y);  //börja linjen
},false);
canvas.addEventListener("mouseup",function(evt)
{
	//sluta rita när man inte håller ner vänsterklick

	klottra = false;
},false);

canvas.addEventListener("mousemove",function(evt)
{
    //rita
	if(klottra)
	{
        
        pos=mPos(evt);
        c.lineTo(pos.x,pos.y);
        c.lineWidth=lw;
        c.strokeStyle="black";
        c.stroke();
        
	}


},false);

function mPos(evt) {     //mousePosition

    var rek = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rek.left,
    	y: evt.clientY - rek.top
			};
};


//Ruta3 som gör att när du trycker ner en valfri tangent så ändras färgen i rutan
var ruta3 = document.getElementById("box3");
window.addEventListener("keydown",function(){
    ruta3.style.backgroundColor = getRandomColor();
}),false




//funktion för att skicka alert när ett värde ändras
function ourFunction(inmatning){
    
    alert("Värdet har ändrats. Nya värdet är " + inmatning);
}

//funktion för onload event
function myFunction(){
    alert("Hej och välkomna till leklandet");
}

//funktion för att rensa canvas-rutan 
function rensa(){
    
    
    c.beginPath();
    c.fillStyle="white";
    c.fillRect(0,0,canvas.width, canvas.height);
    c.closePath();
    
}
 
canvas1 =document.getElementById("canvas1");
c1 = canvas1.getContext("2d");

var xpos = 300;
var frame = 96;  //bildruta kommer att förändras med 32 varje gång
var img = new Image();
img.src = "mario1.png";
img.onload = function()
{
    //drawImage(bild, x-start, y-start, bredd, höjd, x-position där bilden ska visas, y-position där bilden ska visas, bredd, höjd)
    c1.drawImage(img,frame,0,32,64,xpos,200,32,64);
};

c1.moveTo(0,264);
c1.lineTo(600,264)
c1.stroke();

window.addEventListener("keydown",function()
{
    var key=event.keyCode;
    if(key==39) //höger
        {
            goRight=window.requestAnimationFrame(right);
        }
    if(key==37) //vänster
        {
            goLeft=window.requestAnimationFrame(left);
        }


},false);

window.addEventListener("keyup",function()
{
    sudda();
    c1.drawImage(img,96,0,32,64,xpos,200,32,64);
},false);

function sudda()
    {
        c1.clearRect(0,0,600,400);
        c1.moveTo(0,264);  //skapa en linje som han går på
        c1.lineTo(600,264) //skapa en linje som han går på
        c1.stroke();       //skapa en linje som han går på
    }

function left()
{
    sudda();
    c1.drawImage(img,0+frame,0,32,64,xpos,200,32,64);
    var nu = new Date().valueOf(); // ValueOf = Tid i millisekunder
    frame = 32*(Math.floor(nu/100)%3);
    xpos -=25;
    if(xpos < -40) xpos = 640;

}

function right()
{
    sudda();
    c1.drawImage(img,192-frame,0,32,64,xpos,200,32,64);
    var nu = new Date().valueOf(); // ValueOf = Tid i millisekunder
    frame = 32*(Math.floor(nu/100)%3);
    xpos +=25;
    if(xpos > 640) xpos = -40;

}

