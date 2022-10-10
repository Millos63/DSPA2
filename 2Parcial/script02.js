var ctx = document.getElementById("canvas").getContext("2d");
var eraseAllButton = document.getElementById("eraseAllButton");
var guidesCheckbox = document.getElementById("guidesCheckbox");
var figure = document.getElementById("figure");
var strokeStyleSelect = document.getElementById("strokeStyleSelect");
var fillStyleSelect = document.getElementById("fillStyleSelect");
var lineSize = document.getElementById("lineSize");
var fillCheckbox = document.getElementById("fillCheckbox");
var mousedown = {};
var dragging = false;
var drawingSurfaceImageData;
var fill = fillCheckbox.checked;
var guides = guidesCheckbox.checked;
var lineRect = {};
var figura = document.getElementById("figureStyle");

//Función drawGrid
function drawGrid(ctx, color, incX, incY)
{
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    for(var x = 0; x < ctx.canvas.width; x += incX)
    {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ctx.canvas.height);
        ctx.stroke();
    }

    for(var y = 0; y < ctx.canvas.height; y += incY)
    {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(ctx.canvas.width, y);
        
        ctx.stroke();
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;
}

//Función que convierte coordenadas
function windowToCanvas(x, y)
{
    var bounds = canvas.getBoundingClientRect();
    return{
        x: x - bounds.left * (ctx.canvas.width/bounds.width),
        y: y - bounds.top * (ctx.canvas.height/bounds.height)
    };
}

//saveDrawingSurface
function saveDrawingSurface()
{
    drawingSurfaceImageData = ctx.getImageData(0,0, ctx.canvas.width, canvas.height);

}

//Función restaurar pantalla
function restoreDrawingSurface()
{
    ctx.putImageData(drawingSurfaceImageData, 0, 0);
}

//Función updateLinesRectangle
function updateLinesRectangle(location)
{
    lineRect.width = Math.abs(location.x - mousedown.x);
    lineRect.height = Math.abs(location.y - mousedown.y);

    if(location.x > mousedown.x)
    {
        lineRect.left = location.x;
    }
    else
    {
        lineRect.left = location.x;
    }

    if(location.y > mousedown.y)
    {
        lineRect.top = location.y;
    }
    else
    {
        lineRect.top = location.y;
    }
}

