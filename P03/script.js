var canvas = document.getElementById("canvas");
var miSprite = document.getElementById("miSprite");
var context = canvas.getContext("2d");
var spriteSheet = new Image();



//Funcion que conoce coordenadas.
function windowToCanvas(canvas,X,Y)
{
      var bounds = canvas.getBoundingClientRect();
      return {
            x: x - bounds.left * (canvas.width / bounds. width),
            y: y - bounds.top * (canvas.height / bounds.height)


      };
}

//Funcion que dibuja la hoja de sprites
function drawBackGround()
{
      var VerticalLineSpacing = 10;
      var i = context.canvas.height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "red" 
      context.lineWidht = 0.5; //Para el grosor de las lineas

      while(i > VerticalLineSpacing * 4)
      {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(context.canvas.width,i);
            i -= VerticalLineSpacing;
            context.stroke();

      }

}
//funcion que dibuja en el canvas
function drawSpriteSheet()
{
      context.drawImage(spriteSheet, 0, 0 );

}
//dibujamos lineas guia
function drawGuideLines(x, y)
{
      context.strokeStyle = "rgba(255,0,230, 0.8)";
      context.lineWidht = 0.5;
      drawVerticalLine(x);
      drawHorizontal(y);
}
//Controlar evento del raton - cuando se mueve el raton.
canvas.onmousemove = function(e)
{
      var loc = windowToCanvas(canvas, e.clientX, e.clientY);
      drawBackGround();
      drawSpriteSheet();
      drawGuideLines(loc.x, loc.y);
}
//Inicialización
spriteSheet.src = "HojaSprite.png";
spriteSheet.onload = function(e){
      drawSpriteSheet();
}

drawBackGround();

//Los argumentos e son de evento.
