var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var X = 0;
var Y = 0;




function drawSquare()
{
      var b = Math.random() * 100;
      var c = Math.random() * 100;
      var d = Math.random() * 100;
      var a = Math.random() * 100;
      context.beginPath();
      context.fillStyle = getRandomColor();
      //context.fillRect(a, b, c, d);
      context.fillRect(evt.clientX, evt.clientY, math.floor(math.random() * 400),math.floor(math.random()*400))
      context.fill();
}

//Al rato nos conectamos para hacerlo bro

function getRandomColor() {
    var r = 255*Math.random(),
        g = 255*Math.random(),
        b = 255*Math.random();
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}


canvas.onmousedown = function (e)
{
      drawSquare();
}


/*
context.fillstyle = 'rgba (0,0, 255, 0.5)'; 
Math.floor(Math.random() * max);
context.fillRect(325, 100, 200, 200);
onmousedown */ 


