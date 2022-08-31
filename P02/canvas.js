//var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.font = '30pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'blue';

context.fillText('Hola CANVAS',canvas.width/2-120,canvas.height/2);