var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var dia = canvas.width;
var radius = dia * 0.5;

context.translate(0.5, 0.5);                        

for(; y < dia; y++) 
{                           
    for(x = 0; x < dia; x++)
    {
        context.fillStyle = getRndColor();          
        context.fillRect(x, y, 1, 1);              
    }
}

// create circle

// removes pixels outside next shape
context.globalCompositeOperation = 'destination-in'; 
context.arc(radius, radius, radius, 0, 2*Math.PI);
context.fill();

// reset
context.globalCompositeOperation = 'source-over'; 

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}



/*
context.fillstyle = 'rgba (0,0, 255, 0.5)'; 
Math.floor(Math.random() * max);
context.fillRect(325, 100, 200, 200);
onmousedown */ 