var ctx = document.getElementById("canvas").getContext("2d");
var eraseAllButton = document.getElementById("eraseAllButton");
var guidesCheckbox = document.getElementById("guidesCheckbox");
var strokeStyleSelect = document.getElementById("strokeStyleSelect");
mousedown = {},
dragging = false;

//function drawGrid
function drawGrid(ctx, color,incX,incY)
{
    ctx.strokeStyle= color;
    ctx.lineWidth = 0.5;
    for(var x = 0; x<ctx.canvas.width; x+=incX)
    {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,ctx.canvas.height);
        ctx.stroke();

    }

    for(var y = 0; y<ctx.canvas.height; y+=incY)
    {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(ctx.canvas.width,y);
        ctx.stroke();

    }
}

//inicializamos
drawGrid(ctx,"rgb(127,127,127)",20, 20);

//Funcion que conoce coordenadas.
function windowToCanvas(X,Y)
{
      var bounds = ctx.canvas.getBoundingClientRect();
      return {
            x: x - bounds.left * (ctx.canvas.width / bounds. width),
            y: y - bounds.top * (ctx.canvas.height / bounds.height)


      };
}
//Funcion  saveDrawingSurface(); POR HACER 

//Manejadores de eventos del canvas
ctx.canvas.onmousedown = function(e)
{
    var location = windowsToCanvas(e.clientX, e.clientY);

    //Esto me va a prevenir que se cambie el cursor
    e.preventDefault();
    saveDrawingSurface();
    mousedown.x = location.x;
    mousedown.y = location.y;
    dragging = true;
}