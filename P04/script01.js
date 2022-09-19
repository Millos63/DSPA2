var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Nuestro ctx nos permite pintar dentro de canvas
//lineJoin es para el redondeado de la linea
ctx.lineJoin = "round";
//Para el grosor de la linea
ctx.lineWidth = 10;


//Para el COLOR del relleno del cuadrado
ctx.fillStyle = "pink"; 
//Para el color de la linea
ctx.strokeStyle = "orange"
//strokeRect Sirve para dibujar un rectangulo sin relleno
ctx.strokeRect(10, 10, 100, 100);


ctx.lineWidth = 10;
ctx.fillStyle = "pink";
//Rectangulo con relleno
ctx.fillRect(120, 10, 100, 100);



ctx.fillStyle = "blue";
ctx.strokeStyle = "red"
ctx.strokeRect(230, 10, 100, 100);
ctx.fillRect(230, 10, 100, 100);

ctx.canvas.onmousedown = function (e)
{
      ctx.clearRect(0,0, canvas.width, canvas.height);
}


