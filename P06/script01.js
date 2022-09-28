var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//El gradiante radial funciona de la siguente manera
//puedes elegir por donde inicia dependiendo de los valores
var grad = ctx.createRadialGradient(
    canvas.width/2,canvas.height,10,
    canvas.width/2,0,200
);

grad.addColorStop(0,"blue");
grad.addColorStop(0.20,"yellow");
grad.addColorStop(0.40,"black");
grad.addColorStop(0.60,"white");
grad.addColorStop(0.80,"red");
grad.addColorStop(1,"purple");

ctx.fillStyle = grad;

ctx.rect(0,0,canvas.width,canvas.height);
ctx.fill();

