var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');



//Este evento nos ayudara a crear los recuadros
canvas.onmousedown = function (event)
{
        context.beginPath();
        context.fillStyle = rgbaColor();
        //Con el math.random() le damos un numero aleatorio, para que cree los recuadros aleatorios
        context.fillRect(event.clientX, event.clientY, Math.floor(Math.random() * 300), Math.floor(Math.random() * 300));  

};


// Función que ayudara a elegir colores randoms.
function rgbaColor() 
{
    var r = 255 * Math.random()|0,
        g = 255 * Math.random()|0,
        b = 255 * Math.random()|0
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//Con este evento cada que se mueva el raton, se iran creando las lineas en donde se vaya colocando el mouse
canvas.onmousemove = function(event)
{     

    //Limpiamos el canvas cada que se mueve el mouse, con esto borramos los recuadros.  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    //Con moveTo decimos en donde se empezara a crear la linea.
    //En este caso queremos poner el punto de inicio de la linea, en 0 sobre el eje de cordenadas de Y
    // y en X la determinara la cordenada en x del mouse.
    context.moveTo(event.clientX,0);
    //Con el lineTo se indica hasta donde se creara la linea, en X sera la cordenada en x del mouse,
    //en Y sera 600 que es el limite de nuestro canvas, para que haga la linea vertical completa.
    context.lineTo(event.clientX,600);

    //Ponemos el punto de partida de la linea horizontal que sera X:0, Y:Coordenada en y del mouse 
    context.moveTo(0,event.clientY);
    //Construimos la linea hasta X:1200, Y: coordenada en y del mouse 
    context.lineTo(1200,event.clientY);

    //Agregamos lineas de colores random.
    context.strokeStyle = rgbaColor();
    context.stroke();
    context.closePath();
    
};

