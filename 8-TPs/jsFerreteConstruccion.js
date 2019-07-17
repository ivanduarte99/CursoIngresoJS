    
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres alambres de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radioio  de un terreno circular y se debe alambra con tres alambres de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cementoento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo=document.getElementById('Largo').value;
    ancho=document.getElementById('Ancho').value;

    perimetro= (largo * 2) + (ancho * 2);
    alambre= perimetro * 3;

    alert("Se necesita comprar "+alambre+" metros de alambre para los 3 hilos");
}
function Circulo () 
{
    var radio;
    var perimetro;  
    var alambre; 

    radio=document.getElementById('Radio').value;

    perimetro=(2 * 3.14 * radio);
    alambre=(perimetro * 3);

    alert("Se necesita comprar "+alambre+" metros de alambre para los 3 hilos")
}
function Materiales (
) 
{
    var largo;
    var ancho;
    var area;
    var cal; 
    var cemento;

    largo=document.getElementById('Largo').value;
    ancho=document.getElementById('Ancho').value;

    area= largo * ancho;
    cemento= (area * 2);
    cal= (area * 3);

    alert("Para un contrapiso de "+area+" metros se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
	
}