//------------------- Funciones para hacer las figuras ------------------ 
//Función drawLinesShape
function drawLinesShape(location)
{
    //Para el grosor de la linea
    ctx.lineWidth = lineSize.value;
    //Para el color de la linea
    ctx.strokeStyle = strokeStyleSelect.value;

    
    //Línea
    if(figure.value == "line")
    {
        ctx.beginPath();
        ctx.moveTo(mousedown.x, mousedown.y);
        ctx.lineTo(location.x, location.y);
        ctx.stroke();
    }
    
    //Poligonos de distintos tipos
    // Lados del poligono, se pregunta que figura se necesita, y dependiendo de la figura es el numero de lados que se harán 
	var sides;
    //Los slopes nos ayudaran a dejar a las figuras con una buena posición
    var slope1;
    var slope2;

    
    //circle
    if(figure.value == "circle")
    {
        ctx.beginPath();
        ctx.ellipse(mousedown.x,mousedown.y,lineRect.width,lineRect.height,Math.PI,0,2*Math.PI);
        ctx.stroke();
        if(fill = fillCheckbox.checked)
        {
            ctx.fillStyle = fillStyleSelect.value; 
            ctx.fill();
        }
    }
    
    ////triangle
    if(figure.value == "triangle")
    {
        sides = 3;	
        slope1 = 54.98;
        slope2 = 54.98;
    }
    ////Diamond
    if(figure.value == "diamond")
    {
        sides = 4;	 
        slope1 = 0;
        slope2 = 0;
    }
    ////square
    if(figure.value == "square")
    {
        sides = 4;	 
        slope1 = 0.785;
        slope2 = 0.785;
    }

    //paralelogram
    if(figure.value == "parallelogram")
    {
        sides = 4;	 
        slope1 = 0.5;
        slope2 = 0.785;
    }
    ////pentagon
    if(figure.value == "pentagon")
    {
        sides = 5;	 
        slope1 = 0.945;
        slope2 = 0.945;
    }
    //Hexagon
    if(figure.value == "hexagon")
    {
        sides = 6;	 
        slope1 = 0;
        slope2 = 0;
    }
    //Heptagon
    if(figure.value == "heptagon")
    {
        sides = 7;	 
        slope1 = 1.125;
        slope2 = 1.125;
    }
    //Octagon
    if(figure.value == "octagon")
    {
        sides = 8;	 
        slope1 = 0.785;
        slope2 = 0.785;
    }
    //Nonagon
    if(figure.value == "nonagon")
    {
        sides = 9;	 
        slope1 = 0.785;
        slope2 = 0.785;
    }
    //Decagon
    if(figure.value == "decagon")
    {
        sides = 10;	 
        slope1 = 0.785;
        slope2 = 0.785;
    }

    var rad = Math.PI/sides*2;
	ctx.beginPath();
    for( var i = 0; i <= sides; i++ )
    {
        x = mousedown.x + lineRect.width * Math.cos(rad*i + (slope1));  
        y = mousedown.y + lineRect.height * Math.sin(rad*i + (slope2)); 
        ctx.lineTo(x, y);
       
    }
    
    ctx.stroke();

    if(fill = fillCheckbox.checked)
    {
        ctx.fillStyle = fillStyleSelect.value; 
        ctx.fill();
    }
    
}

//Funcion para actualizar las líneas
function updateLines(location)
{
    updateLinesRectangle(location);
    drawLinesShape(location);
}

//Función drawVerticalLine
function drawVerticalLine(x)
{
    ctx.beginPath();
    ctx.moveTo(x, 0)
    ctx.lineTo(x, ctx.canvas.height);
    ctx.stroke();
}

//Función drawHorizontalLine
function drawHorizontalLine(y)
{
    ctx.beginPath();
    ctx.moveTo(0, y)
    ctx.lineTo(ctx.canvas.width, y);
    ctx.stroke();
}

//Función drawGuides
function drawGuides(x, y)
{
    ctx.save();
    ctx.strokeStyle = "rgb(255, 201, 14)"
    ctx.lineWidth = 2;
    drawVerticalLine(x);
    drawHorizontalLine(y);
    ctx.restore();
}

//Manejador de eventos del canvas
ctx.canvas.onmousedown = function(e)
{
    var location = windowToCanvas(e.clientX,e.clientY);
    e.preventDefault();
    saveDrawingSurface();
    mousedown.x = location.x;
    mousedown.y = location.y;
    dragging = true;
}

ctx.canvas.onmousemove = function(e)
{
    var location;
    if(dragging == true)
    {
        guides = guidesCheckbox.checked;
        e.preventDefault();
        location = windowToCanvas(e.clientX,e.clientY);
        restoreDrawingSurface();
        updateLines(location);
        if(guides == true)
        {
            drawGuides(location.x, location.y);
        }
    }
}

ctx.canvas.onmouseup = function(e)
{
    var location = windowToCanvas(e.clientX,e.clientY);
    restoreDrawingSurface();
    updateLines(location);
    dragging = false;
}

//Manejadores de eventos de controles HTML
eraseAllButton.onclick = function(e)
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawGrid(ctx, "rgb(127, 127, 127)", 20, 20);
    saveDrawingSurface();
}

strokeStyleSelect.onchange = function(e)
{
    ctx.strokeStyle = strokeStyleSelect.value;
}

lineSize.onchange = function(e)
{
    ctx.lineWidth = lineSize.value;
}

//Inicializamos
drawGrid(ctx, "rgb(127, 127, 127)", 20, 20);