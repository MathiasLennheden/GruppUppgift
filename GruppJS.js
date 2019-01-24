var ruta = document.getElementById("box");
var ruta2 = document.getElementById("box2");
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

function getRandomColor () {
    for(var i = 0; i<1; i++){

        var hex = Math.floor(Math.random() * 0xFFFFFF); 
    }
        
        return "#" + ("000000" + hex.toString(16)).substr(-6);
 
  }
 
  window.addEventListener("keydown",function(){
    var key = event.keyCode;
    var alfa;
    switch (key) {
        case 32:
            alfa = "Space";
            break;
        case 27:
            alfa = "ESC";
            break;
        default:
            alfa = String.fromCharCode(key);
    }
});


ruta2.addEventListener("mouseover",function(){
    ruta2.style.backgroundColor="red";
    ruta2.style.color="white";
    ruta2.innerHTML="<h1>Mouseover</h1>"
},false);

ruta2.addEventListener("mouseout",function(){
    ruta2.style.backgroundColor="white";
    ruta2.style.color="black";
    ruta2.innerHTML="<h1>Try to hover over this</h1>"
},false);


