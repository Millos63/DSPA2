var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'),
fontHeight = 15,
margin = 35,
handTruncation = canvas.width / 25,
hourHandTruncation = canvas.width / 10,
numeralSpacing = -10,
radius = canvas.width / 3 - margin, 
//Superficie: ancho x alto 300 x 150.
//Circulo: radio = 75; ancho x alto 75 x 75
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
      drawNumerals();
}

function drawNumerals()
{
      //Con coma al final podemos crear varias variables
      var numerals = [1,2,3,4,5,6,7,8,9,10,11,12], //Arreglo
      angle = 0,
      numeralWidth = 0; 
      
      numerals.forEach(function(numeral) //Recorremos arreglo y se define la function
      { 
      angle = Math.PI / 6 * (numeral - 3);
      numeralWidth = context.measureText
      (numeral).width;
      context.fillText(numeral, 
            canvas.width/2 + Math.cos(angle)*(handRadius) - numeralWidth/2,
            canvas.height/2+Math.sin(angle)*(handRadius) + fontHeight /3
            );
      });
}

//Inicializamos
context.font = fontHeight + 'px Arial';
loop = setInterval(drawClock, 1000); //El intervalo de tiempo

