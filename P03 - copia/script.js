var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');



// Para poder pintar mousemove
// Evento para dibujar el rectangulo
canvas.onmousedown = function (e)
{
        context.beginPath();
        context.fillStyle = rgbaColor();
        context.fillRect(event.clientX, event.clientY, Math.floor(Math.random() * 400), Math.floor(Math.random() * 400));  

};

// Función para los colores random
function rgbaColor() 
{
    var r = 255 * Math.random()|0,
        g = 255 * Math.random()|0,
        b = 255 * Math.random()|0
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}



// Evento para dibujar las lineas guia
canvas.onmousemove = function(e)
{
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(0,y);
    context.lineTo(1600,y);
    context.moveTo(x,0);
    context.lineTo(x,595);
    context.strokeStyle = "black";//"rgb(255,255,255)";
    context.stroke();
    context.closePath();
    
};


function drawHorizontalLine()
{

    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
    context.lineTo(event.clientX, 0);

    context.moveTo(event.clientX, event.clientY);
    context.lineTo(0, event.clientY);
    context.lineTo(canvas.width, event.clientY);

    context.stroke();
}

function drawVerticalLine()
{

}

