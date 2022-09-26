var ctx = document.getElementById("canvas").getContext("2d");

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

//Para el t50pxamaño de la linea
ctx.lineWidth = "2";

ctx.font = "50px courier new ";
ctx.strokeStyle = "white";
//Poner contorno texto
ctx.strokeText("Armando", 40, 60); //Dibubajr contorno texto


ctx.font = "50px Helvetica s"; //Fuente
ctx.fillStyle = "green"; //Color de relleno
//Poner relleno texto
ctx.fillText("Dariel", 300, 60); //dibujar relleno texto

//Poner contorno
ctx.font = "50px Sans"; //Fuente
ctx.strokeStyle = "Red";
ctx.fillStyle = "Green"; //Color de rellenono y relleno texto
ctx.fillText("Diego", 500, 60);
ctx.strokeText("Diego", 500, 60);

//Dibujamos rectangulos
//rectangulo relleno
ctx.beginPath();
ctx.fillStyle = "red";
ctx.rect(20, 80, 80, 80);
ctx.fill();

//rectangulo contorno
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.rect(300, 80, 80, 80);
ctx.stroke();

//Rectangulo relleno y contorno
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.fillStyle = "purple";
ctx.rect(160, 80, 80, 80);
ctx.stroke();
ctx.fill();


//Circulo linea contorno
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.arc(60, 220, 40, 0, Math.PI/2, true);
ctx.stroke();

//Arc contorno.
ctx.beginPath();
ctx.strokeStyle = "yellow";
//Pi equivale a 180 grados
ctx.arc(60, 320, 40, Math.PI, Math.PI/180 * 90, true); //Aqui el angulo es en radianes no en grados. 
ctx.stroke();



//TAREA: Contorno con las lineas como una rebanada de pizza
// El centro del circulo (X,Y) cuyo sector vamos a dibujar, y el radio R de este.

//Estilos
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";

// El ángulo de partida ap y el ángulo final af
var ap = Math.PI;
var af = (Math.PI / 180) * 90;



function pizzaBorde(X , Y, R)
{
    // Las coordenadas del punto de partida en la circunferencia
    var XapI = X+R * Math.cos(ap);
    var YapI = Y+R * Math.sin(ap);
    //Las coordenadas del punto final de la circunferencia
    var XapF = X+R * Math.cos(af);
    var YapF = Y+R * Math.sin(af);

    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(XapI,YapI);
    ctx.arc(X, Y, R, ap, af, true); //Aqui el angulo es en radianes no en grados. 
    ctx.moveTo(X,Y);
    ctx.lineTo(XapF,YapF);
    ctx.stroke();
    ctx.closePath();
}

function pizzaRelleno(X, Y, R)
{
    // Las coordenadas del punto de partida en la circunferencia
    var XapI = X+R * Math.cos(ap);
    var YapI = Y+R * Math.sin(ap);
    //Las coordenadas del punto final de la circunferencia
    var XapF = X+R * Math.cos(af);
    var YapF = Y+R * Math.sin(af);

    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(XapI,YapI);
    ctx.arc(X, Y, R, ap, af, true); //Aqui el angulo es en radianes no en grados. 
    ctx.moveTo(X,Y);
    ctx.lineTo(XapF,YapF);
    ctx.fill();
    ctx.closePath();
}

function pizzaContornoRelleno(X, Y, R)
{
    // Las coordenadas del punto de partida en la circunferencia
    var XapI = X+R * Math.cos(ap);
    var YapI = Y+R * Math.sin(ap);
    //Las coordenadas del punto final de la circunferencia
    var XapF = X+R * Math.cos(af);
    var YapF = Y+R * Math.sin(af);

    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(XapI,YapI);
    ctx.arc(X, Y, R, ap, af, true); //Aqui el angulo es en radianes no en grados. 
    ctx.moveTo(X,Y);
    ctx.lineTo(XapF,YapF);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

pizzaBorde(60,420,40);
pizzaRelleno(60, 480, 40);
pizzaContornoRelleno(60,540,40);




//inicializamos
drawGrid(ctx,"rgb(127,127,127)",20, 20);

