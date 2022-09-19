var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var gradiente = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

//Con los gradientes, se va degradando el color
gradiente.addColorStop(0, "blue");
gradiente.addColorStop(0.2, "orange");
gradiente.addColorStop(0.5, "red");
gradiente.addColorStop(0.8, "purple");
gradiente.addColorStop(1, "yellow");

ctx.fillStyle = gradiente;
ctx.fillRect(0, 0, canvas.width, canvas.height);

