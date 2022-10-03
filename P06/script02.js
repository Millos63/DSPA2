var ctx = document.getElementById("canvas").getContext("2d");
var eraseAllButton = document.getElementById("eraseAllButton");
var guidesCheckbox = document.getElementById("guidesCheckbox");
var lineSize = document.getElementById("lineSize");
var strokeStyleSelect = document.getElementById("strokeStyleSelect"),
mousedown = {},
dragging = false,
drawingSurfaceImageData,
guides = guidesCheckbox.checked,
lineRect = {};

//function drawGrid
function drawGrid(ctx, color,incX,incY)
{
    ctx.strokeStyle= color;
    ctx.lineWidth = 0.5;
    for(var x = 0; x<ctx.canvas.width; x += incX)
    {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,ctx.canvas.height);
        ctx.stroke();

    }

    for(var y = 0; y<ctx.canvas.height; y += incY)
    {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(ctx.canvas.width,y);
        ctx.stroke();

    }
}


//Funcion que conoce coordenadas.
//Obtenemos del canvas nuestros limites, y regresamos el X y Y para trabajar mas adelante
function windowToCanvas(x, y)
{
      var bounds = ctx.canvas.getBoundingClientRect();
      return {
            x: x - bounds.left * (ctx.canvas.width / bounds.width),
            y: y - bounds.top * (ctx.canvas.height / bounds.height)
      };
}

//Funcion  saveDrawingSurface() CON ESTE SALVAS LO QUE ESTA DIBUJADO
function saveDrawingSurface()
{
    //Variable que permite obtener los datos de la imagen.
    drawingSurfaceImageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
}

//funcion restoreDrawingSurface() CON ESTE RESTAURAS LO QUE ESTABA DIBUJADO.
function restoreDrawingSurface()
{
    //Para borrar
    ctx.putImageData(drawingSurfaceImageData, 0, 0);
}

//funcion updateLinesRectangle(location)
//Este es el mero mero que servira para pintar
function updateLinesRectangle(location)
{
    //Propiedades de un pequeño rectangulo para saber si estoy pintando hacia un lado o hacia el otro.

    lineRect.width = Math.abs(location.x - mousedown.x);
    lineRect.height = Math.abs(location.y - mousedown.y);
    if(location.x > mousedown.x)
    {
        lineRect.left = mousedown.x
    }
    else
    {
        lineRect.left = location.x
    }
        
    

    if(location.y > mousedown.y)
    {
        lineRect.top = mousedown.y
    }
    else
    {
        lineRect.top = location.y
    }
        
    
}

// funcion drawLinesShape, para dibujar las lineas
function drawLinesShape(location)
{
    ctx.beginPath();
    ctx.lineWidth = lineSize.value;
    ctx.strokeStyle = strokeStyleSelect.value; 
    ctx.moveTo(mousedown.x, mousedown.y);
    ctx.lineTo(location.x, location.y);
    ctx.stroke();
}
//funcion updateLines
function updateLines(location)
{
    updateLinesRectangle(location);
    drawLinesShape(location);

}
//funcion drawGuides(location.x, location.y);
function drawGuides(x, y)
{


}

//-------Manejadores de eventos del canvas
ctx.canvas.onmousedown = function(e)
{
    var location = windowToCanvas(e.clientX, e.clientY);

    //Esto me va a prevenir que se cambie el cursor
    e.preventDefault();
    //Hay que salvar lo que hacemos, para poder dibujar mas cosas sin que se borre lo demas.
    saveDrawingSurface();
    //Voy a obtener en una variable de mousedown algunos valores que son X y Y
    mousedown.x = location.x;
    mousedown.y = location.y;
    //Dragging es para arrastrar
    dragging = true;
}

ctx.canvas.onmousemove = function(e)
{
    var location;
    if (dragging == true)
    {
        e.preventDefault();
        location = windowToCanvas(e.clientX, e.clientY);
        //Restauro mi superficie de trabajo.
        restoreDrawingSurface();
        //Restauro mi linea en la posición
        updateLines(location);
        if(guides == true)
        {
            drawGuides(location.x, location.y)
        }
    }

}

ctx.canvas.onmouseup = function(e)
{
    var location = windowToCanvas(e.clientX, e.clientY);
    restoreDrawingSurface();
    updateLines(location);
    dragging  = false;
}

//inicializamos
drawGrid(ctx,"rgb(127,127,127)",20, 20);
