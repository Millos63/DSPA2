var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'),
fontHeight = 15,
margin = 35,
handTruncation = canvas.width / 25,
hourHandTruncation = canvas.width / 10,
numeralSpacing = 20,
radius = canvas.width / 4 -margin, 
handRadius = radius + numeralSpacing; //Espacio de las manesillas 

//funcion drawCircle
function drawCircle()
{
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2, true);
      context.stroke(); //Para hacer solo el perimetro del circulo, solo la linea
}
//funcion drawCenter
function drawCenter()
{
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, 3, 0, Math.PI * 2, true);
      context.fill(); //Para ponerle el puntito en el centro.
}
//funcion drawClock
function drawClock()
{
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawCircle();
      drawCenter(); 
}

//Inicializamos
context.font = fontHeight + 'px Arial';
loop = setInterval(drawClock, 1000); //El intervalo de tiempo


